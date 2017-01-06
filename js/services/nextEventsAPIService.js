angular.module('mmaapostas').factory("nextEventsAPI", function($http){
    var _getNextEvents = function (){
        return $http.get("resources/nextEvents.json");
    };

    return {
        getNextEvents : _getNextEvents
    };

});
