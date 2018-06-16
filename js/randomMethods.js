define(['jquery'],
    function($){
        // Define object to use
        var methods = {};
        // Display a message
        methods.showMessage = function(arg){
            $('#addPara').append(arg);
        }
        // Change a message
        methods.changeMessage = function (arg) {
            $('#addPara').append(arg);
        }
        // Message alert 
        methods.alertMessage = function (arg) {
            alert(arg);
        }
        // Remove a message
        methods.removeMessage = function () {
            $('#addPara').empty();
        }
        return methods;
    }
);
