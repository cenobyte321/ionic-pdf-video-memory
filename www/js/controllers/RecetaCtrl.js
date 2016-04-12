angular.module('ebjsts')
.controller('RecetaCtrl', function($scope, $timeout, $stateParams,$ionicLoading,$ionicModal,pdfDelegate, $http,ENV,$state,$rootScope) {
	$scope.receta = {
		id: $stateParams.recetaId,
		name: "Item",
		pdfUrl: "files/file.pdf",
		maximizar: false
	};
	$scope.pdfUrl = $scope.receta.pdfUrl;


	$scope.$on( "$ionicView.beforeLeave", function( scopes, states ) {
		console.log("exiting");
    });

		$scope.$on('$destroy', function() {
		     console.log('scope is being destroyed');
		});


});
