
//set new rating
const stars = document.querySelectorAll('.fa-star')
const rangeBar = document.getElementById("file");

const range =[20, 40 , 60, 80, 90,100]
stars.forEach(elem =>{
	
	elem.addEventListener('click', (e)=>{

		console.log(elem)
		// event.preventDefault()
		const rating = elem.id; 
		for (var i = 0; i < rating; i++) {
			
				console.log(rating)
			rangeBar.value=range[rating]

			rangeBar.style.display="block"
			stars[i].style.color="yellow"
			if(rating==1){
				stars[i].style.color="red"
			}
			
			
			
		}
		

	})
	// console.log(elem.classList)
})
// document.addEventListener()
