function toggleMode(){
    let body = document.querySelector('body');
    body.classList.toggle('dark');
    let image = document.querySelector('img.imagem-botao');
    if(body.classList.contains('dark')){
        image.src = "./src/imagens/moon.png";
        image.alt = "imagem da lua";
    }
    else{
        image.src = "./src/imagens/sun.png";
        image.alt = "imagem do sol";
    }

}