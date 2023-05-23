import url from "./url.js";

let result;

async function traerVacantes() {
    const response = await fetch(`${url}/consultarVacantes`, { method: "GET" });
    result = await response.json();
    return result
}

const res = traerVacantes()

setTimeout(() => {

    console.log(res);

}, 1000);