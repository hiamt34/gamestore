$(document).ready(function () {
  'use strict' // start of use strict

  /* ==============================
	Scroll
	============================== */
  const mainHeader = $('.header')
  var scrolling = false
  let previousTop = 0
  const currentTop = 0
  const scrollDelta = 10
  const scrollOffset = 140

  var scrolling = false
  $(window).on('scroll', function () {
    if (!scrolling) {
      scrolling = true
      !window.requestAnimationFrame
        ? setTimeout(autoHideHeader, 250)
        : requestAnimationFrame(autoHideHeader)
    }
  })
  $(window).trigger('scroll')

  function autoHideHeader () {
    const currentTop = $(window).scrollTop()
    checkSimpleNavigation(currentTop)
    previousTop = currentTop
    scrolling = false
  }

  function checkSimpleNavigation (currentTop) {
    if (previousTop - currentTop > scrollDelta) {
      mainHeader.removeClass('header--scroll')
    } else if (
      currentTop - previousTop > scrollDelta &&
      currentTop > scrollOffset
    ) {
      mainHeader.addClass('header--scroll')
    }
  }

  function disableScrolling () {
    const x = window.scrollX
    const y = window.scrollY
    window.onscroll = function () {
      window.scrollTo(x, y)
    }
  }

  function enableScrolling () {
    window.onscroll = function () {}
  }

  /* ==============================
	Header
	============================== */
  $('.header__menu').on('click', function () {
    $('.header__menu').toggleClass('header__menu--active')
    $('.header__nav').toggleClass('header__nav--active')

    if ($('.header__nav').hasClass('header__nav--active')) {
      disableScrolling()
    } else {
      enableScrolling()
    }
  })

  /* ==============================
	Multi level dropdowns
	============================== */
  $("ul.dropdown-menu [data-toggle='dropdown']").on('click', function (event) {
    event.preventDefault()
    event.stopPropagation()

    $(this)
      .siblings()
      .toggleClass('show')
  })

  $(document).on('click', function (e) {
    $('.dropdown-menu').removeClass('show')
  })

  /* ==============================
	Bg
	============================== */
  $('.section--bg').each(function () {
    if ($(this).attr('data-bg')) {
      $(this).css({
        background: 'url(' + $(this).data('bg') + ')',
        'background-position': 'center top 140px',
        'background-repeat': 'no-repeat',
        'background-size': 'auto 500px'
      })
    }
  })

  $('.section--head').each(function () {
    if ($(this).attr('data-bg')) {
      $(this).css({
        background: 'url(' + $(this).data('bg') + ')',
        'background-position': 'center top 140px',
        'background-repeat': 'no-repeat',
        'background-size': 'cover'
      })
    }
  })

  $('.section--full-bg').each(function () {
    if ($(this).attr('data-bg')) {
      $(this).css({
        background: 'url(' + $(this).data('bg') + ')',
        'background-position': 'center center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover'
      })
    }
  })

  /* ==============================
	Section carousel
	============================== */
  $('.section__carousel--big').owlCarousel({
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    loop: true,
    autoplay: false,
    smartSpeed: 700,
    margin: 20,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        items: 1,
        margin: 30,
        autoWidth: false
      },
      1200: {
        items: 2,
        margin: 30,
        autoWidth: false,
        mouseDrag: false,
        touchDrag: false
      }
    }
  })

  $('.section__carousel--catalog').owlCarousel({
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    loop: true,
    autoplay: false,
    smartSpeed: 700,
    margin: 20,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        items: 3,
        margin: 30,
        autoWidth: false
      },
      992: {
        items: 4,
        margin: 30,
        autoWidth: false
      },
      1200: {
        items: 5,
        margin: 30,
        autoWidth: false,
        mouseDrag: false,
        touchDrag: false
      }
    }
  })

  $('.section__nav--prev, .details__nav--prev').on('click', function () {
    const carouselId = $(this).attr('data-nav')
    $(carouselId).trigger('prev.owl.carousel')
  })
  $('.section__nav--next, .details__nav--next').on('click', function () {
    const carouselId = $(this).attr('data-nav')
    $(carouselId).trigger('next.owl.carousel')
  })

  /* ==============================
	Partners
	============================== */
  $('.partners').owlCarousel({
    mouseDrag: false,
    touchDrag: false,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 700,
    margin: 20,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 2,
        margin: 30
      },
      768: {
        items: 3,
        margin: 30
      },
      992: {
        items: 4,
        margin: 30
      },
      1200: {
        items: 6,
        margin: 30
      }
    }
  })

  /* ==============================
	Details
	============================== */
  $('.details__carousel').owlCarousel({
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    loop: true,
    autoplay: false,
    smartSpeed: 700,
    margin: 20,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        autoWidth: false,
        items: 4
      },
      992: {
        autoWidth: false,
        items: 5
      },
      1200: {
        autoWidth: false,
        items: 6
      }
    }
  })

  /* ==============================
	Modal
	============================== */
  $('.post__video, .details__trailer, .open-map').magnificPopup({
    disableOn: 0,
    fixedContentPos: true,
    type: 'iframe',
    preloader: false,
    removalDelay: 300,
    mainClass: 'mfp-fade',
    callbacks: {
      open () {
        if ($(window).width() > 1200) {
          $('.header').css('margin-left', '-' + getScrollBarWidth() / 2 + 'px')
        }
      },
      close () {
        if ($(window).width() > 1200) {
          $('.header').css('margin-left', 0)
        }
      }
    }
  })

  $('.details__carousel a').magnificPopup({
    fixedContentPos: true,
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    removalDelay: 300,
    mainClass: 'mfp-fade',
    image: {
      verticalFit: true
    },
    callbacks: {
      open () {
        if ($(window).width() > 1200) {
          $('.header').css('margin-left', '-' + getScrollBarWidth() / 2 + 'px')
        }
      },
      close () {
        if ($(window).width() > 1200) {
          $('.header').css('margin-left', 0)
        }
      }
    }
  })

  $('.open-modal').magnificPopup({
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: false,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    callbacks: {
      open () {
        if ($(window).width() > 1200) {
          $('.header').css('margin-left', '-' + getScrollBarWidth() / 2 + 'px')
        }
      },
      close () {
        if ($(window).width() > 1200) {
          $('.header').css('margin-left', 0)
        }
      }
    }
  })

  $('.modal__close').on('click', function (e) {
    e.preventDefault()
    $.magnificPopup.close()
  })

  function getScrollBarWidth () {
    const $outer = $('<div>')
      .css({ visibility: 'hidden', width: 100, overflow: 'scroll' })
      .appendTo('body')
    const widthWithScroll = $('<div>')
      .css({ width: '100%' })
      .appendTo($outer)
      .outerWidth()
    $outer.remove()
    return 100 - widthWithScroll
  }

  /* ==============================
	Scroll bar
	============================== */
  $('.detail--scroll').mCustomScrollbar({
    axis: 'y',
    scrollbarPosition: 'intside',
    theme: 'custom-bar3'
  })

  $('.list--home').mCustomScrollbar({
    axis: 'y',
    scrollbarPosition: 'inside',
    theme: 'custom-bar2'
  }) 

  // $('.slice--post').mCustomScrollbar({
  //   axis: 'y',
  //   scrollbarPosition: 'inside',
  //   theme: 'custom-bar2'
  // }) 
  

  /* ==============================
	Range sliders
	============================== */
  const VND = (n, separate = ',') => {
    const s = n.toString()
    const len = s.length
    let ret = ''
    for (let i = 1; i <= len; i++) {
      ret = s[len - i] + ret
      if (i % 3 === 0 && i < len) {
        if (
          s[len - i - 1] != '??' &&
          s[len - i - 1] != 'N' &&
          s[len - i - 1] != 'V' &&
          s[len - i - 1] != ' '
        ) {
          ret = separate + ret
        }
      }
    }
    return ret
  }
  function initializeSlider () {
    if ($('#filter__range').length) {
      const firstSlider = document.getElementById('filter__range')
      noUiSlider.create(firstSlider, {
        range: {
          min: 100000,
          max: 10000000
        },
        step: 500000,
        connect: true,
        start: [100000, 100000],
        format: wNumb({
          decimals: 0,
          prefix: 'VN??'
        })
      })
      const firstValues = [
        document.getElementById('filter__range-start'),
        document.getElementById('filter__range-end')
      ]
      firstSlider.noUiSlider.on('update', function (values, handle) {
        firstValues[handle].innerHTML = VND(values[handle])
        const number = []
        number[0] = values[0].match(/\d/g)
        number[0] = Number(number[0].join(''))
        number[1] = values[1].match(/\d/g)
        number[1] = Number(number[1].join(''))
        sessionStorage.price = JSON.stringify(number)
      })
    } else {
      return false
    }
    return false
  }
  $(window).on('load', initializeSlider())
})
