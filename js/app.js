$(function() {
    let filter = $("[data-filter]");

    filter.on("click", function(event){
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat == 'all')
            {
              $("[data-cat]").removeClass('hide');
            }
        else{
            $("[data-cat]").each(function(){

            let workCat =$(this).data('cat');

            if(workCat != cat)
                {
                    $(this).addClass('hide');
                }
            else
                {
                    $(this).removeClass('hide');
                }



        });
        }
    });


    /*modal*/

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");


    modalCall.on("click", function(event){
      event.preventDefault();

      let $this = $(this);
      let modalId = $this.data('modal');


        $(modalId).addClass('show');
        $("body").addClass('no-scroll');


        setTimeout(function(){
                       $(modalId).find(".modal__dialog").css({
            transform:"rotateX(0)"
                       });
        },200);
    });


modalClose.on("click", function(event){
      event.preventDefault();

      let $this = $(this);
      let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
        transform:"rotateX(90deg)"
                       });

    setTimeout(function(){
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
        },200);
    });


    /*burger*/


    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function(event){
        event.preventDefault();

        if ( nav.hasClass('show') ) {


            $('.nav').css('right','-1000px');
               setTimeout(function(){
                nav.removeClass("show")
            },200);
}
        else{
            nav.addClass("show");
             setTimeout(function(){
              $('.nav').css('right','0px');
            },200);


        }



    });


        /*print*/


    const print =$("#print");
    print.on("click", function(){
        $(".btn, .modal__close").css('display', 'none');
         setTimeout(function(){
        $(".btn, .modal__close").css('display', 'inline-block'),200});


    });



$("#about").on("click",function(event){
    let blockOffset = $("#aboutTitle").offset().top;
    $("html, body").animate({
       scrollTop:  blockOffset -60
    }, 1000);

});






















});
