angular.module("mmaapostas").controller("mmaApostasCtrl", function($scope, nextEventsAPI){
    //$scope.app = "Lista Telefônica - Aula 13 - Modularizando o projeto";
    $scope.nextEvents = [];

    var getNextEvents = function (){
        nextEventsAPI.getNextEvents().success(function(data){
            $scope.nextEvents = data;
        }).error(function(data, status){
            $scope.error = "Não foi possível carregar os dados.";
        });
    };

    getNextEvents();
});
