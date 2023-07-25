function tocaSom (seletorAudio) {
    const element = document.querySelector(seletorAudio);

    if (element && element.localName === 'audio') {
            element.play();
    }
    else {
        alert('Elemento não encontrado');
    }    
}

const listadeTeclas = document.querySelectorAll('.tecla');

//Para 
for (let contador = 0; contador < listadeTeclas.length; contador++) {

    const tecla = listadeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;  //template string
    
    tecla.onclick = function () {
       tocaSom(idAudio); 
    };

    tecla.onkeydown = function (event) {
        
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');  
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
