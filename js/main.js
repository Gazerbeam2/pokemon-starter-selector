//Current Problems to be fixed: I need to unhide one photo from each generation. Current code only unhides one photo at a time.
//Possible Test: Keep the ones of the different generation toggled but hide the ones from the same generation
//Add background music and maybe sprites
//



// Select all the Pokémon images within each generation
const pokemonImages = document.querySelectorAll('.generation .pokemon-image');

// Add click event listeners to each Pokémon image
pokemonImages.forEach((image) => {
    image.addEventListener('click', addBorder)
		function addBorder(){
			image.classList.add('selected');

		const generationContainer = image.closest('.generation');
        const otherPokemonImages = generationContainer.querySelectorAll('.pokemon-image');

        otherPokemonImages.forEach((otherImage) => {
            if (otherImage !== image) {
                otherImage.classList.remove('selected');
			}

	})

}
})
