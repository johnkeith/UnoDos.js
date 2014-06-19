require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/flash'
require 'haml'
# require 'pry'

# require all of the models and view templates
Dir['app/**/*.rb'].each { |file| require_relative file }

# set views directory to app/views
set :views, 'app/views'

get '/' do
  haml :game
end
