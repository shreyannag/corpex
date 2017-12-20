/*bxslider settings*/
$(document).ready(function() {
$('.bxslider').bxSlider({
mode: 'horizontal',
controls: 'true',
pager: false,
keyboardEnabled: true,
touchEnabled: true
});
});
/*OnScroll animation trigger*/ 
var animateHTML = function () {
    var elems,elems1,elems2,elems3,
      windowHeight
    var init = function () {
      elems = document.getElementsByClassName('skillhide1')
      elems1 = document.getElementsByClassName('skillhide2')
      elems2 = document.getElementsByClassName('skillhide3')
      elems3 = document.getElementsByClassName('skillhide4')
      windowHeight = window.innerHeight
      _addEventHandlers()
    }
    var _addEventHandlers = function () {
      window.addEventListener('scroll', _checkPosition)
      window.addEventListener('resize', init)
    }
    var _checkPosition = function () {
        /*for element1*/
      for (var i = 0; i < elems.length; i++) {
        var posFromTop = elems[i].getBoundingClientRect().top
        if (posFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace('skillhide1', 'develop')
        }
      }
      /*for element2*/
      for (var i = 0; i < elems1.length; i++) {
        var posFromTop = elems1[i].getBoundingClientRect().top
        if (posFromTop - windowHeight <= 0) {
          elems1[i].className = elems1[i].className.replace('skillhide2', 'design')
        }
      }
      /*for element3*/
      for (var i = 0; i < elems2.length; i++) {
        var posFromTop = elems2[i].getBoundingClientRect().top
        if (posFromTop - windowHeight <= 0) {
          elems2[i].className = elems2[i].className.replace('skillhide3', 'market')
        }
      }
      /*for element4*/
      for (var i = 0; i < elems3.length; i++) {
        var posFromTop = elems3[i].getBoundingClientRect().top
        if (posFromTop - windowHeight <= 0) {
          elems3[i].className = elems3[i].className.replace('skillhide4', 'branding')
        }
      }
    }
    return {
      init: init
    }
  }
  animateHTML().init()
