<template>
  <v-app toolbar--fixed toolbar >
    <!-- TOOLBAR -->
    <v-toolbar id="toolbar1" fixed class="transparent elevation-0 " >
      <v-flex lg4 style="width:20px">
        <v-toolbar-items class="" style="height: -webkit-fill-available;">
          <v-layout justify-center align-center >
            <v-btn id="btn_included" href="#included" class="white--text arrow hidden-sm-and-down" style="height: -webkit-fill-available;" flat>WHAT INCLUDED</v-btn>
            <v-btn id="btn_useit" href="#useit" class="white--text arrow hidden-sm-and-down" style="height: -webkit-fill-available;" flat>HOW TO USE IT</v-btn>
            <v-btn id="btn_benefits" href="#benefits" class="white--text arrow hidden-sm-and-down" style="height: -webkit-fill-available;" flat>OTHER BENEFITS</v-btn>
            <!--  -->
            <v-btn id="btn_included" href="#included" class="white--text arrow hidden-md-and-up" style="height: 45px; width: 45px;" flat icon><v-icon>explore</v-icon></v-btn>
            <v-btn id="btn_useit" href="#useit" class="white--text arrow hidden-md-and-up" style="height: 45px; width: 45px;" flat icon><v-icon>swap_calls</v-icon></v-btn>
            <v-btn id="btn_benefits" href="#benefits" class="white--text arrow hidden-md-and-up" style="height: 45px; width: 45px;" flat icon><v-icon>card_giftcard</v-icon></v-btn>
            <!-- MENU -->
           <!--  <v-menu offset-y open-on-hover bottom left full-width  class="hidden-md-and-up" style="display: inline-flex; align-items: center; text-align: center;">
              <v-btn style="height: 38px; width: 38px;" icon slot="activator" dark>
                <v-icon large>more_vert</v-icon>
              </v-btn>
              <v-layout justify-center align-center >
                <v-list>
                  <v-list-tile-content>
                    <v-list-tile v-for="item in items" :key="item.title" @click="">
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list-tile-content>
                </v-list>
              </v-layout>
            </v-menu> -->
          </v-layout>
        </v-toolbar-items>
      </v-flex>
      <v-flex lg4 style="width:20px">
        <v-layout justify-center>
          <v-btn dark href="#home"  class="transparent arrow elevation-0 white--text " style="height: 50%; width: auto;" >
            <img id="mylogo" src="../src/assets/limalogowhite.png" class=""  style="width:55px;"></img>
          </v-btn>
        </v-layout>
      </v-flex>
      <v-flex lg4 style="width:20px">
        <v-toolbar-items class="">
          <v-layout justify-center align-center>
            <v-btn href="#" class="white--text" style="height: 38px; width: 38px;" icon><v-icon>person</v-icon></v-btn>
            <!-- <v-btn id ="bb" class="arcoirisbutton orange lighten-3 white--text elevation-0 shadowfilter" style="left:10%" round>BUY NOW</v-btn>
            -->
            <v-btn id ="bb" class="arcoirisbutton orange lighten-3 white--text elevation-0 shadowfilter" style="left:10%; height: 45px; width: 45px; padding:0" round>
              <v-layout row wrap justify-center >
                <v-icon>local_activity</v-icon>
              </v-layout>
            </v-btn>
            

          </v-layout>
        </v-toolbar-items>
      </v-flex>
    </v-toolbar>
    <!-- CONTAINER VIDEO -->
    <v-container fluid id="home" style="margin:0; padding:0; height:-webkit-fill-available; background-color:black;">
      <v-flex lg12>
        <v-parallax src="../src/assets/portadalcp.png" height=-webkit-fill-available style="height:-webkit-fill-available; width:auto;">
          <v-layout column align-center justify-center style="height:-webkit-fill-available;"r>
            <img id="logoimg" src="../src/assets/limalogowhite.png" class="shadowfilter"  style="width:auto;height:342px;"></img>
          </v-layout>
        </v-parallax>
      </v-flex>

      <v-flex lg12>
        <v-layout justify-center align-center style="margin:-70px">
         <v-btn dark href="#included"  class="transparent arrow elevation-0" style="height: 1px; width: 1px;" >
          <img id="seemore" src="../src/assets/seemore.png">
        </v-btn>
      </v-layout>
    </v-flex>

  </v-container>
  <!-- MAIN -->
  <main >
    <!-- INCLUDED -->
    <!-- #438496 #B37D4E #CD5360 #286DA8 #2c3e50 midnight-->
    <v-container id="included" fluid style="margin:0; padding:0; " class="" >
      <v-layout row wrap justify-center class="" style=" height:-webkit-fill-available; padding-top:1%;padding-bottom:1%;  background-size: auto 100%;">

        <v-flex xs12 sm12 md12 lg12>
          <v-layout row align-center justify-left style="padding-top:80px; padding-bottom:0%">
            <v-flex xs12 sm12 md4 lg4 class="hidden-sm-and-down">
              <v-layout column align-center justify-center class="black--text " style="padding-right:20%; padding-left:20%" >
                <p class="flow-text" style=""> 
                  Lorem ipsum. Dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor. Incididunt ut labore. et dolore magna aliqua. Integer vitae justo. Eget magna fermentum. Iaculis eu non diam. 
                </p>
              </v-layout>

            </v-flex>
            <v-flex xs8 sm7 md4 lg4 offset-xs2 offset-sm0>
              <v-layout column align-center justify-center class="" style="">
                <img class="rotateYaxis" src="../src/assets/tickets.png" style="width:70%;"></img>
                <h4 class="flow-text" style="color: #F31160;font-size:30px;font-weight:500;">Buy your tickets! </h4> 
              </v-layout>
            </v-flex>
            <v-flex xs12 sm5 md4 lg4 class="hidden-xs-only">
              <v-layout column align-center justify-center class="black--text" style="padding-right:20%; padding-left:20%">
                <p id="hidden_included" class="flow-text" style=""> 
                  Lorem ipsum. Dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor. Incididunt ut labore. et dolore magna aliqua. Integer vitae justo. Eget magna fermentum. Iaculis eu non diam. 
                </p>
              </v-layout>
            </v-flex>
            <v-flex id="cart" xs12 sm4 md4 lg4  style="position: fixed; top: 5em; right: 10px;">
              <div class="app active" style="margin:0; position: fixed; right: 10px;">
                <div>
                  <div class="cust-info" style="margin-bottom:10px; margin-top:10px">
                    <h2 style="font-size:14px; margin:0; padding:0">Hi, Traveler!</h2>
                    <p style="padding-top:5px;padding-bottom:5px;margin:0">Buy tickets for a great adventure in Lima, Peru</p>
                  </div>
                </div>
                <div class="maindiv">
                </div>
                <div class="footerdiv round elevation-0" style="">
                  <h2 class="white--text center" style="font-size:18px; font-weight:600">LIMA CITY PASS</h2>
                  <ul style="height: 50px; width: auto;">
                    <li class="white--text li_li" style="height:auto"> Number of tickets 
                      <span class="white--text"> $48.00 </span> 
                    </li>
                  </ul>
                  <div class="white--text total" style="margin:0;border-top:0">
                    <p>Total <span>$231.00</span></p>
                  </div>
                </div>
                <div class="maindiv2">
                </div>
                <div class="footerdiv2">
                  <v-flex xs12 sm12 md12 lg12 style="margin:0; padding:0; border-top:0" class="buy_now">
                    <v-layout justify-center align-center style="padding-bottom:0px; display: grid;">
                      <v-btn id ="buynow" class="pink lighten-2 white--text elevation-0 shadowfilter" style="" round>BUY NOW</v-btn>
                    </v-layout>
                  </v-flex>
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs12 sm12 md12 lg12 style="bottom:2px">
        <v-layout column align-center justify-center class="" style="">
          <v-icon large style="color: #5CC9F5">flight_takeoff</v-icon> 
          <h4 class="flow-text" style="color: #5CC9F5;font-weight:400;">VISIT US</h4>
        </v-layout>
        <v-layout row wrap justify-center align-center style="padding-bottom:0px;">
          
          <v-flex xs12 sm12 md12 lg12 class="carousel shadowfilterfixed" id="carousel-responsive" style="height:200px;">
            <ul class="listsize" style="padding:0; ">
              <li>
                <a href="#">
                  <div class="block">
                    <img class="listsize" title="" alt="" src="../src/assets/huacapullana.png">
                    <div class="block-caption">
                      <div style="display: inline-block; vertical-align: middle;">
                        <h1 class=" white--text " style="font-size:30px;margin:0;font-weight:700;line-height: 120%;">
                          HUACA <br> PUCLLAN <br> A MUSEUM
                        </h1>
                        <h5 class="flow-text white--text " style="font-size:13px;margin:0;font-weight:700;">
                          LEARN MORE
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="block">
                    <img class="listsize" title="" alt="" src="../src/assets/puentebarranco.png">
                    <div class="block-caption">
                      <div style="display: inline-block; vertical-align: middle;">
                        <h1 class=" white--text " style="font-size:30px;margin:0;font-weight:700;line-height: 120%;">
                          BARRANCO <br> BRIDGE
                        </h1>
                        <h5 class="flow-text white--text " style="font-size:13px;margin:0;font-weight:700;">
                          LEARN MORE
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="block">
                    <img class="listsize" title="" alt="" src="../src/assets/plaza.png">
                    <div class="block-caption">
                      <div style="display: inline-block; vertical-align: middle;">
                        <h1 class=" white--text " style="font-size:30px;margin:0;font-weight:700;line-height: 120%;">
                          PRINCIPAL <br> SQUARE <br> OF LIMA
                        </h1>
                        <h5 class="flow-text white--text " style="font-size:13px;margin:0;font-weight:700;">
                          LEARN MORE
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="block">
                    <img class="listsize" title="" alt="" src="../src/assets/huacapullana.png">
                    <div class="block-caption">
                      <div style="display: inline-block; vertical-align: middle;">
                        <h1 class=" white--text " style="font-size:30px;margin:0;font-weight:700;line-height: 120%;">
                          HUACA <br> PUCLLAN <br> A MUSEUM
                        </h1>
                        <h5 class="flow-text white--text " style="font-size:13px;margin:0;font-weight:700;">
                          LEARN MORE
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="block">
                    <img class="listsize" title="" alt="" src="../src/assets/puentebarranco.png">
                    <div class="block-caption">
                      <div style="display: inline-block; vertical-align: middle;">
                        <h1 class=" white--text " style="font-size:30px;margin:0;font-weight:700;line-height: 120%;">
                          BARRANCO <br> BRIDGE
                        </h1>
                        <h5 class="flow-text white--text " style="font-size:13px;margin:0;font-weight:700;">
                          LEARN MORE
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="block">
                    <img class="listsize" title="" alt="" src="../src/assets/plaza.png">
                    <div class="block-caption">
                      <div style="display: inline-block; vertical-align: middle;">
                        <h1 class=" white--text " style="font-size:30px;margin:0;font-weight:700;line-height: 120%;">
                          PRINCIPAL <br> SQUARE <br> OF LIMA
                        </h1>
                        <h5 class="flow-text white--text " style="font-size:13px;margin:0;font-weight:700;">
                          LEARN MORE
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="block">
                    <img class="listsize" title="" alt="" src="../src/assets/huacapullana.png">
                    <div class="block-caption">
                      <div style="display: inline-block; vertical-align: middle;">
                        <h1 class=" white--text " style="font-size:30px;margin:0;font-weight:700;line-height: 120%;">
                          HUACA <br> PUCLLAN <br> A MUSEUM
                        </h1>
                        <h5 class="flow-text white--text " style="font-size:13px;margin:0;font-weight:700;">
                          LEARN MORE
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="block">
                    <img class="listsize" title="" alt="" src="../src/assets/puentebarranco.png">
                    <div class="block-caption">
                      <div style="display: inline-block; vertical-align: middle;">
                        <h1 class=" white--text " style="font-size:30px;margin:0;font-weight:700;line-height: 120%;">
                          BARRANCO <br> BRIDGE
                        </h1>
                        <h5 class="flow-text white--text " style="font-size:13px;margin:0;font-weight:700;">
                          LEARN MORE
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="block">
                    <img class="listsize" title="" alt="" src="../src/assets/plaza.png">
                    <div class="block-caption">
                      <div style="display: inline-block; vertical-align: middle;">
                        <h1 class=" white--text " style="font-size:30px;margin:0;font-weight:700;line-height: 120%;">
                          PRINCIPAL <br> SQUARE <br> OF LIMA
                        </h1>
                        <h5 class="flow-text white--text " style="font-size:13px;margin:0;font-weight:700;">
                          LEARN MORE
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>
              </li>

            </ul>
          </v-flex>
        </v-layout>
      </v-flex>

    </v-layout>
  </v-container>




      <!-- INCLUDED 
      <v-container id="included" fluid style="margin:0; padding:0;">
        <v-layout row wrap justify-center align-center class="black darken-4" style="height:-webkit-fill-available; padding:5%">
          <v-flex xs12 lg12>
            <v-layout justify-center align-center>
              <h3 class="white--text" style="margin:0">WHAT'S INCLUDED</h3>
            </v-layout>
          </v-flex>
           <v-flex xs6 lg6>
            <v-layout justify-center align-center>
            <img src="../src/assets/tickets.png" style="width:200px;"></img>
          </v-layout>
          </v-flex>
          <v-flex xs6 lg6>
            <v-layout justify-center align-center>
            <img src="../src/assets/giflcp.gif" style="width:90%;"></img>
          </v-layout>
          </v-flex>
        <v-flex xs6 lg6>
            <v-layout justify-center align-center>
            <img src="../src/assets/tickets.png" style="width:200px;"></img>
          </v-layout>
          </v-flex>
          <v-flex xs6 lg6>
            <v-layout justify-center align-center>
            <img src="../src/assets/giflcp.gif" style="width:90%;"></img>
          </v-layout>
          </v-flex>
        </v-layout>
      -->

    </v-container>
    <!-- HOW TO USE IT -->
    <v-container id="useit" fluid style="margin:0; padding:0;">
      <img src="../src/assets/limaportada.jpg" style="height:-webkit-fill-available;"></img>

    </v-container>
    <!-- OTHER BENEFITS -->
    <v-container id="benefits" fluid style="margin:0; padding:0;">
      <img src="../src/assets/limaportada.jpg" style="height:-webkit-fill-available;"></img>
      <v-parallax src="../src/assets/limacerros.jpg"></v-parallax>
      <div id="cssSelector">
        <div class="line">
          <div class="square el"></div>
        </div>
      </div>
    </v-container>

  </main>
  <!-- FOOTER -->
  <v-footer >
    <span>&copy; 2017</span>
  </v-footer>
</v-app>
</template>



<script>

$(document).ready(function() {
  $('#mylogo').hide();
  //$('#hidden_included').hide();
  //$( '.app' ).removeClass('active',1);
  
  $(function() {
    $('.arrow').on('click', function() {
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });
  /*
  $('#bb').on('click', function() {
   if ($('.app').hasClass('active')) {
     $('.app').removeClass('active');
   }
   else
   {
     $('.app').addClass('active');
   }

 });
 */


  


  var imageHeight = parseInt($('#logoimg').css('height')),
  stopHeight = 62.84;

  $( '#bb' ).click(function() {
    $( '.app' ).toggleClass( 'active' );
    
  });
/*$( '#bb' ).click(function() {
  if (!$('.app').hasClass('active')) {
        $('#hidden_included').fadeIn();
      } else if (windowScroll > (windowHeight * 1.08)) {
        $( '.app' ).removeClass( 'active' );
      } else if ($('.app').hasClass('active')) {
        $('#hidden_included').fadeOut();
      } 
      });*/

$( '#bb' ).click(function() {
  if (!$('.app').hasClass('active')) {
        $('#hidden_included').fadeIn(4000);
      } else  {
        $('#hidden_included').fadeOut();
      } 
      });

  $(window).scroll(function() {

    var windowScroll = $(window).scrollTop(),
    newHeight = imageHeight - 0.9*windowScroll;

    var windowWidth = $( window ).width(),
    windowHeight = $( window ).height(),
    toplogo = $("#logoimg").offset().top;

    toplogo = toplogo-1;
    console.log(toplogo)
    console.log(windowScroll)

    if (windowScroll > windowHeight - 50 && windowScroll < (2*windowHeight)-50) {
      $('#mylogo').show();
      $('#toolbar1').removeClass('transparent');
      //$('#toolbar1').removeClass('elevation-0');
      //$('#toolbar1').addClass('pink darken-2');
      $('#toolbar1').css("background-color", "#52c8d8");
      //$('#toolbar1').addClass('elevation-4');
      //$('#bb').removeClass('orange');
      //$('#bb').removeClass('white--text');
      //$('#bb').addClass('white');
      //$('#bb').addClass('pink--text');
      $('#seemore').fadeOut();

      //$('#btn_included').removeClass('white--text');
      //$('#btn_included').addClass('orange--text text--lighten-3');
      $('#btn_included').addClass('shadowfilterfixed');

      //$('#btn_useit').removeClass('blue--text text--lighten-3');
      $('#btn_useit').removeClass('shadowfilterfixed');
      //$('#btn_useit').addClass('white--text');

      //$('#btn_benefits').removeClass('pink--text text--lighten-3');
      $('#btn_benefits').removeClass('shadowfilterfixed');
      //$('#btn_benefits').addClass('white--text');
      /*
      if ($('.app').hasClass('active')) {
        $('#hidden_included').fadeOut();
      } else if (windowScroll > (windowHeight * 1.08)) {
        $( '.app' ).removeClass( 'active' );
      } else {
        $('#hidden_included').fadeIn();
      } 
      */
      if (windowScroll > (windowHeight * 1.08)) {
        $( '.app' ).removeClass( 'active' );
      } if ($('.app').hasClass('active')) {
        $('#hidden_included').fadeOut();
      }
       
    

    } else if(windowScroll > (2*windowHeight)-50 && windowScroll < (3*windowHeight)-50) {
      $('#mylogo').show();
      $('#toolbar1').css("background-color", "#6ed1a2");
      $('#seemore').fadeOut();

      //$('#btn_included').removeClass('orange--text text--lighten-3');
      $('#btn_included').removeClass('shadowfilterfixed');
      //$('#btn_included').addClass('white--text');

      //$('#btn_useit').removeClass('white--text');
      //$('#btn_useit').addClass('blue--text text--lighten-3');
      $('#btn_useit').addClass('shadowfilterfixed');

      //$('#btn_benefits').removeClass('pink--text text--lighten-3');
      $('#btn_benefits').removeClass('shadowfilterfixed');
      //$('#btn_benefits').addClass('white--text');
      $('#hidden_included').fadeIn();
      

    } else if(windowScroll > (3*windowHeight)-50 && windowScroll < (4*windowHeight)-50) {
      $('#mylogo').show();
      $('#toolbar1').css("background-color", "#ffab82");
      $('#seemore').fadeOut();

      //$('#btn_included').removeClass('orange--text text--lighten-3');
      $('#btn_included').removeClass('shadowfilterfixed');
      //$('#btn_included').addClass('white--text');

      //$('#btn_useit').removeClass('blue--text text--lighten-3');
      $('#btn_useit').removeClass('shadowfilterfixed');
      //$('#btn_useit').addClass('white--text');

      //$('#btn_benefits').removeClass('white--text');
      //$('#btn_benefits').addClass('pink--text text--lighten-3');
      $('#btn_benefits').addClass('shadowfilterfixed');

      $('#hidden_included').fadeIn();
      

    } else if(newHeight>=stopHeight ){
      if (windowScroll >= 10){
        $('#seemore').fadeOut();
        $("#logoimg").show();
        $('#logoimg').css("height", newHeight);
        //$('#toolbar1').removeClass('pink darken-2');
        $('#toolbar1').css("background-color", "transparent");
        //$('#toolbar1').removeClass('elevation-4');
        $('#toolbar1').addClass('transparent');
        $('#toolbar1').addClass('elevation-0');
        //$('#bb').removeClass('white');
        //$('#bb').removeClass('pink--text');
        $('#bb').addClass('orange');
        $('#bb').addClass('white--text');
        $('#mylogo').hide(40);
        
        //$('#btn_included').removeClass('orange--text text--lighten-3');
        $('#btn_included').removeClass('shadowfilterfixed');
        //$('#btn_included').addClass('white--text');

        //$('#btn_useit').removeClass('blue--text text--lighten-3');
        $('#btn_useit').removeClass('shadowfilterfixed');
        //$('#btn_useit').addClass('white--text');

        //$('#btn_benefits').removeClass('pink--text text--lighten-3');
        $('#btn_benefits').removeClass('shadowfilterfixed');
        //$('#btn_benefits').addClass('white--text');
        $('#hidden_included').fadeIn();
        
      }
      else {
        $('#seemore').fadeIn();
        $("#logoimg").show();
        $('#logoimg').css("height", newHeight);
        //$('#toolbar1').removeClass('pink darken-2');
        $('#toolbar1').css("background-color", "transparent");
        //$('#toolbar1').removeClass('elevation-4');
        $('#toolbar1').addClass('transparent');
        $('#toolbar1').addClass('elevation-0');
        //$('#bb').removeClass('white');
        //$('#bb').removeClass('pink--text');
        $('#bb').addClass('orange');
        $('#bb').addClass('white--text');
        $('#mylogo').hide();
        
        //$('#btn_included').removeClass('orange--text text--lighten-3');
        $('#btn_included').removeClass('shadowfilterfixed');
        //$('#btn_included').addClass('white--text');

        //$('#btn_useit').removeClass('blue--text text--lighten-3');
        $('#btn_useit').removeClass('shadowfilterfixed');
        //$('#btn_useit').addClass('white--text');

        //$('#btn_benefits').removeClass('pink--text text--lighten-3');
        $('#btn_benefits').removeClass('shadowfilterfixed');
        //$('#btn_benefits').addClass('white--text');
        $('#hidden_included').fadeIn();
        
      }
    } else if (windowScroll>=toplogo-5){
      $('#mylogo').show();
      $("#logoimg").hide();
      $('#seemore').fadeOut();
    } else {
      $("#logoimg").show();
      $('#logoimg').css("height", stopHeight);
      //$('#toolbar1').removeClass('pink darken-2');
      $('#toolbar1').css("background-color", "transparent");
      $('#toolbar1').removeClass('elevation-4');
      $('#toolbar1').addClass('transparent');
      $('#toolbar1').addClass('elevation-0');
      //$('#bb').removeClass('white');
      //$('#bb').removeClass('pink--text');
      $('#bb').addClass('orange');
      $('#bb').addClass('white--text');
      $('#mylogo').hide();
      
      //$('#btn_included').removeClass('orange--text text--lighten-3');
      $('#btn_included').removeClass('shadowfilterfixed');
      //$('#btn_included').addClass('white--text');

      //$('#btn_useit').removeClass('blue--text text--lighten-3');
      $('#btn_useit').removeClass('shadowfilterfixed');
      //$('#btn_useit').addClass('white--text');

      //$('#btn_benefits').removeClass('pink--text text--lighten-3');
      $('#btn_benefits').removeClass('shadowfilterfixed');
      //$('#btn_benefits').addClass('white--text');
      $('#hidden_included').fadeIn();
      
    }
  });

});

// CART BUY BUTTON

//var app = document.querySelector('.app');
//var button = document.querySelector('button');

//button.addEventListener('click', function() {
/*$(function() {
  $('#bb').on('click', function() {
    app.classList.toggle('active');
    app.classList.contains('active') ? this.innerHTML = "CLOSE" : this.innerHTML = "OPEN";
  });
});*/



export default {
  data () {
    return {
      items: [
      {
        title: 'What is included'
      },
      {
        title: 'How to use'
      },
      {
        title: 'Other benefits'
      }
      ]
    }
  }
}
</script>

<style type="text/css">



ul, li, ol {
  list-style-type: none;
  padding: 0;
  height: 220px;
  width: 220px;
}
.shadowfilter {
  -webkit-filter: drop-shadow(0px 0px 0px rgba(255,255,255,0.90));
  
}
.shadowfilter:hover {
  -webkit-filter: drop-shadow(0px 0px 4px #ffffff);
}
.shadowfilterfixed {
  -webkit-filter: drop-shadow(0px 0px 4px #ffffff);
}
.parallax__content {
  padding: 0;
}
.hoveropacity {
  opacity: 1;
}
.hoveropacity:hover {
  opacity: 1.0;
  transform: scale(1.1) rotateZ(-2deg);
  -moz-transform: scale(1.1) rotateZ(-2deg);
  -webkit-transform: scale(1.1) rotateZ(-2deg);
  -o-transform: scale(1.1) rotateZ(-2deg);
}
.block {
  display: block;
  height: 220px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 220px;
}
.block img {
  opacity: 1;
  transition: all 0.2s ease-in-out 0s;
  -moz-transition: all 0.2s ease-in-out 0s;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
}
.block .block-caption {
  background: rgba(0,0,0,0.5);
  bottom: 0;
  color: #000;
  display: table;
  opacity: 0;
  padding: 10px;
  position: absolute;
  transition: all 0.2s ease-in-out 0s;
  -moz-transition: all 0.2s ease-in-out 0s;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  width: 220px;
  height: 220px;
  line-height: 220px; 
  text-align: center;
  vertical-align: middle;
}
.listsize{
  height: 220px;
  width: 220px;
}

.block:hover .block-caption {
  opacity: 1;
}
.block:hover img {
  opacity: 1;
  transform: scale(1.1) rotateZ(-2deg);
  -moz-transform: scale(1.1) rotateZ(-2deg);
  -webkit-transform: scale(1.1) rotateZ(-2deg);
  -o-transform: scale(1.1) rotateZ(-2deg);
}
.degradado{
  background: rgba(119,201,212,1);
  background: -moz-linear-gradient(left, rgba(119,201,212,1) 0%, rgba(255,255,255,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(100%, rgba(87,188,144,1)));
  background: -webkit-linear-gradient(left, rgba(119,201,212,1) 0%, rgba(255,255,255,1) 100%);
  background: -o-linear-gradient(left, rgba(119,201,212,1) 0%, rgba(255,255,255,1) 100%);
  background: -ms-linear-gradient(left, rgba(119,201,212,1) 0%, rgba(255,255,255,1) 100%);
  background: linear-gradient(to right, rgba(119,201,212,1) 0%, rgba(255,255,255,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#77c9d4', endColorstr='#ffffff', GradientType=1 );
}

/* BUTTON ARCOIRIS */

* {
  box-sizing: border-box;
}

.arcoirisbutton {
  display: block;
  height: 100%;
  -webkit-animation: hue-rotate 15s linear infinite;
  animation: hue-rotate 15s linear infinite;
}


@-webkit-keyframes hue-rotate {
  from {
    -webkit-filter: hue-rotate(0);
    -moz-filter: hue-rotate(0);
    -ms-filter: hue-rotate(0);
    filter: hue-rotate(0);
  }
  to {
    -webkit-filter: hue-rotate(360deg);
    -moz-filter: hue-rotate(360deg);
    -ms-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}

@keyframes hue-rotate {
  from {
    -webkit-filter: hue-rotate(0);
    -moz-filter: hue-rotate(0);
    -ms-filter: hue-rotate(0);
    filter: hue-rotate(0);
  }
  to {
    -webkit-filter: hue-rotate(360deg);
    -moz-filter: hue-rotate(360deg);
    -ms-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}

/* MOVE Y_AXIS AND IMAGE */

.rotateYaxis{
  animation: mover 2.5s infinite linear 2s;
}

@keyframes mover {
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(45deg); }
  70% { transform: rotateY(340deg); }
  100% { transform: rotateY(360deg); }
}

/* BUTTON BUY NOW CART */

.center {
  text-align: center;
}

.app {
  display: flex;
  flex-flow: column;
  margin: 50px auto 0;
  width: 300px;
  opacity: 0;
  transform: scale(0);
  transform-origin: top center;
  transition: all 0.8s cubic-bezier(.71, 0, .61, 1.36) 1.8s;
}

.app > * {
  /* don't use universal selectors at real world project. its known to be slow */
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.cust-info {
  margin: 15px 0;
  padding: 0 30px;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease 2s;
  overflow: hidden;
}

.cust-info h3 {
  font-weight: 400;
}

.cust-info p {
  color: #757575;
  font-size: 12px;
  padding: 10px 0 0;
}

.cust-info:before {
  content: '';
  position: absolute;
  height: 100%;
  width: 6px;
  background: rgb(0, 157, 223);
  left: -20px;
  transition: all 0.5s ease 2s;
}


.li_li {
  color: #707575;
  font-size: 12px;
  list-style: none;
  padding: 15px 0;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.8s ease;
}

.li_li:nth-child(1) {
  transition-delay: 0.6s;
}

.li_li:not(:last-child) {
  border-bottom: 1px dashed #ccc;
  margin-bottom: 5px;
}

.li_li i {
  margin-right: 15px;
  font-style: normal;
}

.li_li span {
  color: #424242;
  float: right;
  font-weight: 500;
}

.total {
  border-top: 2px solid #FFC107;
  padding-top: 15px;
  margin: 0 0 15px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  left: -50px;
  opacity: 0;
  transform: translateY(10px);
  transition: left 0.5s ease, opacity 0.5s ease, transform 0s ease 1.8s;
}

.buy_now {
  border-top: 2px solid #FFC107;
  padding-top: 15px;
  margin: 0 0 15px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  left: -50px;
  opacity: 0;
  transform: translateY(10px);
  transition: left 0.1s ease, opacity 0.1s ease, transform 0s ease 1.8s;
}

.total p {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0s ease 1.2s;
}
.total span {
  float: right;
}

.maindiv {
  border-bottom: 2px dotted #F06292;
  border-radius: 0 0 4px 4px;
  padding: 0 30px;
  position: relative;
  transform: perspective(1000px) rotateX(-90deg);
  transform-origin: top;
  transition: all 0.5s ease 1.7s;
}

.maindiv2 {
  border-bottom: 2px dotted #F06292;
  border-radius: 0 0 4px 4px;
  padding: 0 30px;
  position: relative;
  transform: perspective(1000px) rotateX(-90deg);
  transform-origin: top;
  transition: all 0.5s ease 1.1s;
}

.maindiv h3 {
  font-size: 18px;
  font-weight: 500;
  opacity: 0;
  margin: 15px 0;
  transform: translateY(10px);
  transition: all 0.5s ease 0.8s;
}

.maindiv:before {
  content: '';
  position: absolute;
  top: -2px;
  width: 100%;
  height: 2px;
  left: 0;
  background: #fff;
}

.footerdiv {
  border-radius: 4px;
  padding: 15px 30px;
  transform: perspective(1000px) rotateX(-90deg);
  transform-origin: top;
  transition: all 0.5s cubic-bezier(.42, -1.04, .79, 1) 1.1s;
}
.footerdiv2 {
  border-radius: 4px;
  padding: 15px 30px;
  transform: perspective(1000px) rotateX(-90deg);
  transform-origin: top;
  transition: all 0.5s cubic-bezier(.42, -1.04, .79, 1) 0.5s;
}

.footerdiv svg {
  fill: #757575;
}

.active {
  opacity: 1;
  transform: scale(1);
  transition: all 0.8s ease;
}

.active .cust-info {
  opacity: 1;
  transform: translateY(0);
  transition: all 1s ease 0.5s;
}

.active .cust-info:before {
  left: 0;
  transition: all 1s ease 0.7s;
}

.active .maindiv {
  transform: perspective(1000px) rotateX(0deg);
  transition: all 0.5s ease 0.5s;
}

.active .maindiv2 {
  transform: perspective(1000px) rotateX(0deg);
  transition: all 0.5s ease 0.9s;
}

.active .maindiv h3 {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.8s ease 0.8s;
}

.active li {
  opacity: 1;
  transform: translateX(0px);
  transition: all 0.5s ease;
}

.active li:nth-child(1) {
  transition-delay: 1s;
}

.active .total {
  opacity: 1;
  transform: translateY(0);
  left: 0;
  transition: transform 0.5s ease 0.7s, opacity 0.5s ease 0.7s;
}

.active .buy_now {
  opacity: 1;
  transform: translateY(0);
  left: 0;
  transition: transform 1s ease 1.4s, opacity 1s ease 1.4s;
  transition-delay: 1.3s;
}

.active .total p {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s ease 0.9s;
}
.active .footerdiv {
  transform: perspective(1000px) rotateX(0deg);
  transition: all 0.5s ease 0.5s;
}

.active .footerdiv2 {
  transform: perspective(1000px) rotateX(0deg);
  transition: all 0.5s ease 1.1s;
}
div.round {
  background: 
  linear-gradient(0deg, transparent 0px, #ED1862 0) left,
  linear-gradient(0deg, transparent 0px, #ED1862 0) right;  
  background-repeat: no-repeat;
  background-image:
    radial-gradient(circle at 0 50%, rgba(204,0,0,0) 14px, #F06292 15px),
    radial-gradient(circle at 100% 50%, rgba(204,0,0,0) 14px, #F06292 15px);
  background-size: 50% 100% 
}



</style>
