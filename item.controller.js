angular.module('app').controller('ItemController',function($scope){//creiamo il controller da richiamare nel html

    $scope.lista=[];



    $scope.inserisci = function(){
        $scope.lista.push({
            descrizione:$scope.descrizione,
            fatto:false,
        });
        $scope.descrizione = "";//pulisce la input
    }
    $scope.elimina= function(indice){
        $scope.lista.splice(indice, 1);
    }
});