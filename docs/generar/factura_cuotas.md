---
sidebar_position: 2
---

# Factura con cuotas

La factura a cuotas es similar a la Factura al contado, solo se agregan más elementos requeridos.

<div class="flex">
<div class="post">POST</div>
<div class="url"> 

```bash
URL/factura?token=TOKEN
```
</div>
</div>

Por favor, asegúrese de reemplazar **TOKEN** con el token válido para autenticar su solicitud.

## Datos a enviar

```js
{
    "empresa": {
        "ruc": "20608386387",
        "razon_social": "MODAS TEXTILES DRAGO S.A.C.",
        "nombre_comercial": "DRAGO",
        "domicilio_fiscal": "AV. LA MOLINA NRO. 570",
        "ubigeo": "150101",
        "departamento": "LIMA",
        "provincia": "LIMA",
        "distrito": "LA MOLINA",
        "telefono": "123456789",
        "correo_electronico": "prueba@drago.com"
    },
    "cliente": {
        "ubigeo": "150101",
        "provincia": "LIMA",
        "departamento": "LIMA",
        "distrito": "LA MOLINA",
        "direccion": "AV FERIA",
        "codigo_tipo_documento": "6",
        "razon_social_nombres": "BOLETA CUOTAS ENTREPRISE",
        "numero_documento": "12345678912"
    },
    "venta": {
        "tipo_comprobante": "01",
        "serie": "F008",
        "numero": "1",
        "forma_pago_id": "2",
        "moneda": "PEN",
        "medios_de_pago": "102",
        "igv": true
    },
    "items": [
        {
            "producto": "Pollo a la Brasa",
            "cantidad": "2",
            "unidad_medida": "NIU",
            "precio": "50.00",
            "codigo_producto": "U111"
        }
    ],
    "cuotas": [
        {
            "monto": "50.00",
            "fecha_cuota": "2024-03-01"
        },
        {
            "monto": "50.00",
            "fecha_cuota": "2024-03-02"
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
        "response-sunat-code": "0",
        "response-sunat-description": "La Factura numero F008-1, ha sido aceptada",
        "xml-firmado": "URL/files/facturacion_electronica/FIRMA/20608386387-01-F008-1.xml",
        "tiket-pdf": "URL/files/pdf_firma/20608386387-01-F008-1.pdf",
        "pdf-a4": "URL/files/pdf/20608386387-01-F008-1-A4.pdf",
        "file-cdr": "URL/files/facturacion_electronica/FIRMA/R-20608386387-01-F008-1.xml"
    }
}
```

Caso contrario obtendra el siguiente:

```js
{
  "success": false,
  "data": {
    "response-sunat-code": "",
    "response-sunat-description": "",
    "xml-firmado": "",
    "tiket-pdf": "",
    "pdf-a4": "",
    "file-cdr": ""
  },
  "error": "Mensaje de error"
}
```
import TableDrago from "@site/src/components/table"; 

## Parametros

### empresa

<TableDrago thead="Parametro, Tipo, Descripción">
<tr>
    <td>ruc</td>
    <td>string</td>
    <td>Ruc de la empresa</td>
</tr>
<tr>
    <td>razon_social</td>
    <td>string</td>
    <td>Razón social de la empresa</td>
</tr>
<tr>
    <td>nombre_comercial</td>
    <td>string</td>
    <td>Nombre comercial de la empresa</td>
</tr>
<tr>
    <td>domicilio_fiscal</td>
    <td>string</td>
    <td>Domicilio de la empresa</td>
</tr>
<tr>
    <td>ubigeo</td>
    <td>string</td>
    <td>Codigo ubigeo de la ubicacion de la empresa (SUNAT)</td>
</tr>
<tr>
    <td>departamento</td>
    <td>string</td>
    <td>Departamento donde se encuentra ubicado la empresa</td>
</tr>
<tr>
    <td>provincia</td>
    <td>string</td>
    <td>Provincia donde se encuentra ubicado la empresa</td>
</tr>
<tr>
    <td>distrito</td>
    <td>string</td>
    <td>Distrito donde se encuentra ubicado la empresa</td>
</tr>
<tr>
    <td>telefono</td>
    <td>string</td>
    <td>Telefono de la empresa</td>
</tr>
<tr>
    <td>correo_electronico</td>
    <td>string</td>
    <td>Correo electronico de la empresa</td>
</tr>
</TableDrago>

### cliente

<TableDrago thead="Parametro, Tipo, Descripción">
<tr>
    <td>codigo_tipo_entidad</td>
    <td>string</td>
    <td>Codigo del tipo de entidad **([ver diccionario](#diccionario))**</td>
</tr>
<tr>
    <td>razon_social_nombres</td>
    <td>string</td>
    <td>Razón social del cliente (nombres)</td>
</tr>
<tr>
    <td>numero_documento</td>
    <td>string</td>
    <td>Número de identificacion del cliente</td>
</tr>
</TableDrago>

### venta

<TableDrago thead="Parametro, Tipo, Descripción">
<tr>
    <td>tipo_documento_codigo</td>
    <td>string</td>
    <td>Tipo del comprobante electronico **(para factura = 01)**</td>
</tr>
<tr>
    <td>serie</td>
    <td>string</td>
    <td>Codigo de serie **(para factura F001)**</td>
</tr>
<tr>
    <td>numero</td>
    <td>string</td>
    <td>Numero de venta</td>
</tr>
<tr>
    <td>forma_pago_id</td>
    <td>string</td>
    <td>Forma de pago **(cuotas = 2)**</td>
</tr>
<tr>
    <td>moneda_id</td>
    <td>string</td>
    <td>Tipo de moneda con la que se realiza la venta</td>
</tr>
</TableDrago>

### items

<TableDrago thead="Parametro, Tipo, Descripción">
<tr>
    <td>producto</td>
    <td>string</td>
    <td>Nombre del producto</td>
</tr>
<tr>
    <td>cantidad</td>
    <td>string</td>
    <td>Cantidad de productos</td>
</tr>
<tr>
    <td>precio</td>
    <td>string</td>
    <td>Precio unitario del producto</td>
</tr>
</TableDrago>

## Diccionario

### codigo_tipo_entidad

El `codigo_tipo_entidad` puede cambiar de acuerdo al tipo de cliente al que se desea realiar la **factura**

<TableDrago thead="codigo_tipo_entidad, Entidad, Digitos">
<tr>
    <td>1</td>
    <td>DNI</td>
    <td>8</td>
</tr>
<tr>
    <td>6</td>
    <td>RUC</td>
    <td>11</td>
</tr>
</TableDrago>

### moneda_id

Para el tipo de pago de la venta es necesario especificar el tipo de moneda con el que se va a efectuar el pago. A continuacion una tabla con el tipo de monedas disponibles.

<TableDrago thead="moneda_id, Tipo de moneda">
<tr>
    <td>1</td>
    <td>PEN</td>
</tr>
<tr>
    <td>2</td>
    <td>USD</td>
</tr>
<tr>
    <td>3</td>
    <td>EUR</td>
</tr>
</TableDrago>

## ¿Como conseguir el token?
Para conseguir el token requerido en las consultas a los **endpoints** disponibles, debe acceder a la seccion Obtener token para tener una informacion más detallada al respecto.
