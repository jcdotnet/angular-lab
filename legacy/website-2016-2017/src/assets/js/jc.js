$(function() {

    $('#navbar')
        .on('shown.bs.collapse', function() {
            $('#navbar-hamburger').addClass('hidden');
            $('#navbar-close').removeClass('hidden');    
        })
        .on('hidden.bs.collapse', function() {
            $('#navbar-hamburger').removeClass('hidden');
            $('#navbar-close').addClass('hidden');        
        });
    
    setInterval(setEstilos, 100);
   
    
});

function setEstilos()
{
    if ($('.navbar-default').is(':hover'))
    {
        $('.navbar-default').first().css("background", "#121212");   

    }
    else if ($("#home-header").length && window.matchMedia('(min-width: 768px)').matches && $(this).scrollTop() > 50)
    {
        $('.navbar-default').first().css("background", "#121212");
        
    }
    else if ($("#home-header").length && window.matchMedia('(max-width: 768px)').matches && $(this).scrollTop() > 10)
    {
        $('.navbar-default').first().css("background", "#121212");
        
    }
    else if ($("#home-header").length)
    {
        $('.navbar-default').first().css("background", "transparent");  
    }
    else
    {
        $('.navbar-default').first().css("background", "#121212");
    }
    if ($(this).scrollTop() > 1){  
        $('.first-section').css("padding-top", window.matchMedia('(min-width: 768px)').matches ? "130px" : "100px");
        $('#top-bar-container').css({"display": "none", "transition": "all 0.4s ease" });
        $('#flags').css("display",  window.matchMedia('(min-width: 768px)').matches ? "none" : "inline-block");
    }
    else{
        $('.first-section').css("padding-top", window.matchMedia('(min-width: 768px)').matches ? "130px" : "100px");
        $('.first-section').css("margin-top", window.matchMedia('(min-width: 768px)').matches ? "30px" : "0px");
        $('#top-bar-container').css({"display": "block", "transition": "all 0.4s ease", "background-color": "white" });
        $('#flags').css("display", window.matchMedia('(min-width: 768px)').matches ? "none" : "inline-block");
    }  

}


$( window ).resize(function() {
    if (window.matchMedia('(min-width: 768px)').matches && ($(window).scrollTop() > 1))
    {
        $('.first-section').css({"padding-top": "100px", "margin-top":"0px"});
        $('#flags').css("display", "none");
    }
    else if (window.matchMedia('(min-width: 768px)').matches && ($(window).scrollTop() === 0))
    {
        $('.first-section').css({"padding-top": "130px", "margin-top":"30px"});
        $('#flags').css("display", "none");
    }
    else if (!window.matchMedia('(min-width: 768px)').matches) {
        $('.first-section').css({"padding-top": "100px", "margin-top":"0px"});
        $('#flags').css("display", "inline-block");
    }
    
});