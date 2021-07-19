# Eventos

Un evento es cualquier cosa que sucede en el documento por la interacción del usuario, por cambios de estado, etc. Existen múltiples [tipos de eventos](https://developer.mozilla.org/en-US/docs/Web/Events) pero algunos de los más usados son:

- Cuando se lee el contenido
- Cuando el contenido se ha cargado
- Cuando el usuario mueve el ratón
- Cuando el usuario presiona una tecla
- Cuando el usuario hace un click

Una recomendación importante es no escribir eventos directamente en el HTML como `<p id="paragraph" onclick="saludo()">Soy un párrafo clickeable</p>`, ya que esto puede generar problemas de mantenimiento. La alternativa correcta y que desacopla la complejidad, es directamente escribir en un archivo Javascript la línea de código `Element.addEventListener('event',callback)`. Siguiendo el ejemplo de dar click a un párrafo para mostrar un saludo, el código sería:

```javascript
const paragraph = document.getElementById("paragraph");
const saludo = () => {
  console.log("Bienvenido");
};

paragraph.addEventListener("click", saludo);
```
## Objeto Event
El objeto event es el encargado de recibir toda la información de un evento. Para acceder a el se usa debe agregar un parámetro al callback de la función `addEventListener()` de la siguiente forma:

```javascript
addEventListener("click", (event) => {
  console.log(event);
});

En consola se mostraría toda la información de ese evento y se puede acceder a diversa información como la posición donde se hizo el click, a que elemento se hizo el click, los atributos del elemento objetivo, etc.