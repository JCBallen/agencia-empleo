
const headers = async () => {

    const response = await fetch(
        "https://agencia-empleo.azurewebsites.net/obtenerUsuario",
        {
            method: "GET",
        }
    );
    let result = await response.json();
    result = result.usuario;

    // console.log(result)
    document.getElementById('username').innerText = result;
}

// const headersEmpresa = async () => {

//     const response = await fetch(
//         "https://agencia-empleo.azurewebsites.net/obtenerUsuario",
//         {
//             method: "GET",
//         }
//     );
//     let result = await response.json();
//     result = result.tipo;

//     const plantilla = '<%- include("components/navbarAgencia"); -%>'
//     const contenido = ejs.render(plantilla, { tipo: result });


//     document.getElementById('insert-header').innerHTML = contenido;
// }

headers();
// headersEmpresa();