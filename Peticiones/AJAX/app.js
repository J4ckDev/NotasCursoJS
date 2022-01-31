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

btnObtenerUsuarios.addEventListener("click", () => {
  if (noSeTienenLosDatos) {
    let xhr;
    const navegadorSoportaAjax = window.XMLHttpRequest;
    xhr = navegadorSoportaAjax
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    // Al ser asíncrono, se define este evento para especificar que se debe realizar después de recibir los datos
    xhr.addEventListener("load", (data) => {
      if (xhr.status === 200) {
        const usuarios = JSON.parse(data.target.response);
        tablaUsuarios.style.margin = "16px";
        crearTitulosTabla(tablaUsuarios.children[0]);
        const cuerpoTabla = tablaUsuarios.children[1];
        usuarios.forEach((usuario) => {
          crearColumnasEnFilaTabla(cuerpoTabla, usuario);
        });
        noSeTienenLosDatos = false;
      }
    });

    xhr.send();
  }
});

const enviarDatos = (datosUsuario) => {
  let xhr;
  const navegadorSoportaAjax = window.XMLHttpRequest;
  xhr = navegadorSoportaAjax
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
    
    const datosUsuarioObj = {}
    datosUsuario.forEach((valor, nombreCampo) => {
      datosUsuarioObj[nombreCampo] = valor;
    });
    
  xhr.open("POST", "https://jsonplaceholder.typicode.com/users");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.addEventListener("load", (data) => {
    if (xhr.status === 201) {
      const respuesta = data.target.response;
      alert(`Usuario creado correctamente con el id ${JSON.parse(respuesta).id}`);
      console.log(respuesta);
    }
  });
  xhr.send(JSON.stringify(datosUsuarioObj));
  
};

formularioRegistro.addEventListener("submit", (event) => {
  event.preventDefault();
  const datosFormulario = new FormData(formularioRegistro);
  enviarDatos(datosFormulario);
});
