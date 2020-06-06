/*
 * jQuery Superfish Menu Plugin
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */
 
$(function() {
<<<<<<< HEAD
//    alert( 'JavaScript Loaded!' );
$(".field--name-field-user-validation").addClass("selected"); 
=======
//    alert( 'JavaScript Loaded!')
    $(".field--name-field-user-validation").addClass("selected"); 
>>>>>>> e459439c2c0536b405a14d4724a2ddc47bfbb0e1
    $(".selected").hide();
    $( "img" ).click(function() {
	  $(".selected").delay(500).show(0);
	  $(".field--name-field-user-validation").find(".field__item").css("color","#e33e33");
	  $(".field__item").find('img').hide();
     });
<<<<<<< HEAD
=======

>>>>>>> e459439c2c0536b405a14d4724a2ddc47bfbb0e1
});
