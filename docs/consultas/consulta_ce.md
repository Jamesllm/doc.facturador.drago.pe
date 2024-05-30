---
sidebar_position: 3
---

# Consulta CE

Para efectuar consultas mediante el número de **CE**, solo se requiere el número **CE** de la persona en cuestión. Luego, puede conectarse utilizando el siguiente endpoint para llevar a cabo la consulta.

<div class="flex">
<div class="post">POST</div>

<div class="url"> 

```bash
URL/ce/002231956?token=TOKEN
```
</div>
</div>

Por favor, asegúrese de reemplazar **TOKEN** con el token válido para autenticar su solicitud.

## Respuesta obtenida

Si la consulta fue satisfactoria, obtendra el siguiente resultado

Resultado encontrado en Sunat
```js
{
  "success": true,
  "data": {
    "ruc": "15603464840",
    "nroDoc": "002231956",
    "nombre": "CARBER ENRIQUE",
    "apellido_paterno": "BANDRES",
    "apellido_materno": "BENCOMO",
    "direccion": "-"
  }
}
```

Caso contrario obtendra el siguiente:

```js
{
  "succes": false,
  "data": [],
  "error": "Mensaje de error"
}
```

## Integraciones en diversos lenguajes

Esta sección proporciona ejemplos de cómo integrar la consulta en diferentes lenguajes de programación.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Nuxt 3" label="Nuxt 3" default>
    Utilizando `$fetch` en **Nuxt 3**
    
```jsx title="app.vue"
<script setup lang="ts">
  const runtimeConfig = useRuntimeConfig();
  const dataRuc = ref([]);

  const fetchConnect = async () => {
    try {
      const responseRuc = await $fetch("/ce/002231956?token=TOKEN", {
        method: "POST",
        baseURL: "URL",
      });
      dataRuc.value = responseRuc;
    } catch (error) {
      console.error("Error al obtener la data: ", error);
    }
  };
  fetchConnect();
</script>

<template>
  <div v-for="(data, index) in dataRuc" :key="index">
    <p>RUC: {{data.data.ruc}}</p>
    <p>RAZON SOCIAL: {{data.data.razon_social}}</p>
    <p>NOMBRE COMERCIAL: {{data.data.nombre_comercial}}</p>
  </div>
</template>
```
  </TabItem>
  <TabItem value="Python" label="Python">
    Usando la biblioteca `requests`

```py title="Instalar la biblioteca"
pip install requests
```

```py title="index.py"
import requests

url = "URL/ce/002231956?token=TOKEN"
headers = {"Content-Type": "application/json"}
response = requests.post(url, headers=headers)

if response.status_code == 200:
    result = response.json()

    ruc = result["data"]["ruc"]
    razon_social = result["data"]["razon_social"]
    nombre_comercial = result["data"]["nombre_comercial"]

    print("RUC:", ruc)
    print("Razon Social:", razon_social)
    print("Nombre Comercial:", nombre_comercial)
else:
    print("Error en la solicitud. Código de estado:", response.status_code)
```

  </TabItem>
  <TabItem value="Bash" label="Bash">

```js
curl -X POST -H "Content-Type: application/json" URL/ce/002231956?token=TOKEN
```
  </TabItem>
  <TabItem value="JS" label="JS">
    ```jsx title="index.js"
    const url = "URL/ce/002231956?token=TOKEN";

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Error en la solicitud. Código de estado: ${response.status}`
      );
    }
    return response.json();
  })
  .then((result) => {
    const ruc = result.data.ruc;
    const razonSocial = result.data.razon_social;
    const nombreComercial = result.data.nombre_comercial;

    console.log("RUC:", ruc);
    console.log("Razon Social:", razonSocial);
    console.log("Nombre Comercial:", nombreComercial);
  })
  .catch((error) => {
    console.error(error.message);
  });
    ```
  </TabItem>
</Tabs>

## ¿Como conseguir el token?
Para conseguir el token requerido en las consultas a los **endpoints** disponibles, debe acceder a la seccion <a href="/docs/token">**Obtener token**</a> para tener una informacion más detallada al respecto.


