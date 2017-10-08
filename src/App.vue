<template>
  <v-app toolbar--fixed toolbar >
    <!-- TOOLBAR -->
    <v-toolbar id="toolbar1" fixed class="transparent elevation-0 " >
      <v-flex lg4>
        <v-toolbar-items class="hidden-sm-and-down" style="height: -webkit-fill-available;">
          <v-layout justify-center align-center>
            <v-btn href="#included" class="white--text arrow" style="height: -webkit-fill-available;" flat>WHAT INCLUDED</v-btn>
            <v-btn href="#useit" class="white--text arrow" style="height: -webkit-fill-available;" flat>HOW TO USE IT</v-btn>
            <v-btn href="#benefits" class="white--text arrow" style="height: -webkit-fill-available;" flat>OTHER BENEFITS</v-btn>
          </v-layout>
        </v-toolbar-items>
      </v-flex>
      <v-flex lg4>
        <v-layout justify-center>
          <v-btn dark href="#home"  class="transparent arrow elevation-0 white--text" style="height: 50%; width: auto;" >
            <img id="mylogo" src="../src/assets/limalogowhite.png" class=""  style="width:55px;"></img>
          </v-btn>
        </v-layout>
      </v-flex>
      <v-flex lg4>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-layout justify-center align-center>
            <v-btn href="#" class="white--text" style="height: 38px; width: 38px;" icon><v-icon>person</v-icon></v-btn>
            <v-btn id = "bb" href="#" class="orange white--text text--darken-3" round>BUY NOW</v-btn>
          </v-layout>
        </v-toolbar-items>
      </v-flex>
    </v-toolbar>
    <!-- CONTAINER VIDEO -->
    <v-container fluid id="home" style="margin:0; padding:0; height:-webkit-fill-available; background-color:black;">
      <v-flex lg12>
        <v-parallax src="../src/assets/limaplaza.jpg" height=-webkit-fill-available style="height:-webkit-fill-available; width:auto;">
          <v-layout column align-center justify-center style="height:-webkit-fill-available;"r>
            <img id="logoimg" src="../src/assets/limalogowhite.png"  style="width:auto;height:342px;"></img>
          </v-layout>
        </v-parallax>
      </v-flex>

      <v-flex lg12>
        <v-layout justify-center align-center style="margin:-70px">
         <v-btn href="#included"  class="transparent arrow" style="height: 1px; width: 1px;" >
          <img src="../src/assets/seemore.png">
        </v-btn>
      </v-layout>
    </v-flex>

  </v-container>
  <!-- MAIN -->
  <main >
    <!-- INCLUDED -->
    <v-container id="included" fluid style="margin:0; padding:0; color: #fff;">
      <v-layout row wrap justify-center align-center class="black darken-4" style=" height:-webkit-fill-available; padding-top:1%;padding-bottom:1%;background: url('../src/assets/giflcp.gif') no-repeat fixed center; background-size: auto 100%;background-color: #fff;">
        <v-flex xs12 sm12 md12 lg12>
          <v-layout justify-center align-center>

            <v-parallax id="limagif" src="" height=-webkit-fill-available; style="width:100%; height:724px; padding:0; filter: grayscale(0%); ">
              <v-layout row wrap justify-center align-center style="padding-bottom:0px">
                <v-flex xs12 sm12 md12 lg12 class="carousel shadowfilterfixed" id="carousel-responsive" style="height:200px">
                <ul  style="padding:0; height:200px; width:200px;">
                  <li >
                    <a href="#">
                      <div class="block">
                        <img title="" alt="" src="../src/assets/huacapullana.png" style="width:200px; height:200px">
                        <div class="block-caption">
                            Huaca Pullana
                        </div>
                      </div>
                    </a>
                  </li>
                  <li >
                    <a href="#">
                      <div class="block">
                        <img title="" alt="" src="../src/assets/puentebarranco.png" style="width:200px; height:200px">
                        <div class="block-caption">
                            Puente de Barranco
                        </div>
                      </div>
                    </a>
                  </li>
                  <li >
                    <a href="#">
                      <div class="block">
                        <img title="" alt="" src="../src/assets/plaza.png" style="width:200px; height:200px">
                        <div class="block-caption">
                            Plaza de armas de Lima
                        </div>
                      </div>
                    </a>
                  </li>
                   <li >
                    <a href="#">
                      <div class="block">
                        <img title="" alt="" src="../src/assets/huacapullana.png" style="width:200px; height:200px">
                        <div class="block-caption">
                            Huaca Pullana
                        </div>
                      </div>
                    </a>
                  </li>
                  <li >
                    <a href="#">
                      <div class="block">
                        <img title="" alt="" src="../src/assets/puentebarranco.png" style="width:200px; height:200px">
                        <div class="block-caption">
                            Puente de Barranco
                        </div>
                      </div>
                    </a>
                  </li>
                  <li >
                    <a href="#">
                      <div class="block">
                        <img title="" alt="" src="../src/assets/plaza.png" style="width:200px; height:200px">
                        <div class="block-caption">
                            Plaza de armas de Lima
                        </div>
                      </div>
                    </a>
                  </li>
                   <li >
                    <a href="#">
                      <div class="block">
                        <img title="" alt="" src="../src/assets/huacapullana.png" style="width:200px; height:200px">
                        <div class="block-caption">
                            Huaca Pullana
                        </div>
                      </div>
                    </a>
                  </li>
                  <li >
                    <a href="#">
                      <div class="block">
                        <img title="" alt="" src="../src/assets/puentebarranco.png" style="width:200px; height:200px">
                        <div class="block-caption">
                            Puente de Barranco
                        </div>
                      </div>
                    </a>
                  </li>
                  <li >
                    <a href="#">
                      <div class="block">
                        <img title="" alt="" src="../src/assets/plaza.png" style="width:200px; height:200px">
                        <div class="block-caption">
                            Plaza de armas de Lima
                        </div>
                      </div>
                    </a>
                  </li>

                  
                </ul>
                </v-flex>
                <v-flex xs12 sm12 md12 lg12>
                  <v-layout row align-center justify-center>
                    <v-flex xs6 sm6 md6 lg6>
                      <v-layout row wrap  align-center style="padding-left:40px">
                        <h1 class="white--text shadowfilterfixed" style="margin:0">WHAT'S <br>INCLUDED</h1>
                      </v-layout>
                      
                    </v-flex>
                    <v-flex xs6 sm6 md6 lg6>
                      <v-layout column align-center justify-center>
                        <img src="../src/assets/tickets.png" style="width:40%;"></img>
                        <h4 class="white--text">Buy your tickets today!</h4>
                      </v-layout>
                     
                  </v-flex>
                </v-layout>
              </v-flex>

            </v-layout>
          </v-parallax>
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

  $(function() {
    $('.arrow').on('click', function() {
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

  var imageHeight = parseInt($('#logoimg').css('height')),
    stopHeight = 62.84;

  $(window).scroll(function() {

    var windowScroll = $(window).scrollTop(),
        newHeight = imageHeight - 0.9*windowScroll;

    var windowWidth = $( window ).width(),
      windowHeight = $( window ).height(),
      toplogo = $("#logoimg").offset().top;

    toplogo = toplogo-1;
    console.log(toplogo)
    console.log(windowScroll)
    if (windowScroll > windowHeight - 65 ) {
      $('#mylogo').show();
      $('#toolbar1').removeClass('transparent');
      $('#toolbar1').removeClass('elevation-0');
      $('#toolbar1').addClass('pink darken-2');
      $('#toolbar1').addClass('elevation-4');
      $('#bb').removeClass('orange');
      $('#bb').removeClass('white--text');
      $('#bb').addClass('white');
      $('#bb').addClass('pink--text');
    } else if(newHeight>=stopHeight){
      $("#logoimg").show();
      $('#logoimg').css("height", newHeight);
      $('#toolbar1').removeClass('pink darken-2');
      $('#toolbar1').removeClass('elevation-4');
      $('#toolbar1').addClass('transparent');
      $('#toolbar1').addClass('elevation-0');
      $('#bb').removeClass('white');
      $('#bb').removeClass('pink--text');
      $('#bb').addClass('orange');
      $('#bb').addClass('white--text');
      $('#mylogo').hide();
    } else if (windowScroll>=toplogo-5){
      $('#mylogo').show();
      $("#logoimg").hide();
    } else {
      $("#logoimg").show();
      $('#logoimg').css("height", stopHeight);
      $('#toolbar1').removeClass('pink darken-2');
      $('#toolbar1').removeClass('elevation-4');
      $('#toolbar1').addClass('transparent');
      $('#toolbar1').addClass('elevation-0');
      $('#bb').removeClass('white');
      $('#bb').removeClass('pink--text');
      $('#bb').addClass('orange');
      $('#bb').addClass('white--text');
      $('#mylogo').hide();
    }
  });

});



export default {
  data () {
    return {

    }
  }
}
</script>

<style type="text/css">
ul, li, ol {
  list-style-type: none;
  padding: 0;
  height: 200px;
  width: 200px;
}
.shadowfilter {
  -webkit-filter: drop-shadow(0px 0px 0px rgba(255,255,255,0.90));
  -webkit-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  transition: all 0.5s linear;
}
.shadowfilter:hover {
  -webkit-filter: drop-shadow(0px 6px 8px #ffffff);
}
.shadowfilterfixed {
  -webkit-filter: drop-shadow(0px 0px 4px #ffffff);
}

.parallax__content {
  padding: 0;
}

.hoveropacity {
  opacity: 0.5;

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
  height: 200px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 200px;
}
.block img {
  opacity: 0.5;
  transition: all 0.2s ease-in-out 0s;
  -moz-transition: all 0.2s ease-in-out 0s;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
}
.block .block-caption {
  background: rgba(0,0,0,0.6);
  bottom: 0;
  color: #fff;
  display: table;
  opacity: 0;
  padding: 10px;
  position: absolute;
  transition: all 0.2s ease-in-out 0s;
  -moz-transition: all 0.2s ease-in-out 0s;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  width: 200px;
  height: 200px;
  line-height: 200px; 
  text-align: center;
  vertical-align: middle;

}
.block:hover .block-caption {
    opacity: 0.9;
}
.block:hover img {
  opacity: 1;
  transform: scale(1.1) rotateZ(-2deg);
  -moz-transform: scale(1.1) rotateZ(-2deg);
  -webkit-transform: scale(1.1) rotateZ(-2deg);
  -o-transform: scale(1.1) rotateZ(-2deg);
}

</style>
