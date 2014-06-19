require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/flash'
require 'haml'
require 'pry'

# require all of the models and view templates
Dir['app/**/*.rb'].each { |file| require_relative file }

# set views directory to app/views
set :views, 'app/views'

get '/' do
  haml :instructions
end

get '/game' do
  haml :game
end

post '/game' do
  Score.create(player_name: params[:player_name], score: params[:score])
  redirect '/highscores'
end

get '/highscores' do
  binding.pry
  @scores = Score.all
  haml :highscores
end
