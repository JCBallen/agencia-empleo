async function traerVacantes() {
  const responseE = await fetch("http://localhost:3000/consultarEmpresas", {
    method: "GET",
  });
  const resultE = await responseE.json();

  const responseFullU = await fetch("http://localhost:3000/obtenerUsuario", {
    method: "GET",
  });
  const resultFullU = await responseFullU.json();
  const resultU = resultFullU.usuario;

  const responseV = await fetch("http://localhost:3000/consultarVacantes", {
    method: "GET",
  });
  const resultV = await responseV.json();

  // return result
  setTimeout(() => {
    const matchEmpresa = resultE.filter((e) => e.nombreempresa === resultU)[0]; // una vez

    const item = resultV.filter((v) => v.nombreempresa === resultU); // con foreach

    const dataContainer = document.getElementById("empresa");
    const infoContainer = document.getElementById("empresaInfo");

    // Datos básicos
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const div5 = document.createElement("div");
    const div6 = document.createElement("div");
    const div7 = document.createElement("div");

    div1.classList.add("employers-details-info");
    div2.classList.add("thumb");
    div3.classList.add("content");
    div4.classList.add("employers-counter");
    div5.classList.add("counter-item");
    div6.classList.add("counter-item");
    div7.classList.add("counter-item");
    div4.style.marginLeft = "120px";
    dataContainer.style.justifyContent = "center";

    numeroRandom1 = Math.ceil(Math.random() * 100);
    numeroRandom2 = Math.ceil(Math.random() * 50);
    numeroRandom3 = Math.ceil(Math.random() * 500);

    div2.innerHTML =
      '<img src="assets/img/companies/11.jpg" width="130" height="130" alt="Image-HasTech">';
    div3.innerHTML =
      '<h3 class="title" style="text-align:left;">' +
      matchEmpresa.nombreempresa +
      "</h3>" +
      '<ul class="info-list">' +
      '<li><i class="bx bxs-map"></i>' +
      matchEmpresa.pais +
      "</li>" +
      '<li><i class="bx bxs-buildings"></i>' +
      matchEmpresa.sede +
      "</li>" +
      "</ul>" +
      '<button type="button" class="btn-theme btn-white">Seguir</button>' +
      '<button type="button" class="btn-theme btn-white">Reseñar</button>';
    div5.innerHTML =
      '<h4 class="counter">' +
      numeroRandom1 +
      "</h4>" +
      '<h5 class="title">Empleos</h5>';
    div6.innerHTML =
      '<h4 class="counter">' +
      numeroRandom2 +
      "</h4>" +
      '<h5 class="title">Reseñas</h5>';
    div7.innerHTML =
      '<h4 class="counter">' +
      numeroRandom3 +
      "</h4>" +
      '<h5 class="title">Vistas</h5>';

    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
    div4.appendChild(div5);
    div4.appendChild(div6);
    div4.appendChild(div7);

    dataContainer.appendChild(div1);

    //Datos detallados

    const div8 = document.createElement("div");
    const div9 = document.createElement("div");

    div8.classList.add("widget-title");
    div9.classList.add("summery-info");

    const numeroPuntuacionE = matchEmpresa.puntuacionempresa;

    // Definir el texto a insertar
    const textoE = '<i class="bx bxs-star"></i>';

    // Generar el texto repetido según la puntuacion
    const textoERepetido = textoE.repeat(numeroPuntuacionE);

    const puntuacionE = (div9.innerHTML =
      "<td>(" +
      numeroPuntuacionE +
      ') <span class="rating">' +
      textoERepetido +
      "</span></td>");

    div8.innerHTML = '<h3 class="title">Información</h3>';
    div9.innerHTML =
      '<table class="table">' +
      "<tbody>" +
      "<tr>" +
      '<td class="table-name">NIT' +
      "</td>" +
      '<td class="dotted">:</td>' +
      "<td>" +
      matchEmpresa.nit +
      "</tr>" +
      "<tr>" +
      '<td class="table-name">Razon Social' +
      "</td>" +
      '<td class="dotted">:</td>' +
      "<td>" +
      matchEmpresa.razonsocial +
      "</tr>" +
      "<tr>" +
      '<td class="table-name">Representante Legal' +
      "</td>" +
      '<td class="dotted">:</td>' +
      "<td>" +
      matchEmpresa.representantelegal +
      "</tr>" +
      "<tr>" +
      '<td class="table-name">Telefono</td>' +
      '<td class="dotted">:</td>' +
      "<td>" +
      matchEmpresa.telefonoempresa +
      "</td>" +
      "</tr>" +
      "<tr>" +
      '<td class="table-name">Puntuación</td>' +
      '<td class="dotted">:</td>' +
      puntuacionE +
      "</tr>" +
      "<tr>" +
      '<td class="table-name">Email</td>' +
      '<td class="dotted">:</td>' +
      "<td>" +
      matchEmpresa.usuarioempresa +
      "</td>" +
      "</tr>" +
      "</tbody>" +
      "</table>";

    infoContainer.appendChild(div8);
    infoContainer.appendChild(div9);

    const vacantesContainer = document.getElementById("vacantesEmpresa");

    item.forEach(function (item) {
      const div11 = document.createElement("div");
      const div12 = document.createElement("div");
      const div13 = document.createElement("div");
      const div14 = document.createElement("div");
      const div15 = document.createElement("div");
      const div16 = document.createElement("div");
      const div17 = document.createElement("div");
      const div18 = document.createElement("div");

      div12.classList.add("col-12", "col-md-6", "col-lg-12", "col-xl-6");
      div13.classList.add("recent-job-item", "recent-job-style3-item");
      div14.classList.add("company-info");
      div15.classList.add("logo");
      div16.classList.add("content");
      div17.classList.add("main-content");
      div18.classList.add("recent-job-info");
      div11.classList.add("salary");

      const pregradoVacante = item.pregradorequerido
        ? '<h5 class="degree-yes">Pregrado Requerido</h5>'
        : '<h5 class="degree-no">Pregrado NO Requerido</h5>';

      div15.innerHTML =
        '<a href="empresa.html"><img src="assets/img/companies/8.jpg" width="75" height="75" alt="Image-HasTech"></a>';
      div16.innerHTML =
        '<h4 class="name"><a href="empresa.html">' +
        item.nombreempresa +
        "</a></h4>" +
        '<p class="address"><i class="bx bxs-map"></i>' +
        item.pais +
        "</p>";
      div17.innerHTML =
        '<h3 class="title"><a href="#">' +
        item.cargo +
        "</a></h3>" +
        pregradoVacante +
        '<p class="desc"><b>Fecha Inicio:</b>' +
        item.fechainicio +
        "<br> <b>Fecha Cierre:</b>" +
        item.fechacierre +
        "<br> <b>Rando Edad:</b>" +
        item.rangoedad +
        "</p>";
      div11.innerHTML =
        "<h4>" +
        item.salario +
        '</h4><br><a class="btn-theme btn-sm" href="">Postularse</a>';

      div12.appendChild(div13);
      div13.appendChild(div14);
      div13.appendChild(div17);
      div13.appendChild(div18);
      div14.appendChild(div15);
      div14.appendChild(div16);
      div18.appendChild(div11);

      vacantesContainer.appendChild(div12);
    });
  }, 1000);
}

traerVacantes();
