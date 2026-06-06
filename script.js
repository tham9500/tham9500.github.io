$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
    // close mobile menu after navigating
    $(".navbar .menu").removeClass("active");
    $(".menu-btn i").removeClass("active");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var roles = [
    "Software Engineer",
    "Flutter Developer",
    "Computer Engineer",
    "System Analyst",
    "Backend Developer",
  ];
  new Typed(".typing", {
    strings: roles,
    typeSpeed: 90,
    backSpeed: 55,
    loop: true,
  });
  new Typed(".typing-2", {
    strings: roles,
    typeSpeed: 90,
    backSpeed: 55,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 24,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false },
    },
  });
});

// scroll reveal via IntersectionObserver
document.addEventListener("DOMContentLoaded", function () {
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) {
      el.classList.add("show");
    });
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var el = entry.target;
          // small stagger for grouped cards
          var delay = (Array.prototype.indexOf.call(els, el) % 3) * 90;
          setTimeout(function () {
            el.classList.add("show");
          }, delay);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach(function (el) {
    io.observe(el);
  });

  // projects "show more" toggle
  var projToggle = document.querySelector(".proj-toggle");
  if (projToggle) {
    var grid = document.querySelector(".proj-grid");
    projToggle.addEventListener("click", function () {
      var expanded = grid.classList.toggle("expanded");
      projToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
      projToggle.textContent = expanded ? "Show less" : "Show all projects (+5)";
    });
  }
});
