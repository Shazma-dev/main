
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.padding = " 1% 6% ";
  } else {
    document.getElementById("header").style.padding = " 2% 6%";
  }
}



/*javascript for toggle menu*/



var navLinks = document.getElementById('navLinks');
function showMenu(){
    navLinks.style.right = '0';
}
function hideMenu(){
    navLinks.style.right = '-200px'
}
 
/* script for slider */
let next = document.querySelector('.next')
        let prev = document.querySelector('.prev')
        
        next.addEventListener('click', function(){
            let items = document.querySelectorAll('.item')
            document.querySelector('.slide').appendChild(items[0])
        })
        
        prev.addEventListener('click', function(){
            let items = document.querySelectorAll('.item')
            document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
        })

// js for automatic slider

        // document.addEventListener('DOMContentLoaded', function () {
        //     const sliderWrapper = document.querySelector('.slide');
        //     let currentIndex = 0;
          
        //     function nextSlide() {
        //       currentIndex = (currentIndex + 1) % document.querySelectorAll('.item').length;
        //       updateSlider();
        //     }
          
        //     function updateSlider() {
        //       const translateValue = -currentIndex * 100 + '%';
        //       sliderWrapper.style.transform = 'translateX(' + translateValue + ')';
        //     }
          
        //     setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
        //   });

/* tabs js */

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('active');
        })
        target.classList.add('active')
    })
});

// // Add active class to the current button (highlight it)
// var header = document.getElementById("tab-service");
// var btns = header.getElementsByClassName("active-service");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }


/* amazing work tab js */

const works = document.querySelectorAll('[data-work-target]');
const workContents = document.querySelectorAll('[data-work-content]');
works.forEach(work => {
    work.addEventListener('click', ()=>{
        const target = document.querySelector(work.dataset.workTarget)
        workContents.forEach(workContent =>{
            workContent.classList.remove('active1');
        })
        target.classList.add('active1')
    })
    
});

/* amazing services tab js */


const services = document.querySelectorAll('[data-service-target]');
const serviceContents = document.querySelectorAll('[data-service-content]');
services.forEach(service => {
    service.addEventListener('click', ()=>{
        const target = document.querySelector(service.dataset.serviceTarget)
        serviceContents.forEach(serviceContent =>{
            serviceContent.classList.remove('active2');
        })
        target.classList.add('active2')
    })
});


//code for adding counter

let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;
valueDisplays.forEach((valueDisplay) =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
    startValue += 1;
    valueDisplay.textContent = startValue;
    if(startValue == endValue){
        clearInterval(counter);
    }
    
})

});

//coding for testimonial
let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");

function showReview(){
    for (userPic of userPics) {
    userPic.classList.remove('active-pic');

    }
    for(userText of userTexts){
        userText.classList.remove('active-text');
    }
    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}