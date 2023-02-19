$(document).ready(function(){
    accordionClicked();
})

function accordionClicked(){
    $('.accordion-header').click(function(){
        let content = $(this).siblings('.accordion-content');
        let parent = $(this).parent();
        if(content.hasClass('active')){
            content.removeClass('active');
            parent.removeClass('enabled');
        }
        else{
            content.addClass('active');
            parent.addClass('enabled');
        }
    })
}