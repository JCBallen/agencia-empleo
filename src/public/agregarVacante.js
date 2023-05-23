const checkboxesVacante = document.querySelectorAll('input[name="pregrado"]');
const checkboxVacante1 = document.getElementById('checkSi');
const checkboxVacante2 = document.getElementById('checkNo');

const selectVacante = document.querySelector('#select4');
const opcionesVacante = document.querySelector('#opciones4');
const contenidoSelectVacante = document.querySelector('#select4 .contenido-select4');
const hiddenInputVacante = document.querySelector('#inputSelect4');

//Solo seleccionar un checkbox
checkboxesVacante.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        uncheckOtherCheckboxes(this);
      }
    });
  });
  
  function uncheckOtherCheckboxes(checkedCheckbox) {
    checkboxesVacante.forEach(function(checkbox) {
      if (checkbox !== checkedCheckbox) {
        checkbox.checked = false;
      }
    });
  }

document.querySelectorAll('#opciones4 > .opcion4').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelectVacante.innerHTML = e.currentTarget.innerHTML;
        selectVacante.classList.toggle('active');
        opcionesVacante.classList.toggle('active');
        hiddenInputVacante.value = e.currentTarget.querySelector('.opcionSalario').innerText;
    });
  });
  
  selectVacante.addEventListener('click', () => {
    selectVacante.classList.toggle('active');
    opcionesVacante.classList.toggle('active');
  });


