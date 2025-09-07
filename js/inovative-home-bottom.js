const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  // onscroll-navbar effect
  (function(){
  var navbar = document.querySelector('.inv-subcontainer-1');
  var logoImg = navbar && navbar.querySelector('.logo img');
  var signBtnImg = document.querySelector('.nav-btn .btn-icon');
  var signBtn = document.querySelector('.nav-btn button');
  var scrollThreshold = 300; // px before navbar changes (adjust if you want)
  var ticking = false;

  // paths for images - adjust file names if necessary
  var logoDefaultSrc = (logoImg && logoImg.getAttribute('data-src-default')) || 'images/logo.svg';
  var logoScrolledSrc = (logoImg && logoImg.getAttribute('data-src-scrolled')) || 'images/logo-chng.svg';
  var signDefaultSrc = (signBtnImg && signBtnImg.getAttribute('data-src-default')) || 'images/signlog.svg';
  var signScrolledSrc = (signBtnImg && signBtnImg.getAttribute('data-src-scrolled')) || 'images/signlogo-chng.svg';

  // If HTML images don't have data attributes, set them now
  if (logoImg && !logoImg.getAttribute('data-src-default')) {
    logoImg.setAttribute('data-src-default', logoImg.src);
    logoImg.setAttribute('data-src-scrolled', logoScrolledSrc);
  }
  if (signBtnImg && !signBtnImg.getAttribute('data-src-default')) {
    signBtnImg.setAttribute('data-src-default', signBtnImg.src);
    signBtnImg.setAttribute('data-src-scrolled', signScrolledSrc);
  }

  function onScrollHandler() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        var scrollY = window.scrollY || window.pageYOffset;
        if (scrollY > scrollThreshold) {
          applyScrolledState();
        } else {
          removeScrolledState();
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  function applyScrolledState() {
    if (!navbar.classList.contains('scrolled')) {
      navbar.classList.add('scrolled');
      // swap images smoothly: fade out then change src then fade back
      if (logoImg) fadeSwapImage(logoImg, logoImg.getAttribute('data-src-scrolled'));
      if (signBtnImg) fadeSwapImage(signBtnImg, signBtnImg.getAttribute('data-src-scrolled'));
      // change button colors handled by CSS .scrolled
    }
  }

  function removeScrolledState() {
    if (navbar.classList.contains('scrolled')) {
      navbar.classList.remove('scrolled');
      if (logoImg) fadeSwapImage(logoImg, logoImg.getAttribute('data-src-default'));
      if (signBtnImg) fadeSwapImage(signBtnImg, signBtnImg.getAttribute('data-src-default'));
    }
  }

  function fadeSwapImage(imgEl, newSrc) {
    if (!imgEl) return;
    imgEl.style.transition = 'opacity 180ms ease';
    imgEl.style.opacity = '0';
    setTimeout(function(){
      imgEl.src = newSrc;
      imgEl.style.opacity = '1';
    }, 180);
  }

  // Attach scroll listener
  window.addEventListener('scroll', onScrollHandler, { passive: true });

  // run initially in case page is loaded scrolled
  onScrollHandler();

  // Accessibility: keyboard users — ensure location button toggles aria-expanded (sample)
  var locBtn = document.querySelector('.location-btn');
  if (locBtn) {
    locBtn.addEventListener('click', function(){
      var expanded = locBtn.getAttribute('aria-expanded') === 'true';
      locBtn.setAttribute('aria-expanded', (!expanded).toString());
      // If you have a drop-down for locations, open/close it here.
    });
  }

})();

// owl-carousel
$(document).ready(function () {
  $(".svg-carousel").each(function () {
    var $carousel = $(this);

    var itemsCount = parseInt($carousel.data("items")) || 4;
    var autoplayTimeout = $carousel.data("timeout") || 4000;

    $carousel.owlCarousel({
      items: itemsCount,
      loop: true,
      margin: 15,
      nav: true,
      dots: false,
      autoWidth: true,
      navText: ["&#10094;", "&#10095;"],
      responsive: {
        0: { items: 2 },
        600: { items: 4 },
        1000: { items: itemsCount }
      }
    });

    // hide prev button only on first load
    $carousel.on("initialized.owl.carousel", function () {
      var $prev = $carousel.find(".owl-prev");
      $prev.hide(); // hide on init

      // show it back after first click on next
      $carousel.find(".owl-next").one("click", function () {
        $prev.show();
      });
    });
  });
});

// container-3 owlcarousel cards

$(document).ready(function () {
  // First carousel
  var toprestaurant = $(".custom-carousel-cnt-3").owlCarousel({
    items: 4,
    margin: 15,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: false,
    nav: false,
    responsive: {
    0: { items: 1 },
    576: { items: 1 },
    768: { items: 2 },
    992: { items: 3 },
    1200: { items: 3 },
    1300: { items: 4 },
    1400: { items: 4 } 
  }
  });

  $(".inv-container-3 .owl-next-custom").click(function () {
    toprestaurant.trigger("next.owl.carousel");

    $(".inv-container-3 .owl-nav-custom button").removeClass("active");
  $(this).addClass("active");
  });

  $(".inv-container-3 .owl-prev-custom").click(function () {
    toprestaurant.trigger("prev.owl.carousel");

     $(".inv-container-3 .owl-nav-custom button").removeClass("active");
  $(this).addClass("active");
  });
  $(".inv-container-3 .owl-next-custom").addClass("active");

  // Influencers carousel
  var influencers = $("#influencers").owlCarousel({
    items: 6,
    margin: 15,
    loop: true,
    autoplay: false,
    autoplayTimeout: 7000,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 },
      1300: { items: 4 },
      1400: { items: 6 }
    }
  });

  $(".inv-container-5 .owl-next-custom").click(function () {
    influencers.trigger("next.owl.carousel");
    $(".inv-container-5 .owl-nav-custom button").removeClass("active");
    $(this).addClass("active");
  });

  $(".inv-container-5 .owl-prev-custom").click(function () {
    influencers.trigger("prev.owl.carousel");
    $(".inv-container-5 .owl-nav-custom button").removeClass("active");
    $(this).addClass("active");
  });

  $(".inv-container-5 .owl-next-custom").addClass("active");

  // chocolaelovers
  var influencers = $("#cocolatelovers").owlCarousel({
    items: 4,
    margin: 15,
    loop: true,
    autoplay: true,
    autoplayTimeout: 7000,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 },
      1300: { items: 4 },
      1400: { items: 4 }
    }
  });

  $(".inv-container-6 .owl-next-custom").click(function () {
    influencers.trigger("next.owl.carousel");
    $(".inv-container-6 .owl-nav-custom button").removeClass("active");
    $(this).addClass("active");
  });

  $(".inv-container-6 .owl-prev-custom").click(function () {
    influencers.trigger("prev.owl.carousel");
    $(".inv-container-6 .owl-nav-custom button").removeClass("active");
    $(this).addClass("active");
  });

  $(".inv-container-6 .owl-next-custom").addClass("active");

  // Second carousel
  var toprestaurant2 = $("#toprestaurant-2").owlCarousel({
    items: 3,
    margin: 15,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    nav: false,
    responsive: {
    0: { items: 1 },
    576: { items: 1 },
    768: { items: 2 },
    992: { items: 2 },
    1200: { items: 3 },
    1300: { items: 3 },
    1400: { items: 3 }
  }
  });

  $(".inv-container-4 .owl-next-custom").click(function () {
    toprestaurant2.trigger("next.owl.carousel");
  });

  $(".inv-container-4 .owl-prev-custom").click(function () {
    toprestaurant2.trigger("prev.owl.carousel");
  });

  // Wishlist toggle
  $(document).on("click", ".wishlist", function () {
    $(this).toggleClass("active");
  });
});






