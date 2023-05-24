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
    
    resultD.forEach(function (item) {
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      const div3 = document.createElement("div");
      const div4 = document.createElement("div");
      const div5 = document.createElement("div");

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

      div1.appendChild(div2);
      div2.appendChild(div3);
      div2.appendChild(div4);

      dataContainer1.appendChild(div1);
    });
    resultV.forEach(function (item) {
        console.log(item.cargo);
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        const div4 = document.createElement("div");
        const div5 = document.createElement("div");
        const div6 = document.createElement("div");
        const div7 = document.createElement("div");
        const div8 = document.createElement("div");
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
  
        div1.appendChild(div2);
        div2.appendChild(div3);
        div2.appendChild(div6);
        div2.appendChild(div7);
        div3.appendChild(div4);
        div3.appendChild(div5);
        div7.appendChild(div8);
  
        dataContainer.appendChild(div1);
      });
  }, 1000);
}

traerVacantes();
