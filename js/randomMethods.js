define(['jquery'], function($){
    
    var methods = {};

    methods.showMessage = function(arg){
        $('#addPara').append(arg);
    }

    methods.changeMessage = function (arg) {
        $('#addPara').append(arg);
    }

    methods.alertMessage = function (arg) {
        alert(arg);
    }

    methods.removeMessage = function () {
        $('#addPara').empty();
    }

    return methods;
});
