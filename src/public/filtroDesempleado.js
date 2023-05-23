const selectPaisDesempleado = document.querySelector('#select1');
const opcionesPaisDesempleado = document.querySelector('#opciones1');
const contenidoSelectPaisDesempleado = document.querySelector('#select1 .contenido-select1');
const hiddenInputPaisDesempleado = document.querySelector('#inputSelect1');

const selectProfesionDesempleado = document.querySelector('#select2');
const opcionesProfesionDesempleado = document.querySelector('#opciones2');
const contenidoSelectProfesionDesempleado = document.querySelector('#select2 .contenido-select2');
const hiddenInputProfesionDesempleado = document.querySelector('#inputSelect2');

const selectSalarioDesempleado = document.querySelector('#select4');
const opcionesSalarioDesempleado = document.querySelector('#opciones4');
const contenidoSelectSalarioDesempleado = document.querySelector('#select4 .contenido-select4');
const hiddenInputSalarioDesempleado = document.querySelector('#inputSelect4');

const selectPuntuacionDesempleado = document.querySelector('#select5');
const opcionesPuntuacionDesempleado = document.querySelector('#opciones5');
const contenidoSelectPuntuacionDesempleado = document.querySelector('#select5 .contenido-select5');
const hiddenInputPuntuacionDesempleado = document.querySelector('#inputSelect5');

// Filtrar Pais Desempleado
document.querySelectorAll('#opciones1 > .opcion1').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelectPaisDesempleado.innerHTML = e.currentTarget.innerHTML;
        selectPaisDesempleado.classList.toggle('active');
        opcionesPaisDesempleado.classList.toggle('active');
        hiddenInputPaisDesempleado.value = e.currentTarget.querySelector('.opcionPais1').innerText;
    });
  });
  
  selectPaisDesempleado.addEventListener('click', () => {
    selectPaisDesempleado.classList.toggle('active');
    opcionesPaisDesempleado.classList.toggle('active');
  });
  
  // Filtrar Profesion
  document.querySelectorAll('#opciones2 > .opcion2').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelectProfesionDesempleado.innerHTML = e.currentTarget.innerHTML;
        selectProfesionDesempleado.classList.toggle('active');
        opcionesProfesionDesempleado.classList.toggle('active');
        hiddenInputProfesionDesempleado.value = e.currentTarget.querySelector('.opcionProfesion').innerText;
    });
  });
  
  selectProfesionDesempleado.addEventListener('click', () => {
    selectProfesionDesempleado.classList.toggle('active');
    opcionesProfesionDesempleado.classList.toggle('active');
  });
  
  // Filtrar Salario
  document.querySelectorAll('#opciones4 > .opcion4').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelectSalarioDesempleado.innerHTML = e.currentTarget.innerHTML;
        selectSalarioDesempleado.classList.toggle('active');
        opcionesSalarioDesempleado.classList.toggle('active');
        hiddenInputSalarioDesempleado.value = e.currentTarget.querySelector('.opcionSalario').innerText;
    });
  });
  
  selectSalarioDesempleado.addEventListener('click', () => {
    selectSalarioDesempleado.classList.toggle('active');
    opcionesSalarioDesempleado.classList.toggle('active');
  });

  // Filtrar Puntuacion
  document.querySelectorAll('#opciones5 > .opcion5').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelectPuntuacionDesempleado.innerHTML = e.currentTarget.innerHTML;
        selectPuntuacionDesempleado.classList.toggle('active');
        opcionesPuntuacionDesempleado.classList.toggle('active');
        hiddenInputPuntuacionDesempleado.value = e.currentTarget.querySelector('.opcionPuntuacion').innerText;
    });
  });
  
  selectPuntuacionDesempleado.addEventListener('click', () => {
    selectPuntuacionDesempleado.classList.toggle('active');
    opcionesPuntuacionDesempleado.classList.toggle('active');
  });

