const checkboxesVacante = document.querySelectorAll('input[name="tipo"]');
const checkboxVacante1 = document.getElementById('checkSi');
const checkboxVacante2 = document.getElementById('checkNo');

const selectCargo = document.querySelector('#select2');
const opcionesCargo = document.querySelector('#opciones2');
const contenidoSelectCargo = document.querySelector('#select2 .contenido-select2');
const hiddenInputCargo = document.querySelector('#inputSelect2');

const selectEdad = document.querySelector('#select3');
const opcionesEdad = document.querySelector('#opciones3');
const contenidoSelectEdad = document.querySelector('#select3 .contenido-select3');
const hiddenInputEdad = document.querySelector('#inputSelect3');

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

  document.querySelectorAll('#opciones2 > .opcion2').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelectCargo.innerHTML = e.currentTarget.innerHTML;
        selectCargo.classList.toggle('active');
        opcionesCargo.classList.toggle('active');
        hiddenInputCargo.value = e.currentTarget.querySelector('.opcionCargo').innerText;
    });
  });
  
  selectCargo.addEventListener('click', () => {
    selectCargo.classList.toggle('active');
    opcionesCargo.classList.toggle('active');
  });

  document.querySelectorAll('#opciones3 > .opcion3').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelectEdad.innerHTML = e.currentTarget.innerHTML;
        selectEdad.classList.toggle('active');
        opcionesEdad.classList.toggle('active');
        hiddenInputEdad.value = e.currentTarget.querySelector('.opcionEdad').innerText;
    });
  });
  
  selectEdad.addEventListener('click', () => {
    selectEdad.classList.toggle('active');
    opcionesEdad.classList.toggle('active');
  });

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


