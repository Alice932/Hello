const guest = document.querySelector('.guests')
const drop = document.getElementById('apply')
const dropBlock = document.querySelector('.dropBlock')
const block4 = document.querySelector('.block4')


drop.onclick = () => {
	if(dropBlock.classList.contains('hide') ) {
		dropBlock.classList.remove('hide')
		block4.classList.add('hide')
	}
	else {
		dropBlock.classList.add('hide')
		block4.classList.remove('hide')
	}
}

guest.onclick = () => {
	if(dropBlock.classList.contains('hide') ) {
		dropBlock.classList.toggle('hide')
		block4.classList.add('hide')
	}
	else {
		dropBlock.classList.toggle('hide')
		block4.classList.remove('hide')
	}
}
