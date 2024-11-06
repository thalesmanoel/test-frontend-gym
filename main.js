var backTop = document.querySelector(".backtotop");

window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        backTop.style.display = "block"
    }else{
        backTop.style.display = "none"
    }
})

backTop.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})