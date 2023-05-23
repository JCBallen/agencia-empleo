/* import url from ""; */
//const url = require("url");
// let result;

async function traerVacantes() {
  const response = await fetch("http://localhost:3000/consultarVacantes", {
    method: "GET",
  });
  const result = await response.json();

  // return result

  const dataContainer = document.getElementById("vacantes");
  console.log(dataContainer);

  result.forEach(function (item) {
    console.log(item);
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const div5 = document.createElement("div");
    const div6 = document.createElement("div");
    const div7 = document.createElement("div");
    const div8 = document.createElement("div");

    div1.classList.add("col-md-6", "col-lg-4");
    div2.classList.add("recent-job-item");
    div3.classList.add("company-info");
    div4.classList.add("logo");
    div5.classList.add("content");
    div6.classList.add("main-content");
    div7.classList.add("recent-job-info");
    div8.classList.add("salary");

    div4.innerHTML =
      '<a href="company-details.html"><img src="assets/img/companies/1.jpg" width="75" height="75 alt="Image-HasTech"></a>';
    div5.innerHTML =
      '<h4 class="name"><a href="company-details.html">' +
      item.nit +
      '</a></h4><p class="address"><i class="bx bxs-map"></i>' +
      item.idubicacion +
      "</p>";
    div6.innerHTML =
      '<h3 class="title"><a href="job-details.html">' +
      item.cargo +
      "</a></h3>";
    //div6.innerHTML = item.pregradorequerido?'<h5 class="degree-yes">Pregrado Requerido</h5>':'<h5 class="degree-no">Pregrado NO Requerido</h5>';
    div6.innerHTML =
      '<p class="desc">Fecha Inicio:' +
      item.fechainicio +
      "<br> Fecha Cierre:" +
      item.fechacierre +
      "<br> Rando Edad:" +
      item.rango +
      "</p>";
    div8.innerHTML =
      "<h4>" +
      item.salario +
      '</h4><br><a class="btn-theme btn-sm" href="">Postularse</a>';

    div1.appendChild(div2);
    div2.appendChild(div3);
    div2.appendChild(div6);
    div2.appendChild(div7);
    div3.appendChild(div4);
    div3.appendChild(div5);
    div7.appendChild(div8);

    dataContainer.appendChild(div1);
  });
}

traerVacantes();

// const res = traerVacantes()

// setTimeout(() => {
//     aqui va toda la logica
//     console.log(res);

// }, 1000);
