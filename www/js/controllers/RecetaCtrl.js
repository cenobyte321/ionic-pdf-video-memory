angular.module('ebjsts')
.controller('RecetaCtrl', function($scope, $timeout, $stateParams,$ionicLoading,$ionicModal, $http,$state,$rootScope) {
	$scope.receta = {
		id: $stateParams.recetaId,
		name: "Item",
		videos: [{
				nombre:"Test 1",
				url: "http://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4"
			},
			{
					nombre:"Test 2",
					url:"http://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4"
				}],
		pdfUrl: "files/file.pdf",
		maximizar: false
	};
	$scope.pdfUrl = $scope.receta.pdfUrl;






	$scope.toogleMaximizar = function(){
		$scope.receta.maximizar = !$scope.receta.maximizar;
		$timeout(function(){
          	var header = document.getElementById("recipeHeader");
		    var recetapdf = angular.element(document.getElementsByClassName("recipe-content-wrapper"));
			var headerHeight = header.offsetHeight - 10;
		 	recetapdf.css('padding-top', headerHeight  + 'px');

        }, 500);
	}

	$scope.goFullscreen = function($event){
		var vid = angular.element($event.currentTarget).find("video")[0];
		vid.webkitEnterFullscreen();
		vid.addEventListener('webkitendfullscreen',onFullscreenCloseEvent, false);
		vid.addEventListener('webkitfullscreenchange',onFullscreenCloseEvent, false);
		vid.addEventListener('ended',closeFullscreen, false);
		vid.play();
	}

	var onFullscreenCloseEvent = function(evt){
		if(document.webkitIsFullScreen){
			return;
		}
		evt.currentTarget.pause();
		evt.currentTarget.removeEventListener('webkitfullscreenchange', onFullscreenCloseEvent, false);
		evt.currentTarget.removeEventListener('webkitendfullscreen', onFullscreenCloseEvent, false);
		evt.currentTarget.removeEventListener('ended',closeFullscreen, false);
	}

	var closeFullscreen = function(evt){
		evt.currentTarget.webkitExitFullScreen();
		evt.currentTarget.removeEventListener('webkitfullscreenchange', onFullscreenCloseEvent, false);
		evt.currentTarget.removeEventListener('webkitendfullscreen', onFullscreenCloseEvent, false);
		evt.currentTarget.removeEventListener('ended',closeFullscreen, false);
	}


	$scope.$on( "$ionicView.beforeLeave", function( scopes, states ) {
		console.log("exiting");
		var videos = angular.element(document).find("video");
		for (var i = videos.length - 1; i >= 0; i--) {
			videos[i].src = '';
        	videos[i].load();
		};
		if(window.PDFJSPROXY!=undefined){
			window.PDFJSPROXY.cleanup();
			window.PDFJSPROXY.destroy().then(function(){
				console.log("PDF destroyed");
			})
		}
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
