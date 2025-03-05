// /*
// Version: 1.0
// Author: Unique Miller
// Author URL: savourypalette.com
// License: (if other than below)
// This is a FREE script and is dual licensed under the following:
// http://www.opensource.org/licenses/mit-license.php | http://www.gnu.org/licenses/gpl.html
// Aside from these comments, you may modify and distribute this file as you please. Have fun!
// */
// $(document).ready(function(){
// 	$('#signupform').validate({
// 		rules: {
// 			fname: {
// 				required: true,
// 				rangelength: [2, 60]
// 			},
// 			lname: {
// 				required: true
// 			},
// 			bday: {
// 				required: true
// 			},
// 			address: {
// 				required: true
// 			},
// 			city: {
// 				required: true
// 			},
// 			state: {
// 				required: true
// 			},
// 			zip: {
//                 required: true,
//                 digits: true,
//                 minlength: 5,
//                 maxlength: 5
// 			},
// 			email: {
// 				required: true,
// 				email: true
// 			},
// 			password: {
// 				required: true,
//                 minlength: 8,
//                 maxlength: 12
// 			},
// 			password2: {
// 				required: true,
//                 equalTo: "#password"
// 			},
// 			terms: {
// 				required: true
// 			},
// 			agereq: {
// 				required: true
// 			}
// 		}, 
// 		messages: {
// 			fname: {
// 				required: "Please enter your full first name.",
// 				rangelength: "Does your name really only have one letter?"
// 			},
// 			lname: {
// 				required: "Please enter your full last name."
// 			},
// 			bday: {
// 				required: "Please enter your date of birth."
// 			},
// 			address: {
// 				required: "Please enter your street address."
// 			},
// 			city: {
// 				required: "Please enter your city."
// 			},
// 			state: {
// 				required: "Please enter your state."
// 			},
// 			zip: {
//                 required: "Please enter your zip code.",
//                 digits: "Please only use numbers.",
//                 minlength: "This is too small for a zip code. 5 digits please.",
//                 maxlength: "This is too large for a zip code. 5 digits please."
// 			},
// 			email: {
// 				required: "Please enter your email address.",
// 				email: "Please enter a valid email address."
// 			},
// 			password: {
// 				required: "Please create a password.",
//                 minlength: "Your password is too short and hackable.",
//                 maxlength: "Your password is too long and forgettable."
// 			},
// 			password2: {
// 				required: "Please confirm the password you've entered above.",
//                 equalTo: "These passwords don't match, like an orchid in a rose bush."
// 			},
// 			terms: {
// 				required: "Please agree to our terms which allows us to own 50% of all electronics you own."
// 			},
// 			agereq: {
// 				required: "You must be 21 or older to join and order alcohol CHILD."
// 			}
// 		}, 
// 		errorPlacement: function(error, element) {
//             if(element.is(":radio") || element.is(":checkbox")) {
//                 error.appendTo(element.parent());
//             } else {
//                 error.insertAfter(element);
//             }//end else
//         }
// 	});
// });