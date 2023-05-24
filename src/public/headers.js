
const headers = async () => {

    const response = await fetch(
        "http://localhost:3000/obtenerUsuario",
        {
            method: "GET",
        }
    );
    let result = await response.json();
    result = result.usuario;

    // console.log(result)
    document.getElementById('username').innerText = result;
}

headers();