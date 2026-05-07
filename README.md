<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Nest-Pdf-Report

Aplicación para la generación de informes con [Nest](https://github.com/nestjs/nest) y [MakePdf](https://pdfmake.github.io/docs/0.3/). Basado en el curso de "NestJs + Reportes: Genera PDFs desde Node" de [DevTalles](https://cursos.devtalles.com/) en Udemy.

## Configuración del proyecto

1. Instalar NestJS CLI

```bash
$ npm i -g @nestjs/cli
```
2. Clonar el repositorio

3. Instalar las dependencias

```bash
$ npm install
```
4. Clonar el archivo .env.template y renombrar la copia a .env.

5. Completar las variables de entorno en el archivo .env.

6. Levantar la base de datos

```bash
$ docker compose up -d
```

7. Generar el cliente Prisma

```bash
$ npx prisma generate
```

8. Ejecutar el proyecto

```bash
$ npm run start:dev
```

## Aspectos estudiados

En esta API se trabajan los siguientes aspectos de Nest y PdfMake:
1. Preparación del proyecto
  -	Proyecto de Nest
  - Dockerizando la base de datos PostgreSQL
  - Conectando Prisma con Nest
2. Informe de empleo
  - Estructura del contenido del informe
  - Crear encabezados y pies de página
  -	Trabajar con imágenes desde el backend
  -	Formatear fechas
  -	Columnas
  -	Cargar data en el informe
  -	Estilos personalizados
  -	Secciones del informe de forma reutilizable
3. Tablas
  -	Reutilizar componentes
  - Números al pie de página
  - Tablas
  - Personalización de tablas
  - Estilos personalizados reutilizables
  - Informe con múltiples tablas
  - Totales en el informe
4. Maestro detalle
  -	Códigos QR
  -	Maestro detalle e inner joins
  -	Tablas y estilos
  -	Estructura y alineamiento
  -	Envío de data de Prisma a reporte
5. Gráficos y SVG
  -	SVG con Chart.js
  -	Queries de recuento en Prisma
  - Gráficos de anillo, líneas y barras
  -	Ubicarlos en lugares deseados
  - Parametrizar y reutilizarlos
6. Utilidades
  - Convertir HTML a PdfMake
  - Trabajar diseños de tablas complejos

## Librerías utilizadas

