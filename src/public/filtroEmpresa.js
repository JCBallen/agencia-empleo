const selectPaisEmpresa = document.querySelector('#select1');
const opcionesPaisEmpresa = document.querySelector('#opciones1');
const contenidoSelectPaisEmpresa = document.querySelector('#select1 .contenido-select1');
const hiddenInputPaisEmpresa = document.querySelector('#inputSelect1');

const selectProfesionEmpresa = document.querySelector('#select2');
const opcionesProfesionEmpresa = document.querySelector('#opciones2');
const contenidoSelectProfesionEmpresa = document.querySelector('#select2 .contenido-select2');
const hiddenInputProfesionEmpresa = document.querySelector('#inputSelect2');

const selectSalarioEmpresa = document.querySelector('#select4');
const opcionesSalarioEmpresa = document.querySelector('#opciones4');
const contenidoSelectSalarioEmpresa = document.querySelector('#select4 .contenido-select4');
const hiddenInputSalarioEmpresa = document.querySelector('#inputSelect4');

const selectPuntuacionEmpresa = document.querySelector('#select5');
const opcionesPuntuacionEmpresa = document.querySelector('#opciones5');
const contenidoSelectPuntuacionEmpresa = document.querySelector('#select5 .contenido-select5');
const hiddenInputPuntuacionEmpresa = document.querySelector('#inputSelect5');

// Filtrar Pais Desempleado
document.querySelectorAll('#opciones1 > .opcion1').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelectPaisEmpresa.innerHTML = e.currentTarget.innerHTML;
        selectPaisEmpresa.classList.toggle('active');
        opcionesPaisEmpresa.classList.toggle('active');
        hiddenInputPaisEmpresa.value = e.currentTarget.querySelector('.opcionPais1').innerText;
    });
  });
  
  selectPaisEmpresa.addEventListener('click', () => {
    selectPaisEmpresa.classList.toggle('active');
    opcionesPaisEmpresa.classList.toggle('active');
  });
  
  // Filtrar Profesion
  document.querySelectorAll('#opciones2 > .opcion2').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelectProfesionEmpresa.innerHTML = e.currentTarget.innerHTML;
        selectProfesionEmpresa.classList.toggle('active');
        opcionesProfesionEmpresa.classList.toggle('active');
        hiddenInputProfesionEmpresa.value = e.currentTarget.querySelector('.opcionProfesion').innerText;
    });
  });
  
  selectProfesionEmpresa.addEventListener('click', () => {
    selectProfesionEmpresa.classList.toggle('active');
    opcionesProfesionEmpresa.classList.toggle('active');
  });
  
  // Filtrar Salario
  document.querySelectorAll('#opciones4 > .opcion4').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelectSalarioEmpresa.innerHTML = e.currentTarget.innerHTML;
        selectSalarioEmpresa.classList.toggle('active');
        opcionesSalarioEmpresa.classList.toggle('active');
        hiddenInputSalarioEmpresa.value = e.currentTarget.querySelector('.opcionSalario').innerText;
    });
  });
  
  select4.addEventListener('click', () => {
    selectSalarioEmpresa.classList.toggle('active');
    opcionesSalarioEmpresa.classList.toggle('active');
  });

  // Filtrar Puntuacion
  document.querySelectorAll('#opciones5 > .opcion5').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelectPuntuacionEmpresa.innerHTML = e.currentTarget.innerHTML;
        selectPuntuacionEmpresa.classList.toggle('active');
        opcionesPuntuacionEmpresa.classList.toggle('active');
        hiddenInputPuntuacionEmpresa.value = e.currentTarget.querySelector('.opcionPuntuacion').innerText;
    });
  });
  
  selectPuntuacionEmpresa.addEventListener('click', () => {
    selectPuntuacionEmpresa.classList.toggle('active');
    opcionesPuntuacionEmpresa.classList.toggle('active');
  });

  const divMarin = document.getElementsById('marin');
  const divDeku = document.getElementsById('deku');
  const divBaji = document.getElementsById('baji');
  const divRuka = document.getElementsById('ruka');

  const subTitleCargo = document.getElementsByClassName('.sub-title');
  console.log(subTitleCargo);

var filterDropdown = document.getElementsByClassName('.input-box-select2');
var items = document.getElementsByClassName('.col-sm-6 .col-lg-4 .col-xl-3');

filterDropdown.addEventListener('change', function() {
  var selectedCategory = filterDropdown.value;
  
  for (var i = 0; i < items.length; i++) {
    if (selectedCategory === 'all' || items[i].classList.contains(selectedCategory)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
});