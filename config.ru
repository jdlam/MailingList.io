# Config
require 'bundler'
Bundler.require()

# Models
require './models/follower'

# Controllers
require './controllers/application_controller'
require './controllers/followers_controller'
require './controllers/api/followers_api_controller'

# Routes
map('/'){ run FollowersController }
map('/api/followers'){ run FollowersApiController }

require 'active_record'

ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || 'postgres://localhost/musician_mailing_app_db')
