async function traerVacantes() {
  const response = await fetch("http://localhost:3000/consultarEmpresas", {
    method: "GET",
  });
  const result = await response.json();

  // return result
  setTimeout(() => {
    console.log(result.sede)
    /* const dataContainer = document.getElementById("empresa");

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

    numeroRandom1 = Math.ceil(Math.random() * 100);
    numeroRandom2 = Math.ceil(Math.random() * 50);
    numeroRandom3 = Math.ceil(Math.random() * 500);

    div2.innerHTML =
      '<img src="assets/img/companies/11.jpg" width="130" height="130" alt="Image-HasTech">';
    div3.innerHTML =
      '<h3 class="title">' +
      result.nombreempresa +
      "</h3>" +
      '<ul class="info-list">' +
      '<li><i class="bx bxs-map"></i>' +
      result.pais +
      "</li>" +
      '<li><i class="bx bxs-buildings"></i>' +
      result.sede +
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

    result.forEach(function (item) {
      console.log(item.cargo);
    });*/
  }, 1000);
}

traerVacantes();
