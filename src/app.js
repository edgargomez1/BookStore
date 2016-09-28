angular.module('app', []).

  config(['$routeProvider', function($routes) {
  
  $routes.
      when('/libros', {
		  templateUrl: 'src/views/libros-list.html',
		  controller: LibrosListController
		  }).
	  
      when('/libro/:libroId', {
		  templateUrl: 'src/views/libro.html',
		  controller: LibroDetailController
		  }).
	 
      otherwise({
		  redirectTo: '/libros'});

}]);