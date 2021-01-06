const minus = document.querySelector('.circle_drop_minus')
const counter1 = document.getElementById('#counter1')
const counter2 = document.getElementById('#counter2')
const counter3 = document.getElementById('#counter3')

function addVisible () {
	if(counter1.value > 0) {
		minus.classList.add('opacity')
	}
}



