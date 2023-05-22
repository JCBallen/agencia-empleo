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

const select5 = document.querySelector('#select5');
const opciones5 = document.querySelector('#opciones5');
const contenidoSelect5 = document.querySelector('#select5 .contenido-select5');
const hiddenInput5 = document.querySelector('#inputSelect5');

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

  // Escoger Puntuacion
  document.querySelectorAll('#opciones5 > .opcion5').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelect5.innerHTML = e.currentTarget.innerHTML;
        select5.classList.toggle('active');
        opciones5.classList.toggle('active');
        hiddenInput5.value = e.currentTarget.querySelector('.opcionPuntuacion').innerText;
    });
  });
  
  select5.addEventListener('click', () => {
    select5.classList.toggle('active');
    opciones5.classList.toggle('active');
  });

let candidatos = {
    data: [
        nombre="Marin Kitagawa",
        profesion="Web Designer"
    ],
};