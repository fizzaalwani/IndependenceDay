

var curosr = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function (dets) {
  curosr.style.left = dets.x + 5 + "px";
  curosr.style.top = dets.y + "px";
  blur.style.left = dets.x - 100 + "px";
  blur.style.top = dets.y - 100 + "px";
});

let accordian=document.querySelectorAll(".accordian-main")
accordian.forEach((acc)=>{
  acc.addEventListener("mouseenter",()=>{
    let img=acc.querySelector('img');
    img.style.display="block";
    img.style.animation = "moveUpDown 2s infinite ease-in-out"; 
  });

  acc.addEventListener("mouseleave",()=>{
    let img=acc.querySelector('img');
    img.style.display="none";
  });

});


// function slideShow(){
//   let slideIndex = 0; // Start with 0 (no translation)
//     let prev = document.querySelector(".fa-arrow-left");
//     let next = document.querySelector(".fa-arrow-right");
//     let slideShow = document.querySelector(".info-heritage");
//     let slides = document.querySelectorAll(".heritage-box");
//     let slideWidth = 30; // Assuming each slide takes up 30% of the width

//     next.addEventListener("click", () => {
//       // Move to the next slide if not already at the end
//       if (slideIndex < slides.length - 1) {
//         slideIndex++;
//         slideShow.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
//       }
//     });

//     prev.addEventListener("click", () => {
//       // Move to the previous slide if not already at the beginning
//       if (slideIndex > 0) {
//         slideIndex--;
//         slideShow.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
//       }
//     });
// }
// slideShow();
function slideShow() {
  let slideIndex = 0;
  const prev = document.querySelector(".fa-arrow-left");
  const next = document.querySelector(".fa-arrow-right");
  const slideShow = document.querySelector(".info-heritage");
  const slides = document.querySelectorAll(".heritage-box");

  const slideCount = slides.length;
  const slideShowWidth = slideShow.clientWidth; // Total width of the container
 
  const slideWidth = slideShowWidth / slideCount; // Width each slide should occupy

  next.addEventListener("click", () => {
      // Move to the next slide or loop back to the first slide
      if(slideIndex==4){
        prev.addEventListener("click", () => {
          // Move to the previous slide or loop back to the last slide
          slideIndex = (slideIndex > 0) ? slideIndex - 1 : slideCount - 1;
          slideShow.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
      });
      }else{
      slideIndex = (slideIndex < slideCount - 3) ? slideIndex + 1 : 0;
      slideShow.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
      }
  });

  prev.addEventListener("click", () => {
      // Move to the previous slide or loop back to the last slide
      slideIndex = (slideIndex > 0) ? slideIndex - 1 : slideCount - 1;
      slideShow.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  });
}

slideShow();


let menu=document.querySelectorAll(".menu");
menu.forEach((menuEl)=>{
  menuEl.addEventListener("mouseenter",()=>{
    curosr.style.scale="1.2";
    curosr.style.border="1px solid #fff";
    curosr.style.backgroundColor="transparent";
  });
  menuEl.addEventListener("mouseleave",()=>{
    curosr.style.scale="1";
    curosr.style.border="0px solid #485806";
    curosr.style.backgroundColor="#485806";
  });
});

gsap.to("nav",{
  // height:"100px",
  // backgroundColor:"#0F0E0E",
  duration:"0.5s",
  scrollTrigger:{
    trigger:"nav",
    scroller:"body",
    start:"top 12%",
    end:"top 15%",
    // markers:true,
    scrub:"1"
  }

})

