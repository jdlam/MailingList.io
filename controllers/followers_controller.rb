class FollowersController < ApplicationController


  get '/' do
    @followers = Follower.all
    erb :index
  end

  post '/' do
    Follower.create(params[:follower])
    redirect '/'
  end
end
