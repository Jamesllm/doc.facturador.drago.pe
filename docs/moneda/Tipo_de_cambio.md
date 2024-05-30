---
sidebar_position: 1
---

# Tipo de cambio

Para efectuar esta consulta solo es necesario acceder a la siguiente URL, la data obtenida es extraido de la **SUNAT**

<div class="flex">
<div class="get">GET</div>
<div class="url"> 

```bash
URL/tipo-cambio?token=TOKEN
```
</div>
</div>

Por favor, asegúrese de reemplazar **TOKEN** con el token válido para autenticar su solicitud.

## Respuesta obtenida

Si la consulta fue satisfactoria, obtendra el siguiente resultado

```js
{
  "success": true,
  "data": {
    "moneda": "USD",
    "fecha": "09/01/2024",
    "compra": "3.71",
    "venta": "3.719"
  }
}
```
Caso contrario obtendra el siguiente:

```js
{
  "success": false,
  "data": []
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
  const data = ref([]);

  const fetchConnect = async () => {
    try {
      const response = await $fetch("/tipo-cambio?token=TOKEN", {
        method: "GET",
        baseURL: "URL",
      });
      data.value = response;
    } catch (error) {
      console.error("Error al obtener la data: ", error);
    }
  };
  fetchConnect();
</script>

<template>
  <div v-for="(data, index) in dataRuc" :key="index">
    <p>MONEDA: {{data.data.moneda}}</p>
    <p>FECHA: {{data.data.fecha}}</p>
    <p>COMPRA: {{data.data.compra}}</p>
    <p>VENTA: {{data.data.venta}}</p>
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

url = "URL/tipo-cambio?token=TOKEN"
headers = {"Content-Type": "application/json"}
response = requests.get(url, headers=headers)

if response.status_code == 200:
    result = response.json()

    moneda = result["data"]["moneda"]
    fecha = result["data"]["fecha"]
    compra = result["data"]["compra"]
    venta = result["data"]["venta"]

    print("Moneda:", moneda)
    print("Fecha:", fecha)
    print("Compra:", compra)
    print("Venta:", venta)
else:
    print("Error en la solicitud. Código de estado:", response.status_code)
```

  </TabItem>
  <TabItem value="Bash" label="Bash">
    
```bash
curl -X GET -H "Content-Type: application/json" URL/tipo-cambio?token=TOKEN
```
  </TabItem>
  <TabItem value="JS" label="JS">
    
```js title="index.js"
const url = "URL/tipo-cambio?token=TOKEN";

fetch(url, {
  method: "GET",
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
    const moneda = result.data.moneda;
    const fecha = result.data.fecha;
    const compra = result.data.compra;
    const venta = result.data.venta;

    console.log("Moneda:", moneda);
    console.log("Fecha:", fecha);
    console.log("Compra:", compra);
    console.log("Venta:", venta);
  })
  .catch((error) => {
    console.error(error.message);
  });
    ```
  </TabItem>
</Tabs>

## ¿Como conseguir el token?
Para conseguir el token requerido en las consultas a los **endpoints** disponibles, debe acceder a la seccion <a href="/docs/token">**Obtener token**</a> para tener una informacion más detallada al respecto.