//Current Problems to be fixed: I need to unhide one photo from each generation. Current code only unhides one photo at a time.
//Possible Test: Keep the ones of the different generation toggled but hide the ones from the same generation
//Add background music and maybe sprites


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
document.querySelector('#squirtleHead').addEventListener('click', squirtleNext)
document.querySelector('#charmanderHead').addEventListener('click', charmanderNext)
document.querySelector('#pikachuHead').addEventListener('click', pikachuNext)
document.querySelector('#totodileHead').addEventListener('click',totodileNext)
document.querySelector('#chikoritaHead').addEventListener('click',chikoritaNext)
document.querySelector('#cyndaquilHead').addEventListener('click',cyndaquilNext)
document.querySelector('#treeckoHead').addEventListener('click',treeckoNext)
document.querySelector('#torchicHead').addEventListener('click',torchicNext)
document.querySelector('#mudkipHead').addEventListener('click',mudkipNext)



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

function charmanderNext(){
	charmander.classList.toggle('hidden')
	squirtle.classList.add('hidden')
	pikachu.classList.add('hidden')
	totodile.classList.add('hidden')
	chikorita.classList.add('hidden')
	cyndaquil.classList.add('hidden')
	treecko.classList.add('hidden')
	mudkip.classList.add('hidden')
	torchic.classList.add('hidden')
	bulbasaur.classList.add('hidden')
}

function squirtleNext(){
	charmander.classList.add('hidden')
	squirtle.classList.toggle('hidden')
	pikachu.classList.add('hidden')
	totodile.classList.add('hidden')
	chikorita.classList.add('hidden')
	cyndaquil.classList.add('hidden')
	treecko.classList.add('hidden')
	mudkip.classList.add('hidden')
	torchic.classList.add('hidden')
	bulbasaur.classList.add('hidden')
}

function pikachuNext(){
	charmander.classList.add('hidden')
	squirtle.classList.add('hidden')
	pikachu.classList.toggle('hidden')
	totodile.classList.add('hidden')
	chikorita.classList.add('hidden')
	cyndaquil.classList.add('hidden')
	treecko.classList.add('hidden')
	mudkip.classList.add('hidden')
	torchic.classList.add('hidden')
	bulbasaur.classList.add('hidden')
}

function totodileNext(){
	charmander.classList.add('hidden')
	squirtle.classList.add('hidden')
	pikachu.classList.add('hidden')
	totodile.classList.toggle('hidden')
	chikorita.classList.add('hidden')
	cyndaquil.classList.add('hidden')
	treecko.classList.add('hidden')
	mudkip.classList.add('hidden')
	torchic.classList.add('hidden')
	bulbasaur.classList.add('hidden')
}

function chikoritaNext(){
	charmander.classList.add('hidden')
	squirtle.classList.add('hidden')
	pikachu.classList.add('hidden')
	totodile.classList.add('hidden')
	chikorita.classList.toggle('hidden')
	cyndaquil.classList.add('hidden')
	treecko.classList.add('hidden')
	mudkip.classList.add('hidden')
	torchic.classList.add('hidden')
	bulbasaur.classList.add('hidden')
}

function cyndaquilNext(){
	charmander.classList.add('hidden')
	squirtle.classList.add('hidden')
	pikachu.classList.add('hidden')
	totodile.classList.add('hidden')
	chikorita.classList.add('hidden')
	cyndaquil.classList.toggle('hidden')
	treecko.classList.add('hidden')
	mudkip.classList.add('hidden')
	torchic.classList.add('hidden')
	bulbasaur.classList.add('hidden')
}

function treeckoNext(){
	charmander.classList.add('hidden')
	squirtle.classList.add('hidden')
	pikachu.classList.add('hidden')
	totodile.classList.add('hidden')
	chikorita.classList.add('hidden')
	cyndaquil.classList.add('hidden')
	treecko.classList.toggle('hidden')
	mudkip.classList.add('hidden')
	torchic.classList.add('hidden')
	bulbasaur.classList.add('hidden')


}

function mudkipNext(){
	charmander.classList.add('hidden')
	squirtle.classList.add('hidden')
	pikachu.classList.add('hidden')
	totodile.classList.add('hidden')
	chikorita.classList.add('hidden')
	cyndaquil.classList.add('hidden')
	treecko.classList.add('hidden')
	mudkip.classList.toggle('hidden')
	torchic.classList.add('hidden')
	bulbasaur.classList.add('hidden')
}

function torchicNext(){
	charmander.classList.add('hidden')
	squirtle.classList.add('hidden')
	pikachu.classList.add('hidden')
	totodile.classList.add('hidden')
	chikorita.classList.add('hidden')
	cyndaquil.classList.add('hidden')
	treecko.classList.add('hidden')
	mudkip.classList.add('hidden')
	torchic.classList.toggle('hidden')
	bulbasaur.classList.add('hidden')
}
