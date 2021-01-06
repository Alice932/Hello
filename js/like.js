const like = document.querySelector('.fa_heart')
const like2 = document.querySelector('.fa_heart2')
const numb_like = document.querySelector('#span_heart')
const heart = document.querySelector('.heart_1')
const heart2 = document.querySelector('.heart_2')


heart.onclick = () => {
	if(like.classList.contains('fill_heart') ) {
		like.classList.toggle('border_heart')
	}
	else {
		like.classList.toggle('fill_heart')
	}
}

heart2.onclick = () => {
	if(like2.classList.contains('fill_heart') ) {
		like2.classList.toggle('border_heart')
	}
	else {
		like2.classList.toggle('fill_heart')
	}
}

