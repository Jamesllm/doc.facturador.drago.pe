---
sidebar_position: 1
---

# Inicio
* [Inicio]
    - [Tipos de Comprobantes](#tipo-de-comprobantes)
    - [Tipo de Monedas](#tipo-de-monedas)
    - [Tipo de Documento de Identidad](#tipo-de-documento-de-identidad)
    - [Unidades de Medida](#unidades-de-medida)
    - [Tipos de transportee](#tipos-de-transporte)

:::tip[USO FACIL]

API facil de implementar en cualquier proyecto.

:::

import TableDrago from "@site/src/components/table"; 

## Tipo de Comprobantes

Actualmente, la API puede enviar los siguientes documentos en la sección de Venta, en el parámetro `tipo_comprobante` :

El tipo de comprobante es escencial especificar, ya que este es el formato que se enviará a la SUNAT.

<TableDrago thead="Codigo, Nombre del Documento">
<tr>
    <td>01</td>
    <td>FACTURA</td>
</tr>
<tr>
    <td>03</td>
    <td>BOLETA</td>
</tr>
<tr>
    <td>07</td>
    <td>NOTA DE CREDITO</td>
</tr>
<tr>
    <td>08</td>
    <td>NOTA DE DEBITO</td>
</tr>
</TableDrago>

## Tipo de Venta

En la sección de Venta, en el parámetro `igv`:

<TableDrago thead="Codigo, Valor">
 <tr>
    <td>true</td>
    <td>Incluye IGV</td>
</tr>
<tr>
    <td>false</td>
    <td>No Incluye IGV</td>
</tr>
</TableDrago>

## Tipo de Monedas

En la sección de Venta, en el parámetro `moneda` :

<TableDrago thead="Codigo, Nombre de la Moneda">
<tr>
    <td>PEN</td>
    <td>Nuevo Sol</td>
</tr>
<tr>
    <td>USD</td>
    <td>US Dollar</td>
</tr>
<tr>
    <td>EUR</td>
    <td>Euro</td>
</tr>
</TableDrago>

## Tipo de Documento de Identidad

En la sección de Cliente, en el parámetro `codigo_tipo_documento` :

<TableDrago thead="Codigo, Nombre del Documento de Identidad">
<tr>
    <td>0</td>
    <td>S/N</td>
</tr>
<tr>
    <td>1</td>
    <td>DNI</td>
</tr>
<tr>
    <td>4</td>
    <td>CE</td>
</tr>
<tr>
    <td>6</td>
    <td>RUC</td>
</tr>
<tr>
    <td>7</td>
    <td>PASAPORTE</td>
</tr>
</TableDrago>

## Unidades de medida

Las unidades de medida disponibles en la API son:

<TableDrago thead="Codigo, Medida">
<tr>
    <td>NIU</td>
    <td>UNIDAD (BIENES)</td>
</tr>
<tr>
    <td>ZZ</td>
    <td>UNIDAD (SERVICIOS)</td>
</tr>
<tr>
    <td>KGM</td>
    <td>KILOGRAMO</td>
</tr>
</TableDrago>

## Tipos de transporte

Los tipos de transporte disponibles en la API son:

<TableDrago thead="Codigo, Transporte">
<tr>
    <td>01</td>
    <td>Transporte público</td>
</tr>
<tr>
    <td>02</td>
    <td>Transporte privado</td>
</tr>
</TableDrago>


Para obtener información más detallada sobre las respuestas, visite la sección de respuestas de cada **endpoint** disponible en la **API**.
