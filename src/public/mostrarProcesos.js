/* import url from ""; */
//const url = require("url");
// let result;

async function traerVacantes() {
  const response = await fetch("http://localhost:3000/consultarProcesos", {
    method: "GET",
  });
  const result = await response.json();

  // return result
  setTimeout(() => {
    console.log(result.cargo);
    const dataContainer = document.getElementById("procesos");

    result.forEach(function (item) {
      console.log(item.cargo);
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      const div3 = document.createElement("div");
      const div4 = document.createElement("div");

      div1.classList.add("col-sm-6", "col-lg-4", "col-xl-6");
      div2.classList.add("post-item");
      div3.classList.add("recent-job-item");
      div4.classList.add("main-content");

      // Lista de Estados de texto
      const listaEstados = ["En Espera", "Activo", "Finalizado"];

      // Generar un índice aleatorio
      const indiceAleatorio = Math.floor(Math.random() * listaEstados.length);

      // Asignar el elemento aleatorio a una variable
      const elementoAleatorio = listaEstados[indiceAleatorio];

        let estadoAleatorio;

        if (elementoAleatorio === 'En Espera') {
            estadoAleatorio = '<h4 class="estado-espera">En espera</h4>';
          } else if (elementoAleatorio === 'Activo') {
            estadoAleatorio = '<h4 class="estado-activo">Activo</h4>';
          } else if (elementoAleatorio === 'Finalizado') {
            estadoAleatorio = '<h4 class="estado-finalizado">Finalizado</h4>';
          }

      div4.innerHTML = 
      "<h3 class='title'><a href='#'>"+
      item.cargo+
      "</a></h3>"+
      estadoAleatorio+
      "<p class='desc'><b>Empresa:   </b>"+
      item.nombreempresa+
      "<br><b>Aspirante:   </b>"+
      item.nombredesempleado+
      "<br><b>Fecha:   </b>"+
      item.fecharealizacion+
      "</p>";

      div1.appendChild(div2);
      div2.appendChild(div3);
      div3.appendChild(div4);

      dataContainer.appendChild(div1);
    });
  }, 1000);
}

traerVacantes();

// const res = traerVacantes()

// setTimeout(() => {
//     aqui va toda la logica
//     console.log(res);

// }, 1000);
