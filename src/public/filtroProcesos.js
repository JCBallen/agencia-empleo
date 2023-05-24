const selectProcesos = document.querySelector('#select2');
const opcionesProcesos = document.querySelector('#opciones2');
const contenidoselectProcesos = document.querySelector('#select2 .contenido-select2');
const hiddenInputProcesos = document.querySelector('#inputSelect2');

// Filtrar Profesion
document.querySelectorAll('#opciones2 > .opcion2').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoselectProcesos.innerHTML = e.currentTarget.innerHTML;
        selectProcesos.classList.toggle('active');
        opcionesProcesos.classList.toggle('active');
        hiddenInputProcesos.value = e.currentTarget.querySelector('.opcionProceso').innerText;
    });
  });
  
  selectProcesos.addEventListener('click', () => {
    selectProcesos.classList.toggle('active');
    opcionesProcesos.classList.toggle('active');
  });