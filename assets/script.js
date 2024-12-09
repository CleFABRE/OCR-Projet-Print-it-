const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
var slide = 0;

/* Recovery arrow + Addition function Event Listener */ 
let baliseArrowLeft = document.getElementById('arrow-left')
baliseArrowLeft.addEventListener ('click', () => {
	console.log("vous avez cliqué à gauche");

/* Condition carroussel */ 
	if (slide > 0){
		slide--;
		dots[slide + 1].classList.remove('dot_selected')
	} else {
		slide = 3;
		dots[slide -3].classList.remove('dot_selected')
	}

/* Addition function carroussel */ 
	updateCarroussel(slide);
})

/* Recovery arrow + Addition function Event Listener */ 
let baliseArrowRight = document.getElementById('arrow-right')
baliseArrowRight.addEventListener ('click', () => {
	console.log("vous avez cliqué à droite");

/* Condition carroussel */ 
	if (slide < 3){
		slide++;
		dots[slide - 1].classList.remove('dot_selected')
	} else {
		slide = 0;
		dots[slide + 3].classList.remove('dot_selected')
	}

/* Addition function carroussel */ 
	updateCarroussel(slide);
})

/* Update carroussel with given index */
function updateCarroussel(n){
	document.getElementById('banner-img').src="./assets/images/slideshow/"+slides[n].image;
	document.getElementById('tagline').innerHTML=slides[n].tagLine;
	dots[n].classList.add('dot_selected');
}

/* Calculate nbr slide */
var nbrslides = slides.length
console.log(nbrslides)

/* Addition Bullet Point */ 
nbrslides = document.getElementById('dots');
var div = '<div class="dot"></div>';
nbrslides.innerHTML = [div + div + div + div];

/* Dot Recovery for carroussel */
var dots= document.querySelectorAll('.dot');

/* Addition Bullet Point Selected for the first slide */
dots[0].classList.add('dot_selected');

















	


