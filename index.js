const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
 header.classList.toggle ("sticky", window.scrollY > 0);
});

 

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
     menu.classList.toggle("bx-x");
     navbar.classList.toggle("active");
}

window.onscroll = () => {
     menu.classList.remove('bx-x');
     navbar.classList. remove('active');
}

 

 
function  Email(){
alert("Kindly fill out the form")
}

function  contact(){
alert('NOTE: All fields are required when filling the form')
}
 
window.sr = ScrollReveal ({
    distance: '25px',
      duration: 2500,
      reset: true
})

sr.reveal('.home-text',{delay:19, origin:'top'})
 sr.reveal('.about,.services,.portfolio,.contact',{delay:20, origin:' top'})

//  if ( "body" = onscroll ) {
//      window.sr = ScrollReveal ({
//           distance: '25px',
//             duration: 2500,
//             reset: true
//       }).disable
//  }