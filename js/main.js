'use strict';
var header = document.querySelector('.page-header');
var navs = document.querySelectorAll('.nav');
var toggle = document.querySelector('.nav__toggle');
var navLists = document.querySelectorAll('.nav__list');

header.classList.remove("page-header--nojs");
for ( var i = 0; i < navs.length; i++) {
  navs[i].classList.remove("nav--nojs");
}

toggle.addEventListener('click', function() {
  if(toggle.classList.contains('nav__toggle--opened')) {
    toggle.classList.remove('nav__toggle--opened');
    toggle.classList.add('nav__toggle--closed');
    for( var i = 0; i < navLists.length; i++) {
      navLists[i].classList.remove('nav__list--opened');
      navLists[i].classList.add('nav__list--closed');
    }
  } else {
    toggle.classList.remove('nav__toggle--closed');
    toggle.classList.add('nav__toggle--opened');
    for( var i = 0; i < navLists.length; i++) {
      navLists[i].classList.remove('nav__list--closed');
      navLists[i].classList.add('nav__list--opened');
    }
  }
})
