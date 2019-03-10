$( document ).ready(function() {
    console.log("ready");
    
//Press enter to play function
$(document).keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        console.log('You pressed enter! - keypress');
        $(".startDiv").hide();
    }
});








//end docu.ready    
});
