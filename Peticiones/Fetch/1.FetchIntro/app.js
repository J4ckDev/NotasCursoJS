const btnObtenerUsuarios = document.getElementById("btnObtenerUsuarios");
const tablaUsuarios = document.getElementById("tablaUsuarios");
const formularioRegistro = document.getElementById("formularioRegistro");

let noSeTienenLosDatos = true;

function crearTitulosTabla(titulosTabla) {
    const filaTitulo = document.createElement("tr");
    const celdaNombre = document.createElement("th");
    const celdaEmail = document.createElement("th");
    const celdaTelefono = document.createElement("th");
    celdaNombre.textContent = "Nombres";
    celdaEmail.textContent = "Correo";
    celdaTelefono.textContent = "Telefono";
    filaTitulo.appendChild(celdaNombre);
    filaTitulo.appendChild(celdaEmail);
    filaTitulo.appendChild(celdaTelefono);
    titulosTabla.appendChild(filaTitulo);
}

function crearColumnasEnFilaTabla(cuerpoTabla, usuario) {
    let fila = document.createElement("tr");
    let columnaNombre = document.createElement("td");
    let columnaEmail = document.createElement("td");
    let columnaTelefono = document.createElement("td");
    columnaNombre.textContent = usuario.name;
    columnaEmail.textContent = usuario.email;
    columnaTelefono.textContent = usuario.phone;
    fila.appendChild(columnaNombre);
    fila.appendChild(columnaEmail);
    fila.appendChild(columnaTelefono);
    cuerpoTabla.appendChild(fila);
}

// const navegadorSoportaFetch = window.fetch != undefined
// if (navegadorSoportaFetch) {
//     console.log('fetch ok')
// } else {
//     console.error('fetch not found')
// }

const urlUsers = 'https://jsonplaceholder.typicode.com/users'

btnObtenerUsuarios.addEventListener("click", () => {
    if (noSeTienenLosDatos) {
        fetch(urlUsers)
            .then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
            .then(response => response.json())
            .then(usuarios => {
                tablaUsuarios.style.margin = "16px";
                crearTitulosTabla(tablaUsuarios.children[0]);
                const cuerpoTabla = tablaUsuarios.children[1];
                usuarios.forEach((usuario) => {
                    crearColumnasEnFilaTabla(cuerpoTabla, usuario);
                });
                noSeTienenLosDatos = false;
            })
            .catch(error => console.error(`${error.status} Not Found`))
    }
});

const enviarDatos = (datosUsuario) => {

    const datosUsuarioObj = {}
    datosUsuario.forEach((valor, nombreCampo) => {
        datosUsuarioObj[nombreCampo] = valor;
    });

    fetch(urlUsers, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(datosUsuarioObj)
    })
    .then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))
    .then(response => response.json())
    .then(response => {
        console.log('User inserted')
        console.table(response)
    })
    .catch(error => console.error(`${error.status} User not inserted`))

};

formularioRegistro.addEventListener("submit", (event) => {
    event.preventDefault();
    const datosFormulario = new FormData(formularioRegistro);
    enviarDatos(datosFormulario);
});
