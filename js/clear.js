  const drop_function = function () {
  const btns = document.querySelectorAll('.link_drop_function');


  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter');
      const currentValue = +inp.value;
      let newValue;

      if (direction === 'clear') {
        newValue = currentValue - 100;
      }
      inp.value = newValue;
    })
  })

}

drop_block_row();
