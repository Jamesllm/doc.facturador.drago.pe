---
sidebar_position: 2
---

# Consulta SBS

Para efectuar esta consulta solo es necesario acceder a la siguiente URL, este dato es extraido de la **SUNAT**
<div class="flex">
<div class="post">POST</div>

<div class="url"> 

```bash
URL/sbs?token=TOKEN
```
</div>
</div>

Por favor, asegúrese de reemplazar **TOKEN** con el token válido para autenticar su solicitud.

## Datos a enviar

Ejemplo con Dólar estadounidense, cod. 02

```js
{
  "moneda": "02",
  "f_inicio": "08/01/2023",
  "f_fin": "11/01/2023"
}
```

## Respuesta obtenida

Si la consulta se realiza con éxito, recibirás el siguiente resultado:

```js
{
  "success": true,
  "data": [
    {
      "fecha": "09/01/2023",
      "moneda": "Dólar de N.A.",
      "compra": "3.792",
      "venta": "3.803"
    },
    {
      "fecha": "10/01/2023",
      "moneda": "Dólar de N.A.",
      "compra": "3.802",
      "venta": "3.806"
    },
    {
      "fecha": "11/01/2023",
      "moneda": "Dólar de N.A.",
      "compra": "3.782",
      "venta": "3.783"
    }
  ]
}
```

En caso contrario, la respuesta será:

```js
{
  "success": false,
  "data": []
}
```
## Consideraciones 
- Sólo se puede obtener el tipo de cambio desde el año 2000 en adelante.

- El tipo de cambio de la SUNAT es el tipo de cambio del cierre del día anterior de la SBS (fuente http://www.sunat.gob.pe/cl-at-ittipcam/tcS01Alias).

- El tipo de cambio no se publica en la SBS o SUNAT todos los díás. En estos casos se tomará el tipo de cambio del día anterior.

- Entre menos sea el rango de fechas, la respuesta sera más rapida.

## Integraciones en diversos lenguajes

Esta sección proporciona ejemplos de cómo integrar la consulta en diferentes lenguajes de programación.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Nuxt 3" label="Nuxt 3" default>
    Utilizando `$fetch` en **Nuxt 3**
    
```js title="app.vue"
<script setup lang="ts">
  const runtimeConfig = useRuntimeConfig();
  const data = ref([]);

  const fetchConnect = async () => {
    try {
      const response = await $fetch("/sbs?token=TOKEN", {
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

url = "URL/sbs?token=TOKEN"
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
curl -X GET -H "Content-Type: application/json" URL/sbs?token=TOKEN
```
  </TabItem>
  <TabItem value="JS" label="JS">
    
```js title="index.js"
const url = "URL/sbs?token=TOKEN";

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

## Parametros

Para obtener el tipo de cambio de la moneda se debe indicadar por fecha o rango de fechas


## Diccionario

### moneda

El código de `moneda` es esencial para esta consulta, ya que identifica el tipo de moneda. A continuación se presentan los diferentes códigos de las monedas disponibles. Consulta el diccionario completo para más detalles.

## ¿Como conseguir el token?
Para conseguir el token requerido en las consultas a los **endpoints** disponibles, debe acceder a la seccion <a href="/docs/token">**Obtener token**</a> para tener una informacion más detallada al respecto.

