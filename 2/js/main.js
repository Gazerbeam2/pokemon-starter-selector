//Current Problems to be fixed: I need to unhide one photo from each generation. Current code only unhides one photo at a time.
//I need the conditional to 

const bulbasaur = document.querySelector('#bulbasaur')
const squirtle = document.querySelector('#squirtle')
const charmander = document.querySelector('#charmander')
const pikachu = document.querySelector('#pikachu')
const totodile = document.querySelector('#totodile')
const chikorita = document.querySelector('#chikorita')
const cyndaquil = document.querySelector('#cyndaquil')
const treecko = document.querySelector('#treecko')
const mudkip = document.querySelector('#mudkip')
const torchic = document.querySelector('#torchic')


document.querySelector('#bulbasaurHead').addEventListener('click', bulbasaurNext)
document.querySelector('#squirtleHead').addEventListener('click', claireNext)
document.querySelector('#charmanderHead').addEventListener('click', sharleenNext)
document.querySelector('#pikachuHead').addEventListener('click',)
document.querySelector('#totodileHead').addEventListener('click',)
document.querySelector('#chikoritaHead').addEventListener('click',)
document.querySelector('#cyndaquilHead').addEventListener('click',)
document.querySelector('#treeckoHead').addEventListener('click',)
document.querySelector('#torchicHead').addEventListener('click',)
document.querySelector('#mudkipHead').addEventListener('click',)



function bulbasaurNext(){
	charmander.classList.add('hidden')
	squirtle.classList.add('hidden')
	pikachu.classList.add('hidden')
	totodile.classList.add('hidden')
	chikorita.classList.add('hidden')
	cyndaquil.classList.add('hidden')
	treecko.classList.add('hidden')
	mudkip.classList.add('hidden')
	torchic.classList.add('hidden')
	bulbasaur.classList.toggle('hidden')



}

function claireNext(){
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
}

function sharleenNext(){
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
}
