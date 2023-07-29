



var width = $(window).width(); 
window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","#fff");
        $("#header").css("color","#000");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","#fff");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","6vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #fff");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1000, function(){
        window.location.hash = hash;
       });
       } 
      });
  });


  document.addEventListener("DOMContentLoaded", function () {
    // Delay time in milliseconds (e.g., 3000ms = 3 seconds)
    const delayTime = 2000

    setTimeout(function() {
      const typedText = new Typed('.animation1', {
        strings: ['Coding is Where My Heart Plays, Creativity Unleashed Every Day.'],
        typeSpeed: 40, // Speed of typing in milliseconds
        loop: false, // Set to true if you want the animation to loop
        showCursor: false, // Set to true to display the cursor while typing
      });
    }, delayTime);
  });


  function showHireMeAlert() {
    Swal.fire({
      title: '<span class="clr">Thank You!</span>',
      html: '<span class="clr">Thank you for considering to hire me!</span>',
      icon: 'success',
      background:'rgb(255, 44, 90)',
      
  textColor: 'fff',
      confirmButtonText: 'OK'
    });


     AOS.init({
            duration: 1200
        , })
        AOS.init();
        window.addEventListener('scroll', function() {
            var element = document.getElementById('scrollAnimation');
            var position = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;

            // Calculate the scroll position when the element is at half height
            var scrollPosition = position.top - (windowHeight / 2);

            // Checking if the scroll position is in the viewport
            if (scrollPosition < 0) {
                element.style.opacity = '1';
                element.setAttribute('data-aos', 'fade-up');
                element.classList.add('aos-animate');
            } else {
                element.style.opacity = '0';
                element.setAttribute('data-aos', '');
                element.classList.remove('aos-animate');
            }
        });


  $(document).ready(function() {
            $(".btnn").click(function() {
                $(".nxt").fadeIn();
                 $(".btnn").fadeOut();
            });
        });
