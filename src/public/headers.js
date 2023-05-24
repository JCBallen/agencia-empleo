
const headers = async () => {

    const response = await fetch(
        "http://localhost:3000/obtenerUsuario",
        {
            method: "GET",
        }
    );
    const result = await response.json();

    // console.log(result)
    document.getElementById('username').innerText = result;
}

headers();