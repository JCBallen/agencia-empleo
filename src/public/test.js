import url from "./url.js";

async function traerVacantes() {
    const response = await fetch(`${url}/consultarVacantes`, { method: "GET" });
    const result = await response.json();
    console.log(result);

}

traerVacantes();