---
sidebar_position: 6
---

# Guia de remision

Para efectuar esta consulta solo es necesario acceder a la siguiente URL, este dato es extraido de la **SUNAT**

<div class="flex">
<div class="post">POST</div>
<div class="url"> 

```bash
URL/guia-remision?token=TOKEN
```
</div>
</div>

Por favor, asegúrese de reemplazar **TOKEN** con el token válido para autenticar su solicitud.

:::info

La unidad de medida esta puesta por defecto en **KGM** (KILOGRAMO)

:::

:::warning

Aun se encuentra en **desarrollo**

## Datos a enviar

### Guía de Remisión - Transporte Publico

Ejemplo de Guía de Remisión para la boleta B002 utilizando transporte publico. Se incluye información de la empresa que realizará el envío:

```js
{
  "empresa": {
    "empresa": "MODAS TEXTILES DRAGO S.A.C.",
    "ruc": "20608386387"
  },
  "guia": {
    "serie": "B002",
    "numero": "12316",
    "fecha_emision_sf": "2024-01-16",
    "fecha_traslado_sf": "2024-01-16",
    // highlight-start
    "guia_modalidad_traslado_id": "01",
    // highlight-end
    "destinatario_id": "123",
    "partida_ubigeo": "150117",
    "partida_direccion": "AV. LOS OLIVOS",
    "llegada_ubigeo": "140105",
    "llegada_direccion": "AV. AGRICULTURA",
    "notas": "",
    "codigo_tipo_destinatario": "1",
    "numero_documento": "80241425",
    "entidad": "LAURA MONTES OLIVEROS",
    "peso_total": "10",
    "unidad_medida_peso_bruto": "KGM",
    "numero_bultos": "1",
    "numero_documento_transporte": "40708627",
    "entidad_transporte": "SHALOM EMPRESARIAL S.A.C.",
    "numero_mtc_transporte": "20512528458",
    "codigo_guia_modalidad_traslado": "07"
  },
  "detalles": [
    {
      "unidad_medida": "NIU",
      "cantidad": "1",
      "producto": "POLO DRAGO ROJO",
      "codigo_producto": "U123"
    }
  ]
}
```

### Guía de Remisión - Transporte Privado

Ejemplo de Guía de Remisión para la boleta B002 utilizando transporte privado. Se incluye información del conductor del transporte que realizará el envío:


```js
{
  "empresa": {
    "empresa": "MODAS TEXTILES DRAGO S.A.C.",
    "ruc": "20608386387"
  },
  "guia": {
    "serie": "B002",
    "numero": "12316",
    "fecha_emision_sf": "2024-01-16",
    "fecha_traslado_sf": "2024-01-16",
    // highlight-start
    "guia_modalidad_traslado_id": "02",
    // highlight-end
    "destinatario_id": "123",
    "partida_ubigeo": "150117",
    "partida_direccion": "AV. LOS OLIVOS",
    "llegada_ubigeo": "140105",
    "llegada_direccion": "AV. AGRICULTURA",
    "notas": "",
    "codigo_tipo_destinatario": "1",
    "numero_documento": "80241425",
    "entidad": "LAURA MONTES OLIVEROS",
    "peso_total": "10",
    "unidad_medida_peso_bruto": "KGM",
    "numero_bultos": "1",
    // highlight-start
    "conductor_dni": "75237662",
    "conductor_nombres": "Ronal James",
    "conductor_apellidos": "Llapapsca Montes",
    "conductor_licencia": "BM-001",
    "vehiculo_placa": "MB-451",
    // highlight-end
    "codigo_guia_modalidad_traslado": "01"
  },
  "detalles": [
    {
      "unidad_medida": "NIU",
      "cantidad": "1",
      "producto": "POLO DRAGO ROJO",
      "codigo_producto": "U123"
    }
  ]
}
```

## Respuesta obtenida

Si la consulta fue satisfactoria, obtendra el siguiente resultado


```js
{
  "success": true,
  "data": {
    "xml": "URL/files/guia_electronica/XML/20608386387-09-B002-12316.xml"
  }
}
```
Caso contrario obtendra el siguiente:

```js
{
  "success": false,
  "data": {
    "xml": ""
  }
}
```

import TableDrago from "@site/src/components/table"; 

## Parametros

### empresa
Informacion de la Empresa la cual realizara la emision de la **Guia de remision**.

<TableDrago thead="Parámetro, Tipo, Descripción">
<tr>
    <td>empresa</td>
    <td>string</td>
    <td>Nombre de la empresa</td>
</tr>
<tr>
    <td>ruc</td>
    <td>string</td>
    <td>Ruc de la empresa</td>
</tr>
<tr>
    <td>codigo_sucursal_sunat</td>
    <td>string</td>
    <td>Codigo SUNAT de la sucursal</td>
</tr>
<tr>
    <td>guias_client_id</td>
    <td>string</td>
    <td>id cliente SUNAT</td>
</tr>
<tr>
    <td>guias_client_secret</td>
    <td>string</td>
    <td>cliente secreto SUNAT</td>
</tr>
<tr>
    <td>usu_secundario_produccion_user</td>
    <td>string</td>
    <td>usuario secundario de produccion SUNAT</td>
</tr>
<tr>
    <td>usu_secundario_produccion_password</td>
    <td>string</td>
    <td>contraseña del usuario secundario</td>
</tr>
</TableDrago>

### guia
Informacion necesaria para emitir la guia.

<TableDrago thead="Parámetro, Tipo, Descripción">
<tr>
    <td>serie</td>
    <td>string</td>
    <td>Codigo de serie **[(ver diccionario)](#diccionario)**</td>
</tr>
<tr>
    <td>numero</td>
    <td>string</td>
    <td>Número de serie</td>
</tr>
<tr>
    <td>fecha_emision_sf</td>
    <td>YYYY-MM-DD</td>
    <td>Fecha de emision</td>
</tr>
<tr>
    <td>fecha_traslado_sf</td>
    <td>YYYY-MM-DD</td>
    <td>Fecha de traslado</td>
</tr>
<tr>
    <td>guia_modalidad_traslado_id</td>
    <td>string</td>
    <td>Modalidad de traslado **[(ver diccionario)](#diccionario)**</td>
</tr>
<tr>
    <td>destinatario_id</td>
    <td>string</td>
    <td>Id generado automaticamente para cada cliente (manual)</td>
</tr>
<tr>
    <td>partida_ubigeo</td>
    <td>string</td>
    <td>Id SUNAT del distrito</td>
</tr>
<tr>
    <td>partida_direccion</td>
    <td>string</td>
    <td>Dirección completa de donde parte el envio</td>
</tr>
<tr>
    <td>llegada_ubigeo</td>
    <td>string</td>
    <td>Id SUNAT del distrito</td>
</tr>
<tr>
    <td>llegada_direccion</td>
    <td>string</td>
    <td>Dirección completa a la que llega el envio</td>
</tr>
<tr>
    <td>notas</td>
    <td>string</td>
    <td>Notas del envio (no es indispensable)</td>
</tr>
<tr>
    <td>codigo_tipo_destinatario</td>
    <td>string</td>
    <td>codigo_tipo_destinatario **[(ver diccionario)](#diccionario)**</td>
</tr>
<tr>
    <td>numero_documento</td>
    <td>string</td>
    <td>Número de identificacion de la entidad</td>
</tr>
<tr>
    <td>entidad</td>
    <td>string</td>
    <td>Nombre completo de la entidad</td>
</tr>
<tr>
    <td>peso_total</td>
    <td>string</td>
    <td>Peso total del envio</td>
</tr>
<tr>
    <td>numero_bultos</td>
    <td>string</td>
    <td>Número total de bultos enviados</td>
</tr>
<tr>
    <td>numero_documento_transporte</td>
    <td>string</td>
    <td>Número de identificacion del conductor</td>
</tr>
<tr>
    <td>entidad_transporte</td>
    <td>string</td>
    <td>Nombre completo de la entidad que transportara el envio</td>
</tr>
<tr>
    <td>numero_mtc_transporte</td>
    <td>string</td>
    <td>Numero RUC de la empresa en la que se realiza el envio</td>
</tr>
<tr>
    <td>conductor_dni</td>
    <td>string</td>
    <td>Número de identificacion del conductor</td>
</tr>
<tr>
    <td>conductor_nombres</td>
    <td>string</td>
    <td>Nombres del conductor del transporte</td>
</tr>
<tr>
    <td>conductor_apellidos</td>
    <td>string</td>
    <td>Apellidos del conductor del transporte</td>
</tr>
<tr>
    <td>conductor_licencia</td>
    <td>string</td>
    <td>Numero de la licencia de conducir</td>
</tr>
<tr>
    <td>vehiculo_placa</td>
    <td>string</td>
    <td>Placa del vehiculo en el que se realiza el envio</td>
</tr>
<tr>
    <td>codigo_guia_modalidad_traslado</td>
    <td>string</td>
    <td>Codigo del traslado **[(ver diccionario)](#diccionario)**</td>
</tr>
</TableDrago>

### detalles
Detalles del envio

<TableDrago thead="Parámetro, Tipo, Descripción">
<tr>
    <td>codigo_unidad</td>
    <td>string</td>
    <td>Código de tipo de unidad de medida comercial (por defecto 1)</td>
</tr>
<tr>
    <td>cantidad</td>
    <td>string</td>
    <td>Cantidad de productos</td>
</tr>
<tr>
    <td>producto</td>
    <td>string</td>
    <td>Nombre del producto</td>
</tr>
<tr>
    <td>producto_codigo</td>
    <td>string</td>
    <td>Código del producto (Codigo SUNAT)</td>
</tr>
</TableDrago>

## Diccionario

### serie
El número de `serie` es importante, ya que este forma parte del nombre de los archivos XML y tambien se envian a la SUNAT. Este puede variar, puede ser **B001** o **F001**, dependiendo del tipo de boleta que se quiera enviar por guia de remision.

<TableDrago thead="Tipo de comprobante electronico, serie">
<tr>
    <td>Boleta</td>
    <td>B001</td>
</tr>
<tr>
    <td>Factura</td>
    <td>F001</td>
</tr>
</TableDrago>

### guia_modalidad_traslado_id
Para el tipo de pago de la venta es necesario especificar el tipo de este. A continuacion una tabla con el tipo de monedas disponibles

<TableDrago thead="guia_modalidad_traslado_id, tipo de transporte">
<tr>
    <td>01</td>
    <td>Público</td>
</tr>
<tr>
    <td>02</td>
    <td>Privado</td>
</tr>
</TableDrago>

### codigo_tipo_destinatario
En `codigo_tipo_destinatario` puede cambiar de acuerdo al al tipo de entidad a la que llegara la mercaderia.

<TableDrago thead="codigo_tipo_destinatario, Entidad">
<tr>
    <td>1</td>
    <td>DNI</td>
</tr>
<tr>
    <td>6</td>
    <td>RUC</td>
</tr>
<tr>
    <td>0</td>
    <td>Empresas Del Extranjero - No Domiciliado</td>
</tr>
<tr>
    <td>4</td>
    <td>CARNET DE EXTRANJERIA</td>
</tr>
<tr>
    <td>7</td>
    <td>PASAPORTE</td>
</tr>
<tr>
    <td>8</td>
    <td>Permiso Temporal de Permanencia - PTP</td>
</tr>
</TableDrago>

### codigo_guia_modalidad_traslado
En `codigo_guia_modalidad_traslado` especifica el motivo del traslado.

<TableDrago thead="codigo_guia_modalidad_traslado, COD. GUIA MOTIVO DE TRASLADO">
<tr>
    <td>01</td>
    <td>Venta</td>
</tr>
<tr>
    <td>14</td>
    <td>Venta sujeta a confirmación del comprador</td>
</tr>
<tr>
    <td>02</td>
    <td>Venta sujeta a confirmación del comprador</td>
</tr>
<tr>
    <td>04</td>
    <td>Traslado entre establecimiento de la misma empresa</td>
</tr>
<tr>
    <td>18</td>
    <td>Traslado por emisor itinerante de comprobantes de pago</td>
</tr>
<tr>
    <td>19</td>
    <td>Traslado zona primaria</td>
</tr>
<tr>
    <td>08</td>
    <td>Importación</td>
</tr>
<tr>
    <td>09</td>
    <td>Exportación</td>
</tr>
<tr>
    <td>13</td>
    <td>Otras NO incluida en los puntos anteriores</td>
</tr>
</TableDrago>


:::

## ¿Como conseguir el token?
Para conseguir el token requerido en las consultas a los **endpoints** disponibles, debe acceder a la seccion Obtener token para tener una informacion más detallada al respecto.