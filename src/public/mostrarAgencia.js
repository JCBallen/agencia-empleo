async function traerVacantes() {
  const response = await fetch("http://localhost:3000/consultarDesempleados", {
    method: "GET",
  });
  const resultD = await response.json();

  const responseV = await fetch("http://localhost:3000/consultarVacantes", {
    method: "GET",
  });
  const resultV = await responseV.json();

  // return resultD
  setTimeout(() => {
    const dataContainer1 = document.getElementById("desempleados");
    const dataContainer = document.getElementById("vacantes");
    const opcionesDesempleados = document.getElementById("opciones2");
    const opcionesVacantes = document.getElementById("opciones4");

    resultD.forEach(function (item) {
      console.log(item.linkhojavida);
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      const div3 = document.createElement("div");
      const div4 = document.createElement("div");
      const div5 = document.createElement("div");

      const a = document.createElement("a");

      const numeroPuntuacion = item.puntuaciondesempleado;

      // Definir el texto a insertar
      const texto = '<i class="bx bxs-star"></i>';

      // Generar el texto repetido según la puntuacion
      const textoRepetido = texto.repeat(numeroPuntuacion);

      const puntuacion = (div5.innerHTML =
        '<p class="desc" style="line-height: 1; margin: 0; color:#FFBB00;"><b>' +
        numeroPuntuacion +
        "</b>   " +
        textoRepetido +
        "</p>");

      div1.classList.add("col-sm-6", "col-lg-4", "col-xl-3");
      div2.classList.add("team-item");
      div3.classList.add("thumb");
      div4.classList.add("content");
      div5.classList.add("rating-box");

      a.classList.add("opcion2");

      div3.innerHTML =
        '<a href="#"><img src="https://i.ibb.co/R4SD5Zv/Perfil.jpg" width="160" height="160" alt="Image-HasTech"></a>';
      div4.innerHTML =
        '<h4 class="title"><a href="#">' +
        item.nombredesempleado +
        "</a></h4>" +
        '<h5 class="sub-title">' +
        item.profesion +
        "</h5>" +
        puntuacion +
        '<p class="desc"><i class="bx bxs-map" style="margin-bottom:0;"></i>     ' +
        item.pais +
        '<br><i class="bx bxs-phone"></i>     ' +
        item.telefonodesempleado +
        "</p>" +
        '<a class="btn-theme btn-white btn-sm" href="' +
        item.linkhojavida +
        '" target="_blank" style="margin-bottom: 18px;">Hoja de Vida</a>' +
        '<a class="btn-theme btn-white btn-sm" href="' +
        item.linkvideo +
        '" target="_blank">Video Presentación</a>';

      a.innerHTML =
        "<div class='contenido-opcion2'><p class='opcionCandidato'><b>" +
        item.nombredesempleado +
        "</b>   " +
        item.profesion +
        "</p></div>";

      div1.appendChild(div2);
      div2.appendChild(div3);
      div2.appendChild(div4);

      dataContainer1.appendChild(div1);
      opcionesDesempleados.appendChild(a);
    });

    const selectCandidato = document.querySelector("#select2");
    const opcionesCandidato = document.querySelector("#opciones2");
    const contenidoSelectCandidato = document.querySelector(
      "#select2 .contenido-select2"
    );
    const hiddenInputCandidato = document.querySelector("#inputSelect2");

    
    const hiddenInputCargo = document.querySelector("#inputSelect4");

    // Mostrar Candidatos
    document.querySelectorAll("#opciones2 > .opcion2").forEach((opcion) => {
      opcion.addEventListener("click", (e) => {
        e.preventDefault();
        contenidoSelectCandidato.innerHTML = e.currentTarget.innerHTML;
        selectCandidato.classList.toggle("active");
        opcionesCandidato.classList.toggle("active");
        hiddenInputCandidato.value =
          e.currentTarget.querySelector(".opcionProfesion").innerText;
      });
    });

    selectCandidato.addEventListener("click", () => {
      selectCandidato.classList.toggle("active");
      opcionesCandidato.classList.toggle("active");
    });

    resultV.forEach(function (item) {
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      const div3 = document.createElement("div");
      const div4 = document.createElement("div");
      const div5 = document.createElement("div");
      const div6 = document.createElement("div");
      const div7 = document.createElement("div");
      const div8 = document.createElement("div");

      const a = document.createElement("a");

      const cargo = item.cargo;
      const pregrado = item.pregradorequerido
        ? '<h5 class="degree-yes">Pregrado Requerido</h5>'
        : '<h5 class="degree-no">Pregrado NO Requerido</h5>';

      div1.classList.add("col-md-6", "col-lg-4");
      div2.classList.add("recent-job-item");
      div3.classList.add("company-info");
      div4.classList.add("logo");
      div5.classList.add("content");
      div6.classList.add("main-content");
      div7.classList.add("recent-job-info");
      div8.classList.add("salary");

      a.classList.add("opcion4");

      div4.innerHTML =
        '<a href="company-details.html"><img src="assets/img/companies/1.jpg" width="75" height="75 alt="Image-HasTech"></a>';
      div5.innerHTML =
        '<h4 class="name"><a href="/empresa">   ' +
        item.nombreempresa +
        '</a></h4><p class="address"><i class="bx bxs-map"></i>' +
        item.pais +
        "</p>";
      /* div6.innerHTML =
        ; */
      //div6.innerHTML = ;
      div6.innerHTML =
        //cargo.textContent +
        '<h3 class="title"><a href="#">' +
        cargo +
        "</a></h3>" +
        pregrado +
        "<br><b>Rando Edad:   </b>" +
        item.rangoedad +
        '<p class="desc"><b>Fecha Inicio:   </b>' +
        item.fechainicio +
        "<br> <b>Fecha Cierre:   </b>" +
        item.fechacierre +
        "</p>";
      div8.innerHTML =
        "<h4>" +
        item.salario +
        '</h4><br><a class="btn-theme btn-sm" href="">Postularse</a>';
      a.innerHTML =
        "<div class='contenido-opcion4'><p class='opcionCargo'><b>" +
        item.cargo +
        "</b>   " +
        item.nombreempresa +
        "</p></div>";

      div1.appendChild(div2);
      div2.appendChild(div3);
      div2.appendChild(div6);
      div2.appendChild(div7);
      div3.appendChild(div4);
      div3.appendChild(div5);
      div7.appendChild(div8);

      dataContainer.appendChild(div1);
      opcionesVacantes.appendChild(a);
    });
    
    const selectCargo = document.querySelector("#select4");
    const opcionesCargo = document.querySelector("#opciones4");
    const contenidoSelectCargo = document.querySelector(
      "#select4 .contenido-select4"
    );

    // Mostrar Cargos
    document.querySelectorAll("#opciones4 > .opcion4").forEach((opcion) => {
        opcion.addEventListener("click", (e) => {
          e.preventDefault();
          contenidoSelectCargo.innerHTML = e.currentTarget.innerHTML;
          selectCargo.classList.toggle("active");
          opcionesCargo.classList.toggle("active");
          hiddenInputCargo.value =
            e.currentTarget.querySelector(".opcionSalario").innerText;
        });
      });
  
      selectCargo.addEventListener("click", () => {
        selectCargo.classList.toggle("active");
        opcionesCargo.classList.toggle("active");
      });


  }, 1000);
}

traerVacantes();
