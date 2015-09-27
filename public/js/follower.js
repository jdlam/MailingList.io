// Model
var Follower = Backbone.Model.extend({});

// Collection
var FollowerCollection = Backbone.Collection.extend({
  model: Follower,
  url: '/api/followers'
});

// Views
var FollowerView = Backbone.View.extend({
  tagName: 'div',
  className: 'follower',
  template: _.template( $('#follower-template').html() ),
  render: function(){
    this.$el.empty();
    var html = this.template( this.model.toJSON() );
    var $html = $( html );
    this.$el.append( $html );
  },
  events:{
    'click button.remove': 'removeFollower'
  },
  removeFollower: function(){
    this.model.destroy();
    this.$el.remove();
  }
});

var FollowerListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    this.$el.empty();
    var followers = this.collection.models;
    var view;
    for (var i = 0; i < followers.length; i++) {
      view = new FollowerView({model: followers[i]});
      view.render();
      this.$el.append( view.$el );
    }
  }
});

var followers = new FollowerCollection();
var followerPainter = new FollowerListView({
  collection: followers,
  el: $('#followers-list')
});
followers.fetch();


$('form.create-follower').on('submit', function(e){
  e.preventDefault();
  var newName = $(this).find("#followerName").val();
  var newEmail = $(this).find("#followerEmail").val();
  followers.create({name: newName, email: newEmail});
  resetForm();
});
