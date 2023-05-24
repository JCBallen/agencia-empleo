const selectPaisDesempleado = document.querySelector("#select1");
const opcionesPaisDesempleado = document.querySelector("#opciones1");
const contenidoSelectPaisDesempleado = document.querySelector(
  "#select1 .contenido-select1"
);
const hiddenInputPaisDesempleado = document.querySelector("#inputSelect1");

const selectCargoDesempleado = document.querySelector("#select2");
const opcionesCargoDesempleado = document.querySelector("#opciones2");
const contenidoSelectCargoDesempleado = document.querySelector(
  "#select2 .contenido-select2"
);
const hiddenInputCargoDesempleado = document.querySelector("#inputSelect2");

const selectSalarioDesempleado = document.querySelector("#select4");
const opcionesSalarioDesempleado = document.querySelector("#opciones4");
const contenidoSelectSalarioDesempleado = document.querySelector(
  "#select4 .contenido-select4"
);
const hiddenInputSalarioDesempleado = document.querySelector("#inputSelect4");

const selectPuntuacionDesempleado = document.querySelector("#select5");
const opcionesPuntuacionDesempleado = document.querySelector("#opciones5");
const contenidoSelectPuntuacionDesempleado = document.querySelector(
  "#select5 .contenido-select5"
);
const hiddenInputPuntuacionDesempleado =
  document.querySelector("#inputSelect5");

// Filtrar Pais Desempleado
document.querySelectorAll("#opciones1 > .opcion1").forEach((opcion) => {
  opcion.addEventListener("click", (e) => {
    e.preventDefault();
    contenidoSelectPaisDesempleado.innerHTML = e.currentTarget.innerHTML;
    selectPaisDesempleado.classList.toggle("active");
    opcionesPaisDesempleado.classList.toggle("active");
    hiddenInputPaisDesempleado.value =
      e.currentTarget.querySelector(".opcionPais1").innerText;
  });
});

selectPaisDesempleado.addEventListener("click", () => {
  selectPaisDesempleado.classList.toggle("active");
  opcionesPaisDesempleado.classList.toggle("active");
});

// Filtrar Cargo
document.querySelectorAll("#opciones2 > .opcion2").forEach((opcion) => {
  opcion.addEventListener("click", (e) => {
    e.preventDefault();
    contenidoSelectCargoDesempleado.innerHTML = e.currentTarget.innerHTML;
    selectCargoDesempleado.classList.toggle("active");
    opcionesCargoDesempleado.classList.toggle("active");
    hiddenInputCargoDesempleado.value =
      e.currentTarget.querySelector(".opcionCargo").innerText;
  });
});

selectCargoDesempleado.addEventListener("click", () => {
  selectCargoDesempleado.classList.toggle("active");
  opcionesCargoDesempleado.classList.toggle("active");
});

// Filtrar Salario
document.querySelectorAll("#opciones4 > .opcion4").forEach((opcion) => {
  opcion.addEventListener("click", (e) => {
    e.preventDefault();
    contenidoSelectSalarioDesempleado.innerHTML = e.currentTarget.innerHTML;
    selectSalarioDesempleado.classList.toggle("active");
    opcionesSalarioDesempleado.classList.toggle("active");
    hiddenInputSalarioDesempleado.value =
      e.currentTarget.querySelector(".opcionSalario").innerText;
  });
});

selectSalarioDesempleado.addEventListener("click", () => {
  selectSalarioDesempleado.classList.toggle("active");
  opcionesSalarioDesempleado.classList.toggle("active");
});

// Filtrar Puntuacion
document.querySelectorAll("#opciones5 > .opcion5").forEach((opcion) => {
  opcion.addEventListener("click", (e) => {
    e.preventDefault();
    contenidoSelectPuntuacionDesempleado.innerHTML = e.currentTarget.innerHTML;
    selectPuntuacionDesempleado.classList.toggle("active");
    opcionesPuntuacionDesempleado.classList.toggle("active");
    hiddenInputPuntuacionDesempleado.value =
      e.currentTarget.querySelector(".opcionPuntuacion").innerText;
  });
});

selectPuntuacionDesempleado.addEventListener("click", () => {
  selectPuntuacionDesempleado.classList.toggle("active");
  opcionesPuntuacionDesempleado.classList.toggle("active");
});

  /* const elementos = document.querySelectorAll("#lista li"); // Obtener los elementos de la lista

  // Ocultar todos los elementos
  for (const i = 0; i < elementos.length; i++) {
    elementos[i].style.display = "none";
  }

  // Mostrar solo los elementos que coinciden con el filtroCargo
  if (filtroCargo !== "todos") {
    const elementosFiltrados = document.querySelectorAll("#lista li." + filtroCargo);
    for (const j = 0; j < elementosFiltrados.length; j++) {
      elementosFiltrados[j].style.display = "block";
    }
  } else {
    // Si se selecciona "Todos", mostrar todos los elementos nuevamente
    for (const k = 0; k < elementos.length; k++) {
      elementos[k].style.display = "block";
    }
  } 
});*/
