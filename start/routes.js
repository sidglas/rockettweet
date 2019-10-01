'use strict'
const controller = use('App/Controllers/Http/AuthController') 
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON!!!' }
})
Route.post('/register', 'AuthController.register');
//não precisa importar o AuthController pois o adonis "entende" controller.função
Route.post('/authenticate', 'AuthController.authenticate');

//Protegendo Rotas
Route.get('/app','AppController.index').middleware(['auth']);
Route.group(() => {
  Route.resource('tweets', 'TweetController')
  .apiOnly()
  .except('update');
}).middleware(['auth']);
