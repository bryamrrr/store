angular.module('tienda', []);

angular.module('tienda').controller('ProductosController', ProductosController);

function ProductosController($scope, $http) {
  console.log($scope);
  $scope.mensaje = 'Agujero de gusano activado';

  let promesa = $http({
    method: 'GET',
    url: 'https://demo1719473.mockable.io/productos'
  });

  promesa.then(function (response) {
    $scope.productos = response.data;
  });
}






