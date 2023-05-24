const selectCandidato = document.querySelector('#select2');
const opcionesCandidato = document.querySelector('#opciones2');
const contenidoSelectCandidato = document.querySelector('#select2 .contenido-select2');
const hiddenInputCandidato = document.querySelector('#inputSelect2');

const selectCargo = document.querySelector('#select4');
const opcionesCargo = document.querySelector('#opciones4');
const contenidoSelectCargo = document.querySelector('#select4 .contenido-select4');
const hiddenInputCargo = document.querySelector('#inputSelect4');

// Mostrar Candidatos
document.querySelectorAll('#opciones2 > .opcion2').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelectCandidato.innerHTML = e.currentTarget.innerHTML;
        selectCandidato.classList.toggle('active');
        opcionesCandidato.classList.toggle('active');
        hiddenInputCandidato.value = e.currentTarget.querySelector('.opcionProfesion').innerText;
    });
  });
  
  selectCandidato.addEventListener('click', () => {
    selectCandidato.classList.toggle('active');
    opcionesCandidato.classList.toggle('active');
  });
  
  // Mostrar Cargos
  document.querySelectorAll('#opciones4 > .opcion4').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelectCargo.innerHTML = e.currentTarget.innerHTML;
        selectCargo.classList.toggle('active');
        opcionesCargo.classList.toggle('active');
        hiddenInputCargo.value = e.currentTarget.querySelector('.opcionSalario').innerText;
    });
  });
  
  selectCargo.addEventListener('click', () => {
    selectCargo.classList.toggle('active');
    opcionesCargo.classList.toggle('active');
  });