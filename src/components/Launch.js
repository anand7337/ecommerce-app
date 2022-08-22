
import React, { Component, useRef, useState } from "react";
import Slider from "react-slick";
import "./Home.css";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";




 function Launch() {
 
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (

    <body>

   
<nav class="navbar navbar-expand-md px-5 py-3 nav1">
        <a class="navbar-brand" href="#">
          <img
            src="https://food-le.com/data/image/options/logo.png"
            width="150rem"
          ></img>
        </a>
        <a
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon">
            <img
              src="https://cdn2.iconfinder.com/data/icons/flat-and-simple-part-2/128/menu-512.png"
              width="50rem"
            ></img>
          </span>
        </a>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav mx-auto">

          <li class="nav-item">
              <a class="nav-link" href="/Breakfast">
                Break Fast
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/Launch">
                Lunch
              </a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/Dinner">
                Dinner
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Contact">
                Contact
              </a>
            </li>

            <li class="nav-item dropdown ml-5">
              <a
                class="nav-link toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Order
              </a>
              <div class="dropdown-menu">
              <a class="dropdown-item" href="/Breakfast">
                Break Fast
              </a>
                <a class="dropdown-item" href="/Launch">
                  Launch
                </a>
                <a class="dropdown-item" href="/Dinner">
                  Dinner
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

<section id="Launch01">

   </section>

    </body>
  );
}

export default Launch;