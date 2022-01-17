$(document).ready(function () {
  $(".dropdown-clicked").click(function (e) {
    e.preventDefault(), $("header .dropdown-item").fadeIn();
  }),
    $(".dropdown-item-a-first").click(function (e) {
      e.preventDefault(), $("header .dropdown-item").fadeOut();
    }),
    $(".hover-ul-a")
      .mouseover(function (e) {
        $("header .dropdown-item-ul").css({ display: "block" });
      })
      .mouseout(function (e) {
        $("header .dropdown-item-ul").css({ display: "none" });
      }),
    $(".header-right-bars").click(function (e) {
      $("header .header-top").css({ top: "0" });
    }),
    $(".header-top .exit").click(function (e) {
      $("header .header-top").css({ top: "-130vh" });
    });
});

var slider = new KeenSlider("#team-media", {
  slides: {
    perView: 1.5,
    spacing: 15,
  },
});

var slider = new KeenSlider("#audit-media", {
  slides: {
    perView: 1.5,
    spacing: 15,
  },
});
var slider = new KeenSlider("#appreciate-media", {
  slides: {
    perView: 1.2,
    spacing: 15,
  },
});
var slider = new KeenSlider("#keys-media", {
  slides: {
    perView: 1.5,
    spacing: 15,
  },
});

var swiper = new Swiper(".swiper-container", {
  pagination: { el: ".swiper-pagination", clickable: true },
  mousewheel: { sensitivity: 1 },
  slidesPerView: 1.5,
  freeMode: { sensitivity: 10 },
});

window.addEventListener("scroll", function (e) {
  if (window.scrollY >= 3000) {
    $(".header .elephant-header img").css({ display: "none" });
  } else {
    $(".header .elephant-header img").css({ display: "block" });
  }
});

//////////////////////////////// =============================================== \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

gsap.from(".animation-text", {
  scrollTrigger: {
    trigger: ".company-level",
    start: "top -20%",
    end: "+=1000",
    scrub: true,
  },
  x: -100,
});

const tl_8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".appreciate",
    start: "top",
    end: "+=20000",
    scrub: true,
  },
});

tl_8.to([".appreciate-center .left", ".appreciate-center .right"], {
  y: -1000,
});
tl_8.to(".appreciate-center .center", {
  y: 500,
  delay: -3,
});

function myFuction(x320, x767, x990, x1200) {
  if (x320.matches) {
    window.addEventListener("load", function (e) {
      // team
      const tl_6 = gsap.timeline({
        scrollTrigger: {
          trigger: ".team_item",
          start: "top 50%",
          end: "+=2000",
          scrub: true,
        },
      });
      tl_6.to(
        [".teams .item_left", ".teams .item_center", ".teams .item_right"],
        {
          y: -170,
        }
      );

      // footer

      const tl_footer = gsap.timeline({
        scrollTrigger: {
          trigger: "footer",
          start: "top 100%",
          end: "+=1000",
          scrub: true,
        },
      });

      tl_footer.from(".footer", {
        y: -130,
      });
    });
  } else if (x767.matches) {
    window.addEventListener("load", function (e) {
      // header

      gsap.to(".context_back", {
        scrollTrigger: {
          trigger: "main",
          start: "top 40%",
          end: 2000,
          scrub: true,
        },
        width: "900px",
        height: "900px",
        y: -30,
      });

      gsap.to(".context_device", {
        scrollTrigger: {
          trigger: "main",
          start: "top 40%",
          end: 2000,
          scrub: true,
        },
        width: "900px",
        height: "900px",
      });

      gsap.to(".context_front", {
        scrollTrigger: {
          trigger: "main",
          start: "top 40%",
          end: 2000,
          scrub: true,
        },
        width: "900px",
        height: "900px",
        y: -30,
      });

      // audit
      const tl_7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".audit",
          start: "top 30%",
        },
      });

      tl_7.to(".audit-left", {
        scrollTrigger: {
          trigger: ".audit-left",
          start: "top 30%",
          end: "+=1700",
          pin: ".audit-left",
        },
      });

      // team
      const tl_6 = gsap.timeline({
        scrollTrigger: {
          trigger: ".team_item",
          start: "top 50%",
          end: "+=2000",
          scrub: true,
        },
      });
      tl_6.to(
        [".teams .item_left", ".teams .item_center", ".teams .item_right"],
        {
          y: -170,
        }
      );

      // footer

      const tl_footer = gsap.timeline({
        scrollTrigger: {
          trigger: "footer",
          start: "top 100%",
          end: "+=1000",
          scrub: true,
        },
      });

      tl_footer.from(".footer", {
        y: -130,
      });
    });
  } else if (x990.matches) {
    window.addEventListener("load", function (e) {
      gsap.to(".context_back", {
        scrollTrigger: {
          trigger: "header",
          start: "top",
          end: 1000,
          scrub: true,
        },
        width: "900px",
        height: "900px",
        y: -30,
      });

      gsap.to(".context_device", {
        scrollTrigger: {
          trigger: "header",
          start: "top",
          end: 1000,
          scrub: true,
        },
        width: "900px",
        height: "900px",
      });

      gsap.to(".context_front", {
        scrollTrigger: {
          trigger: "header",
          start: "top",
          end: 1000,
          scrub: true,
        },
        width: "900px",
        height: "900px",
        y: -30,
      });

      const tl_elephant = gsap.timeline({
        scrollTrigger: {
          trigger: ".keys",
          start: "top 70%",
          end: "+=1000",
          scrub: true,
        },
      });
      tl_elephant.to([".context_back", ".context_device", ".context_front"], {
        opacity: 0,
      });

      // slider-page
      gsap.to(".slider-page-item", {
        scrollTrigger: {
          trigger: ".slider-page",
          scrub: true,
          pin: ".slider-page-item",
          end: "+=8000",
        },
        x: -7500,
      });

      // bg-elephant
      const tl_5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".bg-elephant",
          start: "top 70%",
          end: "+=900",
          scrub: true,
          markers: false,
        },
      });
      tl_5.from(".elephant-bg", { opacity: 0.2, scale: 0.5, x: 400, y: 0 });

      // audit
      const tl_7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".audit",
          start: "top 30%",
        },
      });

      tl_7.to(".audit-left", {
        scrollTrigger: {
          trigger: ".audit-left",
          start: "top 30%",
          end: "+=1850",
          pin: ".audit-left",
        },
      });

      // team
      const tl_6 = gsap.timeline({
        scrollTrigger: {
          trigger: ".team_item",
          start: "top 50%",
          end: "+=8000",
          scrub: true,
        },
      });
      tl_6.to(
        [".teams .item_left", ".teams .item_center", ".teams .item_right"],
        {
          y: -770,
        }
      );

      // footer

      const tl_footer = gsap.timeline({
        scrollTrigger: {
          trigger: "footer",
          start: "top 100%",
          end: "+=1000",
          scrub: true,
        },
      });

      tl_footer.from(".footer", {
        y: -130,
      });
    });
  } else if (x1200.matches) {
    window.addEventListener("load", function (e) {
      gsap.to(".context_back", {
        scrollTrigger: {
          trigger: "header",
          start: "top",
          end: 1000,
          scrub: true,
        },
        width: "1000px",
        height: "1000px",
        y: -30,
      });

      gsap.to(".context_device", {
        scrollTrigger: {
          trigger: "header",
          start: "top",
          end: 1000,
          scrub: true,
        },
        width: "1000px",
        height: "1000px",
      });

      gsap.to(".context_front", {
        scrollTrigger: {
          trigger: "header",
          start: "top",
          end: 1000,
          scrub: true,
        },
        width: "1000px",
        height: "1000px",
        y: -30,
      });

      const tl_elephant = gsap.timeline({
        scrollTrigger: {
          trigger: ".keys",
          start: "top 100%",
          end: "+=1000",
          scrub: true,
          // markers: true
        },
      });
      tl_elephant.to([".context_back", ".context_device", ".context_front"], {
        opacity: 0,
      });

      ///slider-page

      gsap.to(".slider-page-item", {
        scrollTrigger: {
          trigger: ".slider-page",
          scrub: true,
          pin: ".slider-page-item",
          end: "+=8000",
        },
        x: -7500,
      });

      // bg-elephant
      const tl_5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".bg-elephant",
          start: "top 70%",
          end: "+=900",
          scrub: true,
          markers: false,
        },
      });
      tl_5.from(".elephant-bg", { opacity: 0.2, scale: 0.7, x: 400, y: 0 });

      // audit
      const tl_7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".audit",
          start: "top 30%",
        },
      });

      tl_7.to(".audit-left", {
        scrollTrigger: {
          trigger: ".audit-left",
          start: "top 30%",
          end: "+=1730",
          pin: ".audit-left",
        },
      });

      // team
      const tl_6 = gsap.timeline({
        scrollTrigger: {
          trigger: ".team_item",
          start: "top 50%",
          end: "+=2000",
          scrub: true,
        },
      });
      tl_6.to(
        [".teams .item_left", ".teams .item_center", ".teams .item_right"],
        {
          y: -170,
        }
      );

      // footer

      const tl_footer = gsap.timeline({
        scrollTrigger: {
          trigger: "footer",
          start: "top 100%",
          end: "+=1000",
          scrub: true,
        },
      });

      tl_footer.from(".footer", {
        y: -130,
      });
    });
  } else {
    window.addEventListener("load", function (e) {
      gsap.to(".context_back", {
        scrollTrigger: {
          trigger: "header",
          start: "top",
          end: 1000,
          scrub: true,
        },
        width: "1000px",
        height: "1000px",
        y: -30,
      });

      gsap.to(".context_device", {
        scrollTrigger: {
          trigger: "header",
          start: "top",
          end: 1000,
          scrub: true,
        },
        width: "1000px",
        height: "1000px",
      });

      gsap.to(".context_front", {
        scrollTrigger: {
          trigger: "header",
          start: "top",
          end: 1000,
          scrub: true,
        },
        width: "1000px",
        height: "1000px",
        y: -30,
      });

      const tl_elephant = gsap.timeline({
        scrollTrigger: {
          trigger: ".keys",
          start: "top 100%",
          end: "+=1000",
          scrub: true,
          // markers: true
        },
      });
      tl_elephant.to([".context_back", ".context_device", ".context_front"], {
        opacity: 0,
      });

      // slider-page
      gsap.to(".slider-page-item", {
        scrollTrigger: {
          trigger: ".slider-page",
          scrub: true,
          pin: ".slider-page-item",
          end: "+=3800",
        },
        x: -7500,
      });
      // bg-elephant
      const tl_5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".bg-elephant",
          start: "top 50%",
          end: "+=900",
          scrub: true,
          markers: false,
        },
      });
      tl_5.from(".elephant-bg", { opacity: 0.2, scale: 0.7, x: 300 });
      // audit
      const tl_7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".audit",
          start: "top 30%",
        },
      });

      tl_7.to(".audit-left", {
        scrollTrigger: {
          trigger: ".audit-left",
          start: "top 30%",
          end: "+=1730",
          pin: ".audit-left",
        },
      });
      // team
      const tl_6 = gsap.timeline({
        scrollTrigger: {
          trigger: ".team_item",
          start: "top 50%",
          end: "+=2000",
          scrub: true,
        },
      });
      tl_6.to(
        [".teams .item_left", ".teams .item_center", ".teams .item_right"],
        {
          y: -270,
        }
      );

      // footer

      const tl_footer = gsap.timeline({
        scrollTrigger: {
          trigger: "footer",
          start: "top 100%",
          end: "+=1000",
          scrub: true,
        },
      });

      tl_footer.from(".footer", {
        y: -130,
      });
    });
  }
}
const x320Media = window.matchMedia("(max-width:767px)");
const x767Media = window.matchMedia("(max-width:989px)");
const x989Media = window.matchMedia("(max-width:1200px)");
const x1200Media = window.matchMedia("(max-width:1559px)");
myFuction(x320Media, x767Media, x989Media, x1200Media);
x320Media.addListener(myFuction);
x989Media.addListener(myFuction);
x767Media.addListener(myFuction);
x1200Media.addListener(myFuction);
