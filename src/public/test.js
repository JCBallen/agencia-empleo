import url from "./url.js";

// let result;

async function traerVacantes() {
    const response = await fetch(`${url}/consultarVacantes`, { method: "GET" });
    const result = await response.json();
    console.log(result);
}

traerVacantes();

// const res = traerVacantes()

// setTimeout(() => {
//     aqui va toda la logica
//     console.log(res);

// }, 1000);