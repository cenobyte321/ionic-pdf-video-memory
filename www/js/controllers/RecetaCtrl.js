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
		var videos = angular.element(document).find("video");
		for (var i = videos.length - 1; i >= 0; i--) {
			videos[i].src = '';
        	videos[i].load();
		};
    });

		$scope.$on('$destroy', function() {
		     console.log('scope is being destroyed');
		});

        $timeout(function(){
          	var header = document.getElementById("recipeHeader");
		    var recetapdf = angular.element(document.getElementsByClassName("recipe-content-wrapper"));
			var headerHeight = header.offsetHeight - 10;
		 	recetapdf.css('padding-top', headerHeight  + 'px');

        }, 500);





});
