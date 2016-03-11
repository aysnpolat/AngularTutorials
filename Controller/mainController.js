aysunApp.controller("MainController", function($scope){
	$scope.kutu1 ; 
	$scope.kutu2 ;
	$scope.sonuc;

	$scope.hesapla=function(){
		$scope.sonuc=$scope.kutu1-($scope.kutu2/4);
	};
});