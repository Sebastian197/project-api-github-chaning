# API Github

Obtener los datos de un usuarios introducidos por párametro de la API de Github

## Instrucciones de uso

Seguir las siguientes intrucciones.

### Instalación

```
npm install pj-api-github-chaning-js
```

### Uso

```
const api = require('pj-api-github-chaning-js);

api.getUserData('sebastian197')
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
```
