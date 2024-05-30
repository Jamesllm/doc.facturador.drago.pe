---
sidebar_position: 2
---

# URL y Token
**URL del servicio**

```bash
http://localhost:8080/
```

## Crear token

Para crear el token, solo se necesita el número RUC de la empresa. El token se puede hacer a traves del aplicativo **postman**.

### Utilizando Postman

<div class="flex">
<div class="get">GET</div>
<div class="url"> 
```bash
URL/generar-token/(NUMERORUC)
```
</div>
</div>


Si el numero RUC ingresado es valido (tiene sus 11 digitos), el servidor le devolvera la siguiente respuesta.

```js
{
  "success": true,
  "token": "4ec42ef5ea0188a809c953540a2d2769"
}
```
Si el RUC ingresado no es valido se mostrara el siguiente mensaje:
```js
{
  "success": false,
  "error": "RUC no válido"
}
```
Si hubiera un error, el servidor le devolvera la siguiente respuesta:
```js
{
  "success": false,
  "error": "Error al crear el token"
}
```