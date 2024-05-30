---
sidebar_position: 1
---

# Consulta RUC

Para realizar consultas por RUC, solo necesita el número RUC existente de una empresa.

Despues conectarse mediante este **endpoint** para realizar la consulta

<div class="flex">
<div class="post">POST</div>
<div class="url">

```bash
URL/ruc/20100130204?token=TOKEN
```

</div>
</div>

Por favor, asegúrese de reemplazar **TOKEN** con el token válido para autenticar su solicitud.

## Resultado obtenida

Si la consulta fue satisfactoria, obtendra el siguiente resultado

```js
{
  "success": true,
  "data": {
    "ruc": "20608386387",
    "razon_social": "MODAS TEXTILES DRAGO S.A.C.",
    "nombre_comercial": "DRAGO",
    "fecha_inscripcion": "21/08/2021",
    "fecha_inicio_actividades": "24/08/2021",
    "direccion": "CAL.MANUEL MATTOS NRO. 427 DPTO. 3 URB.  AMADEO DE GARAGAY",
    "departamento": "LIMA",
    "provincia": "LIMA",
    "distrito": "SAN MARTIN DE PORRES",
    "estado": "ACTIVO",
    "condicion": "HABIDO"
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
      const responseRuc = await $fetch("/ruc/20100130204?token=TOKEN", {
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

url = "URL/ruc/20100130204?token=TOKEN"
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

```bash
curl -X POST -H "Content-Type: application/json" URL/ruc/20100130204?token=TOKEN
````

</TabItem>
<TabItem value="JS" label="JS">
```js title="index.js"
const url = "URL/ruc/20100130204?token=TOKEN";

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
