// JavaScript

$(document).ready(function(){
    
    
    function hideAll() {
        $('#knights').hide();
        $('#undisclosed').hide();
        $('#panicstation').hide();
        $('#reapers').hide();
    }
    
    hideAll();
    
    $('.album').click (function() {
        
        hideAll();
                
        
        switch ( $(this).attr("id") ) {
            case "blackholes" :
                $('#knights').slideToggle();
                break;
            case "resistance" :
                $('#undisclosed').slideToggle();
                break;
            case "2ndlaw" :
                $('#panicstation').slideToggle();
                break;
            case "drones" :
                $('#reapers').slideToggle();
                break;
        }
    });  

    
});

