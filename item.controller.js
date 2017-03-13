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


    $scope.listaRicetta=[{
        _id:"",
        "titolo":"torta di mele",
        "immagini":["img1", "img2"]

    },{
        _id:"",
        "titolo":"torta di mele",
        "immagini":["img1", "img2"]
    }];

    $scope.ricetta={
        _id:"",
        "titolo":"torta di mele",
        "categoria":"torta di mele",
        "ingredienti":["mele", "uova", "farina"],
        "immagini":["img1", "img2"]
    };
});