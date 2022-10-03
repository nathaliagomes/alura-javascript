var tabela = document.querySelector("table");

/*ao clicar em algum td, o evento vai subir e alcançar o pai (tabela) que é o escutador de evento;
o escutador vai pegar quem foi clicado (td) e vai remover o pai dele (tr), ou seja, a linha inteira */
tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500);

});
