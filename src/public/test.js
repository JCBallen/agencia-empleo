
async function traerVacantes() {
    const response = await fetch(`http://localhost:3000/consultarVacantes`, { method: "GET" });
    const result = await response.json();
    console.log(result[13]);

}

traerVacantes();