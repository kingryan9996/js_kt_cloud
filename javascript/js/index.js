$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("./html/inc.html header",head);
$("footer").load("./html/inc.html footer");
$("header").load("../html/inc.html header",head);
$("footer").load("../html/inc.html footer");

let idx = localStorage.idx || 0;

function head () {
    $("header li").eq(idx).css("scale","7.0")
    .css(    'transform','translateY(30px)')
    .css('background-color','rgba(0,0,0,0.6)')
    $("header li a").eq(idx).css("color","coral")
    

    $("header li").click(function(){
        let idx = $(this).index();

        localStorage.idx = idx;
    })


}
head();


// function head() {
//   $("header a").click(function () {
//     alert("헤더!");
//   });
// }

// function foot() {
//   $("footer a").click(function () {
//     alert("푸터!");
//   });
// }

// let slides = document.querySelector(".swiper-wrapper"),
//   slide = document.querySelectorAll(".swiper-wrapper .swiper-slide"),
//   slideCount = slide.length,
//   // slideWidth = slide[0].offsetWidth,
//   slideWidth = slide[0].clientWidth,
//   slideMargin = 50,
//   moveAmt = slideWidth + slideMargin,
//   maxSlides = 3,
//   prevBtn = document.querySelector(".prev"),
//   nextBtn = document.querySelector(".next");

// let currentIdx = 0;
// //복사본생성
// //돌아갈때 트렌지션 삭제
// // <<  ㅣㅣ >  >>
// //앞뒤 클론생성

// function play() {
//   // console.log("3");
//   for (let i = 0; i < maxSlides; i++) {
//     // console.log("4");
//     let cloneSlide = slide[i].cloneNode(true);
//     cloneSlide.classList.add("clone");
//     slides.classList.add("animated");
//     slides.appendChild(cloneSlide);
//   }
//   for (let i = slideCount - 1; i >= 0; i--) {
//     // console.log("5");
//     let cloneSlide = slide[i].cloneNode(true);
//     cloneSlide.classList.add("clone");
//     slides.prepend(cloneSlide);
//   }
// }

// // 가로배열
// // function slideLayout() {
// //   let newslide = document.querySelectorAll(".slides li");
// //   newslide.forEach(function (item, index) {
// //     item.style.left = moveAmt * index + "px";
// //   });
// // }
// // slideLayout();

// // 중앙배치
// function setSlide() {
//   let ulMoveAmt = -slideCount * moveAmt + "px";
//   slides.style.transform = "translateX(" + ulMoveAmt + ")";
// }
// setSlide();

// //좌우버튼이동
// let prevMove = () => {
//   console.log("aaa");
//   moveSlide(currentIdx + 1);
// };

// // nextBtn.addEventListener("click", prevMove);

// // prevBtn.addEventListener("click", function () {
// //   moveSlide(currentIdx - 1);
// // });

// // =========================================
// // 드래그(스와이프) 이벤트를 위한 변수 초기화
// let startPoint = 0;
// let endPoint = 0;

// // PC 클릭 이벤트 (드래그)
// slides.addEventListener("mousedown", (e) => {
//   console.log("mousedown", e.pageX);
//   startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
// });

// slides.addEventListener("mouseup", (e) => {
//   console.log("mouseup", e.pageX);
//   endPoint = e.pageX + 5; // 마우스 드래그 끝 위치 저장
//   if (startPoint < endPoint) {
//     slides.classList.add("animated");
//     // 마우스가 오른쪽으로 드래그 된 경우
//     console.log("prevMove");
//     prevMove();
//   }
// });
// //   } else if (startPoint > endPoint) {
// //     // 마우스가 왼쪽으로 드래그 된 경우
// //     console.log("next move");
// //     nextMove();
// //   }
// // });
// // ========================================

// //moveSlide함수
// function moveSlide(num) {
//   //여기에서 잠시 멈추면
//   console.log(num);
//   slides.style.left = moveAmt * -num + "px";
//   currentIdx = num;
//   console.log(num);
//   console.log(currentIdx);
//   console.log(-slideCount);

//   if (currentIdx == slideCount || currentIdx == -slideCount) {
//     setTimeout(function () {
//       slides.classList.remove("animated");
//       slides.style.left = "0px";
//       currentIdx = 0;
//       console.log(currentIdx);
//       console.log(slideCount);

//       //탈출하려고하는데 0으로 바뀌면서 또 반복
//     }, 3000);
//     // slides.classList.add("animated");
//   }
//   slides.classList.add("animated");
// }
// //자동슬라이드

// let timer = false;
// let slideWrapper = document.querySelector(".line03");

// let interval = setInterval(callback, 9000);

// function callback() {
//   if (!timer) {
//     console.log("실행된다");
//     moveSlide(currentIdx + 1);
//   } else {
//     console.log("멈춰");
//     clearInterval(interval);
//   }
// }
// play();

// //반응형 슬라이드

// // window.addEventListener("resize", function () {
// //   this.clearInterval(timer);
// //   let currentWidth = this.document.body.offsetWidth;
// //   if (currentWidth < 700) {
// //     let slidesWidth = slide.offsetWidth;
// //     let slideWidth = slidesWidth - (slideMargin * maxSlides - 1) / 3;
// //     moveAmt = slideMargin + slideWidth;

// //     // let newSlide = document.querySelectorAll(".slides > li");

// //     slides.forEach(function (item, index) {
// //       item.style.width = slideWidth + "px";
// //     });
// //   }

// //   slideLayout();
// //   setSlide();
// //   this.clearInterval(timer);
// // });

// //=====================================
// //드래그효과
// let slideWrap = document.querySelector(".line03");
// // let innerSlider = document.querySelector(".slider-inner");
// let pressed = false;
// let startX;
// let x;

// slideWrap.addEventListener("mousedown", (e) => {
//   pressed = true;
//   startX = e.offsetX - slides.offsetLeft;
//   slides.classList.remove("animated");
//   // console.log("down");

//   // console.log(e.offsetX, "e.offsetX");
//   // console.log(slides.offsetLeft, "slides.offsetLeft");

//   clearInterval(interval);

//   // if (inner.left < -slideWidth || outer.left > slideWidth) {

//   //   slides.style.left = "0px";

//   // let x = slideWrap.scrollLeft;
//   // let y = slide.scrollTop;
//   // console.log(x);
//   // console.log(y);
// });

// slideWrap.addEventListener("mouseup", () => {
//   pressed = false;
//   startX = "";
//   interval = setInterval(callback, 9000);
// });

// slideWrap.addEventListener("mousemove", (e) => {
//   // slideWrap.style.cursor = "default";
//   // console.log(pressed, "pres");
//   if (!pressed) return;

//   e.preventDefault();
//   x = e.offsetX;
//   // console.log(x, "xx");
//   // console.log(startX, "startx");
//   slides.style.left = `${x - startX}px`;
//   pressed = true;
//   checkBoundary();
//   // clearInterval(interval);
// });

// function checkBoundary() {
//   // console.log("aaaa");

//   let outer = slides.getBoundingClientRect();
//   let inner = slide[2].getBoundingClientRect();
//   // console.log(outer.left, "outer", outer.right);
//   // console.log(inner.left, "inner");
//   // console.log(slideWidth, "slideWidth");

//   // if (parseInt(slides.style.left) > 0) {
//   //   slides.style.left = "0px";
//   // } else
//   if (inner.left < -slideWidth || outer.left > slideWidth) {
//     slides.classList.remove("animated");
//     slides.style.left = "0px";
//     currentIdx = 0;

//     // slides.classList.remove("animated");
//     // slides.style.left = `-${inner.width - outer.width}px`;
//     // currentIdx = 0;
//   }
// }
