class FollowersApiController < ApplicationController

  def follower_params
    @follower_params = @follower_params || JSON.parse(request.body.read.to_s)
  end

  get '/' do
    content_type :json
    Follower.all.to_json
  end

  post '/' do
    content_type :json
    follower = Follower.create(params[:follower] || follower_params)
    follower.to_json
  end

  delete '/:id' do
    Follower.find(params[:id]).delete
  end

end
