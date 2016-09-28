function LibrosListController($scope, $http) {
  $http.get('data/libros.json').success(function(data) {
	$scope.libros = data;
  });
 

  $scope.orderField = "titulo";
  $scope.orderReverse = "true";
}