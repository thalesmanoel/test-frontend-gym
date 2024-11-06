var backTop = document.querySelector(".backtotop");

//Função para aparecer o botao, quando for rolado para baixo acima de 150px
window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        backTop.style.display = "block"
    }else{
        backTop.style.display = "none"
    }
})

//Função para fazer com o que o botao suba para cima quando for clicado
backTop.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})