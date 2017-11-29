$(document.body).ready(function(){

   //page loads back to top on refresh
    window.onbeforeunload = function() {
    window.scrollTo(0,0);
  }

  //changing texts on about section
  var texts =['i am alex pham','front end web developer', 'i love to code','i love to learn','i also love cars and football'];
  var count = 0;
  function changeText() {
    $('.intro-text').text(texts[count]);
    count < 6 ? count++ : count = 0;
  }
  setInterval(changeText, 1200);

  //toggle navigation
  $('.nav-toggle').on('click', function() {
    $('.inner').toggleClass("open");
  });

  //smooth scrolling
  $(function() {
    $('a[href*="#"]:not([href="#"])').on('click', function(){
      if(location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1)+ ']');
        if(target.length) {
          setTimeout(function(){
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
          }, 600);
          return false;
        }
      }
    });
  });

  var big = $('.titanic'),
      header = $('header'),
      underline = $('.underline'),
      portfolioBox = $('.portfolio-sec'),
      project = $('.project'),
      navLink = $('.nav-link'),
      skillsBox = $('.skills-sec'),
      skills = $('.skill'),
      arrow = $('#arrow'),
      wow = $(window),
      fz;

      portfolioBox.css({
        'marginBottom': $('footer').height()
      });

      TweenMax.from(big, 6, {
        y: 180,
        opacity: 0,
        ease: Elastic.easeOut
      })

      $('.nav-link').on('click', function(){
        $('.inner').toggleClass('open');
      });
      //scroll to top on arrow click
      $('#arrow').on('click', function(e){
        $('html, body').animate({
          scrollTop: 0
        }, 700);
        e.preventDefault();
      });

      //adding effect to mouseover list items
      $('nav li').on('mouseenter', function(){
        var underline = $(this).find('div.underline'),
            width = $(this).find('span').width();
        TweenMax.to(underline, .1, {
          width: width
        });
      })
      .on('mouseleave', function() {
        var underline = $(this).find('div.underline');
        TweenMax.to(underline, .1, {
          width: 0
        });
      })

      wow.scroll(function(){
        var wowScroll = $(this).scrollTop();
            wowHeight  = $(this).height();
        if(wowScroll >= (header.height() - big.height()) / 2) {
        }
        if(wowScroll < (header.height() - big.height()) / 2){

        }
      })

      wow.resize(function(){
        portfolioBox.css({
          'marginBottom': $('footer').height()
        })
      })

      $('#portfolio').waypoint(function(){
        $('footer').css({
          'display': 'block'
        })
        TweenMax.staggerTo(project, .25, {
          'opacity': 1,
          x: 0
        }, .25)
      }, {
        offset: 300
      })

      portfolioBox.waypoint(function(){

      })

     skillsBox.waypoint(function() {
       skills.filter('.toR').css({
         'opacity': 1,
         'transform': 'translateX(0)'
       });
       skills.filter('.toL').css({
         'opacity': 1,
         'transform': 'translateX(0)'
       });
       skills.eq(1).css({
         'opacity': 1,
         'transform':'translateY(0)'
       });
       skills.eq(4).css({
         'opacity': 1,
         'transform': 'translateY(0)'
       });
       skills.eq(7).css({
         'opacity': 1,
         'transform': 'translateY(0)'
       });
     });
});
