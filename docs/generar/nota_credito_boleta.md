---
sidebar_position: 4
---

# Nota de crédito - Boleta

Para efectuar esta consulta solo es necesario acceder a la siguiente URL, este dato es extraido de la **SUNAT**

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
        "razon_social_nombres": "lLAPAPASCA ENTERPRISE",
        "numero_documento": "12345678912"
    },
    "venta": {
        "tipo_comprobante": "07",
        "serie": "B003",
        "numero": "5",
        "forma_pago_id": "1",
        "moneda": "PEN",
        "medios_de_pago": "102",
        "igv": true
    },
    "venta_relacionado": {
        "serie": "BB03",
        "numero": "1",
        "codigo": "03"
    },
    "motivo_nc": {
        "codigo": "01"
    },
    "items": [
        {
            "producto": "Pollo a la Brasa",
            "cantidad": "3",
            "unidad_medida": "NIU",
            "precio": "29.90",
            "codigo_producto": "U111"
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
        "response-sunat-description": "La Nota de Credito numero B003-5, ha sido aceptada",
        "xml-firmado": "URL/files/facturacion_electronica/FIRMA/20608386387-07-B003-5.xml",
        "tiket-pdf": "URL/files/pdf_firma/20608386387-07-B003-5.pdf",
        "pdf-a4": "URL/files/pdf/20608386387-07-B003-5-A4.pdf",
        "file-cdr": "URL/files/facturacion_electronica/FIRMA/R-20608386387-07-B003-5.xml"
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

### venta_relacionado

<TableDrago thead="Parámetro, Tipo, Descripción">
<tr>
    <td>serie</td>
    <td>string</td>
    <td>Codigo de serie **(para boleta = BBB3)**</td>
</tr>
<tr>
    <td>numero</td>
    <td>string</td>
    <td>Numero de venta</td>
</tr>
<tr>
    <td>codigo</td>
    <td>string</td>
    <td>Codigo de venta</td>
</tr>
</TableDrago>

## Diccionario

### tipo_documento_codigo

El `tipo_documento_codigo` para nota de crédito es lo siguiente:

<TableDrago thead="tipo_documento_codigo, Entidad">
<tr>
    <td>07</td>
    <td>Nota de Crédito</td>
</tr>
</TableDrago>

### motivo_nc

El `motivo_nc` -> `codigo` hace referencia al código asociado a cada motivo en una nota de crédito.

<TableDrago thead="codigo, Valor">
<tr>
    <td>01</td>
    <td>Anulación de la operación</td>
</tr>
<tr>
    <td>02</td>
    <td>Anulación por error en el RUC</td>
</tr>
<tr>
    <td>03</td>
    <td>Corrección por error en la descripcion</td>
</tr>
<tr>
    <td>04</td>
    <td>Descuento Global</td>
</tr>
<tr>
    <td>05</td>
    <td>Descuento por ítem</td>
</tr>
<tr>
    <td>06</td>
    <td>Devolución total</td>
</tr>
<tr>
    <td>07</td>
    <td>Devolución por ítem</td>
</tr>
<tr>
    <td>08</td>
    <td>Bonificación</td>
</tr>
<tr>
    <td>09</td>
    <td>Disminición en el valor</td>
</tr>
<tr>
    <td>10</td>
    <td>Otros conceptos</td>
</tr>
</TableDrago>

## ¿Como conseguir el token?
Para conseguir el token requerido en las consultas a los **endpoints** disponibles, debe acceder a la seccion Obtener token para tener una informacion más detallada al respecto.
