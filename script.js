
let musicas = [
    {titulo: 'guitar solo', artista: 'Victor Hugo', src:'musicas/Retribution - NEFFEX.mp3',
img:'imagens/rock.jpg.jpg'},
{titulo: 'heavy metal', artista: 'Victor Hugo', src:'musicas/Ten Inch Spikes - Jeremy Korpas.mp3',
img:'imagens/rock01.jpg.jpg'},
{titulo: ' metal', artista: 'Victor Hugo', src:'musicas/Addict - NEFFEX.mp3',
img:'imagens/rock02.jpg.jpg'},
]

let musica = document.querySelector('audio');
let indexMusica = 0;


let duracaoMusica = document.querySelector('.fim')
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.descrição h2');
let nomeArtista = document.querySelector('.descrição i');

renderizarMusica(indexMusica);



// EVENTOS

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
});
document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++
    renderizarMusica(indexMusica);
});


// FUNÇOES

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = secundosParaMinutos(Math.floor(musica.duration)); 

    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';

}

function pausarMusica(){
    musica.pause();
   
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';

}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = secundosParaMinutos(Math.floor(musica.currentTime));

}

function secundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos+ ':' +campoSegundos;
}

