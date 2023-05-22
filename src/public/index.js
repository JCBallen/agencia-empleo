const checkboxes = document.querySelectorAll('input[name="tipo"]');
const checkbox1 = document.getElementById('checkEmpresa');
const checkbox2 = document.getElementById('checkDesempleado');
const contenidoDiv = document.getElementById('lo-demás');

const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput1 = document.querySelector('#inputSelect1');
const hiddenInput2 = document.querySelector('#inputSelect2');

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


// Escoger Pais
document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelect.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle('active');
        opciones.classList.toggle('active');
        hiddenInput1.value = e.currentTarget.querySelector('.opcionPais').innerText;
        hiddenInput2.value = e.currentTarget.querySelector('.opcionPais').innerText;
    });
});

select.addEventListener('click', () => {
    select.classList.toggle('active');
    opciones.classList.toggle('active');
});

