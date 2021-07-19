# DOM - Document Object Model

Es el modelo de objetos del documento HTML que representa los nodos y objetos estructurados que tienen propiedades y métodos. Mediante el uso de Javascript, el DOM puede ser accedido y modificado.

Por ejemplo, si se tiene la siguiente estructura HTML:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM</title>
</head>
<body>
  <h1>DOM Document Object Model</h1>
</body>
</html>
```
El DOM será representado por un árbol de nodos de la siguiente manera:

- Document
    - HTML
        - Head
            - Meta
                - Charset
            - Title
                - DOM
        - Lang
        - Body
            - H1
                - Text
                    - DOM Document Object Model

## Nodos
Cada parte del árbol del documento es un *nodo*. Existen [múltiples tipos de nodos](https://developer.mozilla.org/es/docs/Web/API/Node/nodeType), pero los más conmúnmente utilizados son:

- Element node: 1 - Cualquier etiqueta HTML.
- Text node: 3 - El contenido de la etiqueta.
- Comment node: 8 - Cualquier comentario HTML.