# Prueba de Ingreso Front Developer Aeroméxico

## Autor `Carlos Bautista`
   
## Getting Started with Create React App

Aplicación creada con CRA [Create React App](https://github.com/facebook/create-react-app).
Aplicación desplegada en Netlify: [https://amhpchallenge-carlosbautista.netlify.app/](https://amhpchallenge-carlosbautista.netlify.app/)
(al abrir en enlace aparecera el mapa del merodeador simulando un `loader`, esto nos indicará que aun no se levanta el Json Server o que hay un error o lentitud en la conexión.)

## Available Scripts

### `npm install`

Nos ubicamos en la carpeta del proyecto e instalamos las dependencias

### `json-server -w hp-characters.json -p 4000`

Levantar Json Server para fake api, posicionarnos en la carpeta `data/` y correr el comando`json-server -w hp-characters.json -p 4000`

### `npm start`

Inicia la aplicación en modo Dev

### `npm test`

Corremos Test unitarios

### `¿Qué es lo que más te gustó de tu desarrollo?`

- Tenia tiempo sin usar redux con el middleware thunk, fue buena practica para recordar conceptos.
- El despliegue a netlify fue relativamente sencillos.
- El uso de Json Server que facilita el desarrollo y pruebas.

### `Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?`

- Agregar animaciones, transiciones y efectos ya que estos dotan de accesibilidad y una mejor experiencia de usuario.
- Complementar mas pruebas unitarias y E2E con cypress.
- Implementar alguna opcion cloud para subir la fotografía, ya que al ser formato jpg no es soportado por Json Server, lo solucione con el hook useRef y creando una url temporal.
- Utilizar imagenes de fondo mas grandes o adaptadas para mas tipos de pantalla, ya que solo hay un tamaño.

### `Pain point o bug`

-  Me costo trabajo llegar a la solución del useRef para almacenar temporalmente la fotografía al agregar personaje, pero se me hizo opcion mas viable ya que en servicios cloud de terceros tienen cierto tiempo de uso y limitaciones.

