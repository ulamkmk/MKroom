
$(function(){

$('#cont_photo1').mouseover(function(){

      $('#cont_1').animate({

        top:"375px",
        height:"59px",
        opacity:"0.8"

      },10);

      }).mouseout(function(){

      $('#cont_1').animate({

        top:"430px",
        height:"0px",
        opacity:"0"


    },10);

  });
$('#cont_photo2').mouseover(function(){

      $('#cont_2').animate({

        top:"640px",
        height:"52px",
        opacity:"0.8"


      },10);

      }).mouseout(function(){

      $('#cont_2').animate({

        top:"692px",
        height:"0px",
        opacity:"0"


    },10);

  });
$('#cont_photo3').mouseover(function(){

        $('#cont_3').animate({

          top:"230px",
          height:"42px",
          opacity:"0.8"


        },10);

        }).mouseout(function(){

        $('#cont_3').animate({

          top:"270px",
          height:"0px",
          opacity:"0"


      },10);

    });
$('#cont_photo4').mouseover(function(){

            $('#cont_4').animate({

              top:"390px",
              height:"42px",
              opacity:"0.8"


            },10);

            }).mouseout(function(){

            $('#cont_4').animate({

              top:"430px",
              height:"0px",
              opacity:"0"


          },10);

        });
$('#cont_photo5').mouseover(function(){

                    $('#cont_5').animate({

                      top:"644px",
                      height:"50px",
                      opacity:"0.9"


                    },10);

                    }).mouseout(function(){

                    $('#cont_5').animate({

                      top:"690px",
                      height:"0px",
                      opacity:"0"


                  },10);

                });
$('#cont_photo6').mouseover(function(){

                  $('#cont_6').animate({

                    top:"225px",
                    height:"45px",
                    opacity:"0.9"

                  },10);

                  }).mouseout(function(){

                  $('#cont_6').animate({

                    top:"270px",
                    height:"0px",
                    opacity:"0"


                },10);

              });



$('#cont_fade1').mouseover(function () {
        $(this).animate({
            opacity:0.2
        },200);

        $('#cont_rect1').animate({
            opacity:0.7
        },200);

        $('#cont_ph1').animate({
            top:"112px",
            left:"135px",
            width:"588px",
            height:"580px"
        },200);


    }).mouseout(function(){
        $(this).animate({
            opacity:0.9
        },200);

        $('#cont_rect1').animate({
            opacity:1,
        },200);

        $('#cont_ph1').animate({
            top:"100px",
            left:"135px",
            width:"597px",
            height:"600px"
        },200);


    }).click(function(){
        window.location.href = 'portfolio.html';

    });


      });
