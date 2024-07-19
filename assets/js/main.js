// slider 

$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,

        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


  });


  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let messenger = document.querySelector(".messenger");
let messengerBox = document.querySelector(".messenger-box");
let closeX =document.querySelector(".fa-regular");
messenger.addEventListener("click",() =>{
  messengerBox.style.transform = "translate(0)";
});
closeX.addEventListener("click",() =>{
  messengerBox.style.transform = "translate(3000px)";
})