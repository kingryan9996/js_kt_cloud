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
    i>0?hoc.style.backgroundColor = '#000':hoc.style.backgroundColor = 'transparent';
    i>400?qtn.style.opacity = 1:qtn.style.opacity = 0;
    // i>500?topBtn.style.opacity = '1' :topBtn.style.opacity = '0';
    
}


// window.innerHeight>0?.style = "background-color:#000;":false;

window.addEventListener('scroll',hide);






// let player = (e) => {
//     lia.innerHTML = "<div>adwwe</div>";
// }