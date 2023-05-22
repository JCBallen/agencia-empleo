const checkboxes = document.querySelectorAll('input[name="tipo"]');
const checkbox1 = document.getElementById('checkEmpresa');
const checkbox2 = document.getElementById('checkDesempleado');
const contenidoDiv = document.getElementById('lo-demás');

const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

const select1 = document.querySelector('#select1');
const opciones1 = document.querySelector('#opciones1');
const contenidoSelect1 = document.querySelector('#select1 .contenido-select1');
const hiddenInput1 = document.querySelector('#inputSelect1');

const select2 = document.querySelector('#select2');
const opciones2 = document.querySelector('#opciones2');
const contenidoSelect2 = document.querySelector('#select2 .contenido-select2');
const hiddenInput2 = document.querySelector('#inputSelect2');

const select3 = document.querySelector('#select3');
const opciones3 = document.querySelector('#opciones3');
const contenidoSelect3 = document.querySelector('#select3 .contenido-select3');
const hiddenInput3 = document.querySelector('#inputSelect3');

const select4 = document.querySelector('#select4');
const opciones4 = document.querySelector('#opciones4');
const contenidoSelect4 = document.querySelector('#select4 .contenido-select4');
const hiddenInput4 = document.querySelector('#inputSelect4');

const divEmpresa = document.getElementById("sigin-empresa");
const divDesempleado = document.getElementById("sigin-desempleado");
const formularioRegistro = document.getElementById("formularioRegistro");

//Que solo se seleccione un checkbox
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        uncheckOtherCheckboxes(this);
      }
    });
  });
  
  function uncheckOtherCheckboxes(checkedCheckbox) {
    checkboxes.forEach(function(checkbox) {
      if (checkbox !== checkedCheckbox) {
        checkbox.checked = false;
      }
    });
  }

var checkbox1Seleccionado = false;
var checkbox2Seleccionado = false;

//Aparezca un div según selección
checkbox1.addEventListener('change', function() {
  if (this.checked && checkbox2Seleccionado==false) {
    checkbox1Seleccionado = true;
    divEmpresa.style.display = "block";
    divDesempleado.style.display = "none";
    formularioRegistro.style.marginTop="390px";
    formularioRegistro.style.marginBottom="0";
  }else if (this.checked && checkbox2Seleccionado == true){
    checkbox1Seleccionado = true;
    divEmpresa.style.display = "block";
    divDesempleado.style.display = "none";
    formularioRegistro.style.marginBottom="0";
    formularioRegistro.style.marginTop="390px";
  }else {
    checkbox1Seleccionado = false;
    divEmpresa.style.display = "none";
    formularioRegistro.style.marginBottom="545px";
  }
  
});

checkbox2.addEventListener('change', function() {
  if (this.checked && checkbox1Seleccionado==false) {
    checkbox2Seleccionado = true;
    divDesempleado.style.display = "block";
    divEmpresa.style.display = "none";
    formularioRegistro.style.marginBottom="0";
  }else if (this.checked && checkbox1Seleccionado == true){
    checkbox2Seleccionado = true;
    divDesempleado.style.display = "block";
    divEmpresa.style.display = "none";
    formularioRegistro.style.marginBottom="0";
    formularioRegistro.style.marginTop="300px";
  }else {
    checkbox2Seleccionado = false;
    divDesempleado.style.display = "none";
    formularioRegistro.style.marginBottom="545px";
  }
});

// Escoger Pais Empresa
document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelect.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle('active');
        opciones.classList.toggle('active');
        hiddenInput.value = e.currentTarget.querySelector('.opcionPais').innerText;
    });
});

select.addEventListener('click', () => {
    select.classList.toggle('active');
    opciones.classList.toggle('active');
});

// Escoger Pais Desempleado
document.querySelectorAll('#opciones1 > .opcion1').forEach((opcion) => {
  opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect1.innerHTML = e.currentTarget.innerHTML;
      select1.classList.toggle('active');
      opciones1.classList.toggle('active');
      hiddenInput1.value = e.currentTarget.querySelector('.opcionPais1').innerText;
  });
});

select1.addEventListener('click', () => {
  select1.classList.toggle('active');
  opciones1.classList.toggle('active');
});

// Escoger Profesion
document.querySelectorAll('#opciones2 > .opcion2').forEach((opcion) => {
  opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect2.innerHTML = e.currentTarget.innerHTML;
      select2.classList.toggle('active');
      opciones2.classList.toggle('active');
      hiddenInput2.value = e.currentTarget.querySelector('.opcionProfesion').innerText;
  });
});

select2.addEventListener('click', () => {
  select2.classList.toggle('active');
  opciones2.classList.toggle('active');
});

// Escoger Sede
document.querySelectorAll('#opciones3 > .opcion3').forEach((opcion) => {
  opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect3.innerHTML = e.currentTarget.innerHTML;
      select3.classList.toggle('active');
      opciones3.classList.toggle('active');
      hiddenInput3.value = e.currentTarget.querySelector('.opcionProfesion').innerText;
  });
});

select3.addEventListener('click', () => {
  select3.classList.toggle('active');
  opciones3.classList.toggle('active');
});

// Escoger Salario
document.querySelectorAll('#opciones4 > .opcion4').forEach((opcion) => {
  opcion.addEventListener('click', (e) => {
      e.preventDefault();
      contenidoSelect4.innerHTML = e.currentTarget.innerHTML;
      select4.classList.toggle('active');
      opciones4.classList.toggle('active');
      hiddenInput4.value = e.currentTarget.querySelector('.opcionSalario').innerText;
  });
});

select4.addEventListener('click', () => {
  select4.classList.toggle('active');
  opciones4.classList.toggle('active');
});

