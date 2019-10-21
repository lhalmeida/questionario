var maxPerguntas = 5;
// Para próxima melhoria
//var todasPerguntas = [{pergunta: "Qual time tem a maior torcida do mundo?", escolhas: ["Flamengo", "Real Madrid", "Barcelona", "Manchester United"], respostaCorreta: 0 }];

function aoCarregar(){
    escondeTudo();
    document.getElementById('pergunta1').style.display = "block";
    
    document.getElementById('perguntaAtual').value = 1;
}
function escondeTudo(){
    for( i = 1; i <= maxPerguntas; i++){
    document.getElementById('pergunta'+i).style.display = "none";
    }
}
function perguntaAnterior(){
    actual = document.getElementById('perguntaAtual').value;
    if(actual > 1){
        escondeTudo();
        document.getElementById('perguntaAtual').value--;
        document.getElementById('pergunta'+document.getElementById('perguntaAtual').value).style.display = "block";
    }
}

function proximaPergunta(){
    actual = document.getElementById('perguntaAtual').value;
    if(actual >= 1 && actual < maxPerguntas){
        escondeTudo();
        document.getElementById('perguntaAtual').value++;
        document.getElementById('pergunta'+document.getElementById('perguntaAtual').value).style.display = "block";
    }
}