async function traerVacantes() {
  const response = await fetch("http://localhost:3000/consultarDesempleados", {
    method: "GET",
  });
  const result = await response.json();

  // return result
  setTimeout(() => {
    const dataContainer = document.getElementById("desempleados");

    result.forEach(function (item) {
      console.log(item.cargo);
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

      const puntuacion = div5.innerHTML =
        '<p class="desc" style="line-height: 1; margin-right: 6px;">' +
        numeroPuntuacion +
        "</p>" +
        textoRepetido;

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
        puntuacion+
        '<p class="desc"><i class="bx bxs-map"></i>' +
        item.pais +
        '<br><i class="bx bxs-phone"></i>' +
        item.telefonodesempleado +
        "</p>" +
        '<a class="btn-theme btn-white btn-sm" href="' +
        item.linkHojaVida +
        '" style="margin-bottom: 18px;">Hoja de Vida</a>' +
        '<a class="btn-theme btn-white btn-sm" href="' +
        item.linkVideo +
        '">Video Presentación</a>';

      div1.appendChild(div2);
      div2.appendChild(div3);
      div2.appendChild(div4);
      div4.appendChild(div5);

      dataContainer.appendChild(div1);
    });
  }, 1000);
}

traerVacantes();
