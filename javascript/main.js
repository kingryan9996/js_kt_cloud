let hide = () => {
  // console.log(window.pageYOffset)
  let hoc = document.getElementsByTagName("header")[0];
  let qtn = document.getElementsByClassName("to-top")[0];

  // let totn = document.getElementsByClassName("to-top");
  let i = window.pageYOffset;
  // Math.floor(
  //     document.querySelector("body").scrollHeight
  // )
  // console.log(i);
  // ((document.querySelector("body").scrollTop /
  //     (document.querySelector("body").scrollHeight -
  //         document.querySelector("body").clientHeight)) * 100);

  // i>0?(hoc.style.add = border:5px solid yellow:false
  // console.log(i>0?true:false);
  i > 0
    ? (hoc.style.backgroundColor = "#000")
    : (hoc.style.backgroundColor = "transparent");
  i > 400 ? (qtn.style.opacity = 1) : (qtn.style.opacity = 0);
  // i>500?topBtn.style.opacity = '1' :topBtn.style.opacity = '0';
};

// window.innerHeight>0?.style = "background-color:#000;":false;

window.addEventListener("scroll", hide);

const blueBar = document.querySelector(".swiper-container01");

let resizeTimer = null;
function resizeComplete() {
  // 리사이즈 함수 사용
  if (blueBar.classList.contains("on")) {
    blueBar.classList.remove("on");
  } else {
    blueBar.classList.add("on");

    // blueBar.classList.add('on')
  }
}

window.addEventListener("resize", function () {
  // clearTimeout(resizeTimer);
  blueBar.classList.remove("on");
  resizeTimer = setTimeout(function () {
    blueBar.classList.add("on");

    // blueBar.classList.add('on')
  }, 100);
});

const slideRe = document.querySelector(".swiper-container01");

slideRe.addEventListener("mouseup", function () {
  // clearTimeout(resizeTimer);
  blueBar.classList.remove("on");
  // resizeTimer = setTimeout(function () {
  blueBar.classList.add("on");

  // blueBar.classList.add('on')
  // }, 100);
});

const div = document.querySelector(".swiper-container01");
// const clearbtn = document.getElementById('clearbtn');
// const result = document.getElementById('result');

slideRe.addEventListener("mousedown", (e) => {
  console.log("마우스다운");
  // result.innerHTML = `<div>screenX, Y: (${e.screenX}, ${e.screenY})</div>`;
  let preLocX = `${e.screenX}`;
  // console.log(`<div>screenX, Y: (${e.screenX}, ${e.screenY})</div>`);
  slideRe.addEventListener("mouseup", function (event) {
    event.stopPropagation();
    let locX = `${e.screenX}`;
    // console.log(`<div>screenX, Y: (${e.screenX}, ${e.screenY})</div>`);
    // clearTimeout(resizeTimer);
    if (preLocX != locX) {
      blueBar.classList.remove("on");

      // resizeTimer = setTimeout(function () {
      //   blueBar.classList.add("on");

      //   // blueBar.classList.add('on')
      // }, 50);
    }
    locX = "";
    blueBar.classList.remove("on");
    resizeTimer = setTimeout(function () {
      blueBar.classList.toggle("on");
      console.log("eee");
      // blueBar.classList.add('on')
    }, 0);
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      blueBar.classList.add("on");
      console.log("eee");
      // blueBar.classList.add('on')
    }, 0);
  });

  // result.innerHTML += `<div>clientX, Y: (${e.clientX}, ${e.clientY})</div>`;
  // console.log(`<div>clientX, Y: (${e.clientX}, ${e.clientY})</div>`);
  // result.innerHTML += `<div>pageX, Y: (${e.pageX}, ${e.pageY})</div>`;
  // console.log(`<div>pageX, Y: (${e.pageX}, ${e.pageY})</div>`);
  // result.innerHTML += `<div>offsetX, Y: (${e.offsetX}, ${e.offsetY})</div>`;
  // console.log(`<div>offsetX, Y: (${e.offsetX}, ${e.offsetY})</div>`);
});

// clearbtn.addEventListener('click', (e) => {
//   result.innerHTML= '';
// }
// );
