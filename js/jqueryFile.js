define(
    ['jquery', 'randomMethods'],
    function ($, methods) {
        // variable for switch
        var toggle = true;

        $('#clickme').click(function(){
            if (toggle == true) {
                methods.removeMessage();
                methods.showMessage('Now require JS works fine');
                toggle = false;
            } else {
                methods.removeMessage();
                methods.changeMessage('Now require JS change fn works fine');
                toggle = true;
            }
        });
    }
);
