

// Encontrar altura e largura
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10


//Buscar a página de nível e direcionar com
//a velocidade certa
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	criaMosquitoTempo = 1000
} else if(nivel === 'try-hard') {
	criaMosquitoTempo = 750
}

function ajustaTamanhoTela() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoTela()

//Criando cronometro

var cronometro = setInterval(function(){

	tempo -= 1

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	}else {
	document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)

function posicaoRandomica() {

	//Remover mosca anterior caso exista
	if(document.getElementById('mosca')) {
		document.getElementById('mosca').remove()

		//Consumir as vidas caso nao click na mosca e direcionar
		//para fim de jogo
		if(vidas > 3) {

			window.location.href = 'fim_de_jogo.html'
		} else {document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

		vidas++
		}
	}

	// Deixar a posição da Mosca random
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)


	//Criar o elemento html
	var mosca = document.createElement('img')
	mosca.src = 'imagens/mosca.png'
	mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'
	mosca.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosca)


}

//CRIANDO 3 TAMANHOS DE MOSQUITOS E DEIXANDO TAMANHO RANDOM
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3) 

	switch(classe) {
	case 0:
		return 'mosquito1'

	case 1:
		return 'mosquito2'

	case 2:
		return 'mosquito3'
	}

}

//COLOCANDO MOSQUITOS EM LADOS ALEATORIOS
function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
	case 0:
		return 'ladoA'
	case 1:
		return 'ladoB'
	}
}

