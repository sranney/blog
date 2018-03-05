window.addEventListener("scroll",function(e){

    const cutOff = Math.round((this.scrollY/this.innerHeight)*100);
    //change linear gradient of navbar

    const linearGradient = `linear-gradient(to bottom, rgba(60, 110, 170, 0.7) 0%,rgba(60, 110, 170, 0.7) ${cutOff*1.5}%,rgba(30,200,160,0.7) ${70+cutOff*1.5}%,rgba(30,200,160,0.7) 100%)`;
    document.querySelector(".navigation").style.backgroundImage = linearGradient;
    
});