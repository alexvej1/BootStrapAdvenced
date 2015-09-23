$(function(){$("ul.nav li.dropdown").hover(function(){$(".dropdown-menu",this).fadeIn()},function(){$(".dropdown-menu",this).fadeOut("fast")})});
$("#myCarousel").carousel({interval: 4000});
//activate schedule tabs
var hash = window.location.hash;
hash && $('ul.nav a[href="' + hash + '"]').tab('show');