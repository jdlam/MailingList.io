require 'bundler'
Bundler.require()

get '/' do
  erb :index
end

get '/people' do
  erb :index
end

post '/people' do
  # place new person in database
  redirect '/people'
end
