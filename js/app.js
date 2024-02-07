let btn = document.querySelector(".btn");
let change_color = document.querySelector("#change_color");

btn.addEventListener("click", function () {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

  
    change_color.style.backgroundColor = `rgb(${red} , ${green} ,${blue})`;
});

// let scrollBtn = document.querySelector(".scroll-btn");
// window.addEventListener("scroll", function () {
//     if (window.scrollY > 800) {
//         //   console.log(window.pageYOffset);
//         scrollBtn.classList.add("active");
//     } else {
//         scrollBtn.classList.remove("active");
//     }
// });


let btnScroll = document.querySelector('.btn-scroll');
window.addEventListener('scroll', function(){
    if(window.scrollY > 500){
        btnScroll.classList.add('active');
    }else{
        btnScroll.classList.remove('active')
    }
    
})