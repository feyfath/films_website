<template>
  <div>
    <div id="top">
      <div class="logo">
        <h1><a href="#">FULL FILM</a></h1>
      </div>
      <div id="top_right">
        <a class="search_icon" href="#"
          ><span class="search_icon"><i class="fa fa-search"></i></span
        ></a>
        <input
          class="search"
          type="search"
          title="search me :)"
          placeholder="  SEARCH ANYTHING!"
        />
        <a href="#"
          ><span id="menu_icon"><i class="fa fa-bars"></i></span
        ></a>
        <div class="dropdown1">
          <button class="join_button">
            <span class="join_us">SIGN IN</span
            ><i class="fa fa-hand-o-down x2"></i>
          </button>

          <div class="dropdown1_links">
            <a href="#">SIGN UP</a>
            <a href="#">LOG IN</a>
          </div>
        </div>
        <div class="dropdown2">
          <button class="join_button">
            <span class="join_us">SIGN UP</span
            ><i class="fa fa-hand-o-down x2"></i>
          </button>
          <div class="dropdown2_links">
            <a href="#">SIGN UP</a>
            <a href="#">LOG IN</a>
          </div>
        </div>
      </div>
    </div>
    <div id="left_menu">
      <div class="mode">
        <button @click="d()" id="divdark">dark mode</button>
        <button @click="l()" id="divlight" disabled="">light mode</button>
      </div>
      <ul>
        <a href="#"><li>romance</li></a>
        <a href="#"><li>action</li></a>
        <a href="#"><li>war</li></a>
        <a href="#"><li>comedie</li></a>
        <a href="#"><li>Horror</li></a>
        <a href="#"><li>fission</li></a>
        <a href="#"><li>blood</li></a>
      </ul>
    </div>
    <div id="all_content">
      <div id="gap"></div>
      <!--can you see me-->
      <div id="latest_films">
        <div id="top_latest">
          <a class="links" href="./latest.html">
            <pre><h1>  LATEST FILMS:</h1><span class="more">more...</span></pre>
          </a>
        </div>
        <div id="bottom_latest">
          <!--these 2 are scroll arrows-->
          <a class="b_scroll_right" href="#">
            <span class="scroll_right">
              <i class="fas fa-chevron-left"></i>
            </span>
          </a>
          <a class="b_scroll_left" href="#" @click="if_left()">
            <span class="scroll_left">
              <i class="fas fa-chevron-right"></i>
            </span>
          </a>
          <div class="scroll">
            <div class="contents movies_small">
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM1</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM2</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM3</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM4</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM5</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM6</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM7</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM8</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM9</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM10</span></a
              >
            </div>
          </div>
        </div>
      </div>

      <div id="series">
        <div>
          <a class="links" href="./series.html">
            <pre><h1>   SERIES:</h1><span class="more">more...</span></pre>
          </a>
        </div>
        <div id="bottom_latest">
          <!--these 2 are scroll arrows-->
          <a class="b_scroll_right2" href="#">
            <span class="scroll_right">
              <i class="fas fa-chevron-left"></i>
            </span>
          </a>
          <a class="b_scroll_left2" href="#" onclick="if_left()">
            <span class="scroll_left">
              <i class="fas fa-chevron-right"></i></span
          ></a>
          <div class="scroll">
            <div class="contents movies_small">
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM1</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM2</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM3</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM4</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM5</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM6</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM7</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM8</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM9</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM10</span></a
              >
            </div>
          </div>
        </div>
      </div>

      <div id="action">
        <div>
          <a class="links" href="latest.html">
            <pre><h1>   ACTION:</h1><span class="more">more...</span></pre>
          </a>
        </div>
        <div id="bottom_latest">
          <!--these 2 are scroll arrows-->
          <a class="b_scroll_right" href="#">
            <span class="scroll_right">
              <i class="fas fa-chevron-left"></i>
            </span>
          </a>
          <a class="b_scroll_left" href="#" onclick="if_left()">
            <span class="scroll_left">
              <i class="fas fa-chevron-right"></i>
            </span>
          </a>
          <div class="scroll">
            <div class="contents movies_small">
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM1</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM2</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM3</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM4</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM5</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM6</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM7</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM8</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM9</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM10</span></a
              >
            </div>
          </div>
        </div>
      </div>

      <div id="comedie">
        <div>
          <a class="links" href="comedie.html">
            <pre><h1>   COMEDIE:</h1><span class="more">more...</span></pre>
          </a>
        </div>
        <div id="bottom_latest">
          <!--these 2 are scroll arrows-->
          <a class="b_scroll_right" href="#">
            <span class="scroll_right">
              <i class="fas fa-chevron-left"></i>
            </span>
          </a>
          <a class="b_scroll_left" href="#" onclick="if_left()">
            <span class="scroll_left">
              <i class="fas fa-chevron-right"></i>
            </span>
          </a>
          <div class="scroll">
            <div class="contents movies_small">
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM1</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM2</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM3</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM4</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM5</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM6</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM7</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM8</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM9</span></a
              >
              <a href="/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)" class="movie"
                ><span class="star"
                  ><img
                    class="star_image"
                    src="../assets/star.png"
                    width="40px"
                    height="40px"
                  />
                  <span class="rate">1.5</span></span
                ><img
                  class="movie_image"
                  :src="require('../assets/The Matrix Resurrections.jpg')"
                />
                <span class="title">FILM10</span></a
              >
            </div>
          </div>
        </div>
        <ul class="footer_ul">
          <li>
            <a id="app" href="#" target="_blank" title="Terms &amp; conditions">
              Terms &amp; conditions</a
            >
          </li>
          <li>
            <a href="#" target="_blank" title="Privacy policy"
              >Privacy policy</a
            >
          </li>
          <li>
            <a href="#" target="_blank" title="Cookies policy"
              >Cookies policy</a
            >
          </li>
          <li>
            <a href="#" target="_blank" title="Copyrights Notification"
              >Copyrights
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
//var x = document.getElementsByClassName("scroll");
var n = document.querySelectorAll(".scroll");
var search = document.getElementsByClassName("search");
var pace = 200;
export default {
  name: "Home",
  components: {},
  methods: {
    d() {
      for (var i = 0; i < n.length; i++) {
        n[i].style.backgroundColor = "black";
      }
      search[0].style.backgroundColor = "black";
      search[0].style.color = "white";
      document.getElementById("body").style.backgroundColor = "black";
      document.getElementById("menu_icon").style.color = "white";
      document.getElementById("menu_icon").style.backgroundColor = "black";
      document.getElementById("top").style.backgroundColor = "black";
      document.getElementById("top").style.borderBottom = "1px solid white";
      //document.getElementById('latest_films').style.boxShadow='1px -1px 5px white'

      document.getElementById("divlight").disabled = false;
      document.getElementById("divlight").style.cursor = "pointer";
      document.getElementById("divlight").style.opacity = "1";
      document.getElementById("divdark").disabled = true;
      document.getElementById("divdark").style.cursor = "no-drop";
      document.getElementById("divdark").style.opacity = "0.3";
    },
    l() {
      for (var i = 0; i < n.length; i++) {
        n[i].style.backgroundColor = "white";
      }
      search[0].style.backgroundColor = "white";
      search[0].style.color = "black";
      document.getElementById("menu_icon").style.color = "black";
      document.getElementById("menu_icon").style.backgroundColor = "#e8e5e5";
      document.getElementById("body").style.backgroundColor = "white";
      document.getElementById("top").style.backgroundColor = "white";
      document.getElementById("divdark").disabled = false;
      document.getElementById("divdark").style.cursor = "pointer";
      document.getElementById("divdark").style.opacity = "1";
      document.getElementById("divlight").disabled = true;
      document.getElementById("divlight").style.cursor = "no-drop";
      document.getElementById("divlight").style.opacity = "0.3";
    },
    if_left() {
      scrollTo(document.querySelector(".scroll"), -pace, 600);
    },
  },
  mounted() {
    function scrollTo(element, to, duration) {
      var start = element.scrollLeft,
        currentTime = 100,
        increment = 20;

      var animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, to, duration);
        element.scrollLeft = val;

        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    }
    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    document
      .querySelector(".b_scroll_right")
      .addEventListener("click", function () {
        scrollTo(document.querySelector(".scroll"), pace, 600);
      });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
body {
  position: fixed;
  height: 100%;
}
#top {
  top: 0%;
  position: fixed;
  width: 100%;
  border-right: 0px solid #454545;
  right: 0px;
  z-index: 1;
  background: #fffefe;
  height: 74px;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 4px;
  box-shadow: -1px 2px 7px -2px;
}

#top_right {
  position: fixed;
  width: 93%;
  right: 75px;
  top: 13px;
}

.fa {
  position: relative;
  left: 6px;
}

.dropdown1 {
  position: absolute;
  width: 10%;
  top: 3px;
  left: 88%;
}
.dropdown2 {
  position: absolute;
  width: 10%;
  top: 3px;
  left: 77%;
}
button.join_button {
  position: relative;
  width: 100%;
  color: #0071ff;
  font-size: 17px;
  font-weight: 600;
  height: 40px;
  border: 1px solid;
  border-radius: 42px;
}
i.fa.fa-caret-down {
  position: relative;
  padding: 0 10%;
  left: 3%;
}
.dropdown1_links a:hover {
  background-color: #0000000d;
}
.dropdown2_links a:hover {
  background-color: #0000000d;
}
.dropdown1_links a, .dropdown2_links a {
  display: table;
  position: relative;
  width: -webkit-fill-available;
  padding: 10px;
  color: red;
}
.logo:hover {
  border: 8px double cyan;
}
.dropdown1_links {
  display: none;
  position: relative;
  background-color: #f9f9f9;
  min-width: 99px;
  border-radius: 9px;
  z-index: 1;
  left: 5px;
}
.dropdown2_links {
  display: none;
  position: relative;
  background-color: #f9f9f9;
  min-width: 100px;
  border-radius: 9px;
  left: 5px;
}
.dropdown1:hover .dropdown1_links {
  display: table;
}
.dropdown2:hover .dropdown2_links {
  display: table;
}
input.search:hover {
  width: 50%;
  left: 245px;
  height: 52px;
  top: -5px;
}
button.join_button:hover {
  height: 38px;
  background: #c0fbfb;
  box-shadow: 1px 1px #555ed0;
  font-size: 1.5vw;
  top: 2px;
  width: 102%;
}
#menu_icon {
  position: absolute;
  left: 100%;
  top: -12px;
  color: black;
  font-size: -webkit-xxx-large;
  border-bottom-right-radius: 4px;
  background-color: #e8e5e5;
}
i.fa.fa-bars {
  padding: 13px 19px 12px 14px;
  top: -2px;
}
#menu_icon:hover {
  background-color: #c8c8cc;
}
.logo {
  background: repeating-linear-gradient(45deg, #153c48, black 100px);
  position: relative;
  width: 190px;
  height: 45px;
  text-align: center;
  top: 4px;
  font-size: 16px;
  left: 15px;
  border-radius: 31px;
  border: 8px double #00fff3d4;
  box-shadow: 3px 4px 5px #878888;
}
span.join_us {
  font-size: 0.97vw;
  position: relative;
}
.logo h1 a {
  position: relative;
  display: block;
  top: -20px;
  left: 0%;
  background: #ffffff00;
  text-shadow: 2px 4px 3px #000000, 0px 3px 4px #000000;
  color: #0fc4c4;
  font-size: 38px;
}
.search {
  position: absolute;
  left: 245px;
  overflow: hidden;
  top: -4px;
  width: 50%;
  box-shadow: 1px 3px 4px #00000082;
  height: 50px;
  border-radius: 11px;
  padding-inline-start: 10%;
  padding-inline-end: 10%;
  border: 4px double #00afaf;
  outline: none;
}
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
span.search_icon {
  position: relative;
  left: 249px;
  z-index: 1;
  color: black;
  overflow: hidden;
  border-right: 1px solid #00000038;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  top: 6px;
  padding: 7px 30px;
  background-color: #d5d5d573;
  font-size: 28px;
}
::placeholder {
  /* Chrome/Opera/Safari */
  color: blue;
  font-size: 20px;
  line-height: 19px;
  opacity: 0.3;
  position: relative;
  top: 7%;
}
#left_menu {
  position: fixed;
  top: 100px;
  width: 19%;
  background: repeating-linear-gradient(24deg, #1a333c73, #5a5a5a40 120px);
  height: 84%;
  border-radius: 6px 6px 0 0;
  box-shadow: 1px 1px 4px #060606;
}
#left_menu ul a {
  padding: 13px 58% 13px 58%;
  text-align: -webkit-center;
  position: relative;
  border-radius: 50px;
  border: 2px solid #0291dedb;
  color: #133741;
  min-width: 95%;
  text-decoration: none;
  font-size: 2.5vw;
  left: -40px;
  background-color: #ffffff00;
}
#left_menu ul {
  display: grid;
  position: relative;
  top: 40px;
  justify-content: space-between;
  list-style: none;
}
#left_menu > ul > a:hover {
  border-radius: 92px;
  background: repeating-linear-gradient(-19deg, #3f6a7500, #05323cb3 58px);
  transition: 0.5s;
  width: 100%;
  padding: 16px 73%;
  z-index: 5;
}
#bottom_latest {
}
#all_content {
  position: fixed;
  height: 100%;
  top: 76px;
  width: 80%;
  left: 20%;
  overflow-x: hidden;
  z-index: -1;
}
#all_content h1 {
  color: #000000ed;
  position: absolute;
  box-shadow: 1px 0px 5px #000000;
  top: -5%;
  text-align-last: center;
  width: 100%;
  height: 31.4px;
  z-index: 3;
  text-decoration: none;
  background: radial-gradient(
    circle farthest-corner at 53% 6%,
    #fffcfcfa,
    #b4b8c1f7
  );
  font-size: 21px;
  border-radius: 1px 1px 0 0;
  border-bottom: 1px solid #000000;
  font-family: cursive;
  z-index: 1;
}
#gap {
  position: relative;
  height: 25px;
  width: 99%;
}
span.more {
  position: absolute;
  font-size: 2vw;
  color: #8a94c7;
  text-decoration: none;
  float: right;
  z-index: 1;
  right: 0px;
  top: -2px;
}
#latest_films {
  width: 97%;
  height: 270px;
  box-shadow: -1px 0px 4px black;
  position: relative;
  left: 1%;
  background-color: #f9f9f9;
  border: double;
}
#series {
  position: relative;
  width: 98%;
  height: 270px;
  top: 20px;
  left: 1%;
  background-color: #f9f9f9;
  border: double;
  box-shadow: -1px 0px 4px black;
}
#action {
  position: relative;
  width: 98%;
  height: 270px;
  left: 1%;
  top: 40px;
  background-color: #f9f9f9;
  border: double;
  box-shadow: -1px 0px 4px black;
}
#comedie {
  position: relative;
  width: 98%;
  height: 270px;
  left: 1%;
  top: 60px;
  background-color: #f9f9f9;
  box-shadow: -1px 0px 4px black;
  border: double;
}
.movie_image {
  width: 100%;
  height: 190px;
}
span.rate {
  position: relative;
  left: -34px;
  font-size: large;
  top: -11px;
  font-weight: inherit;
  color: #020202;
  text-shadow: 1px 3px 3px black, 2px 0px 0px #ffc800;
}
span.star {
  position: absolute;
}
.scroll {
  position: relative;
  height: 89%;
  top: 15px;
  overflow-y: hidden;
  overflow-x: hidden;
  white-space: nowrap;
  background-color: #ffffff;
}
a.movie:hover {
  border: 1px solid #99a7d2;
  width: 180px;
  top: 9px;
  height: 224px;
  background: radial-gradient(ellipse, #ffffff, #fdfcff 100px);
  margin: 2px 2px 0px 6px;
}
.movies_small .movie {
  width: 160px;
  height: auto;
  color: #00d0ff;
  margin: 19px 3px 1px 10px;
  border: 1px solid #d9e4e4;
  white-space: pre-wrap;
  box-shadow: 1px 1px 6px #ababab;
}
.movie {
  display: inline-block;
  position: relative;
  margin: 0 10px 30px 10px;
  padding: 0;
  width: 175px;
  vertical-align: top;
  clear: both;
  text-align: center;
}

[class^="i-"]:before {
  font-family: "fontico";
  font-style: normal;
  font-weight: normal;
  display: inline-block;
  text-decoration: inherit;
  width: 2em;
  margin-right: 0.2em;
  text-align: center;
  color: yellow;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: 0.2em;
}
.i-fav:before {
  content: "\e802";
}

.footer_ul a {
  padding: 4% 20%;
  position: relative;
  text-decoration: none;
  color: #ffffffc9;
  font-size: 1.196vw;
  top: 17px;
  border-top: 8px solid red;
}
.footer_ul li {
  display: flow-root;
  text-align: center;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
}

ul.footer_ul {
  list-style: none;
  display: flex;
  position: relative;
  width: 99%;
  left: -4px;
  height: 100px;
  background-color: #595f77;
  top: 5px;
  padding: 10px;
}

.footer_ul a:hover {
  background-color: black;
}

.mode {
  position: absolute;
  overflow: hidden;
  border: 1px solid #00ffde8a;
  height: 34px;
  box-shadow: 2px 2px 4px #171717;
  border-radius: 24px;
  width: -webkit-fill-available;
  background-color: #2239455e;
}
#divlight {
  position: absolute;
  width: 50%;
  height: inherit;
  font-size: 1.4vw;
  right: -1px;
  border: 1px solid cyan;
  cursor: no-drop;
  opacity: 0.3;
}

#divdark {
  position: initial;
  width: 50%;
  font-size: 1.4vw;
  height: inherit;
  border: 1px solid cyan;
  cursor: pointer;
}
#all_content h1:hover {
  font-size: 22px;
  box-shadow: 1px 2px 4px #191919;
  background: linear-gradient(#b5b5b5, #cac3c3);
}
/****************************************/ /*********************************/
.scroll_right {
  position: absolute;
  top: 32px;
  color: #ffffff;
  padding: 83px 10px;
  font-size: 70px;
  border-top: 1px inset #ffffff00;
  z-index: 1;
  background-color: #c7c7c75e;
}
.scroll_left {
  position: absolute;
  top: 34px;
  right: 0%;
  color: #ffffff;
  padding: 83px 10px;
  font-size: 70px;
  border-top: 1px inset #ffffff00;
  z-index: 1;
  background-color: #c7c7c761;
}
</style>
