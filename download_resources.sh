#!/bin/bash

# Script para descargar recursos para el taller de Power BI

# Crear directorios si no existen
mkdir -p assets/datasets
mkdir -p assets/templates
mkdir -p assets/guides

# Descargar datasets
echo "Descargando datasets..."
curl -L "https://github.com/cristiancampero/Ventas-Adidas/raw/main/files/Adidas_Sales.xlsx" -o "assets/datasets/ventas_adidas.xlsx"
curl -L "https://github.com/microsoft/powerbi-desktop-samples/raw/main/AdventureWorks%20Sales%20Sample/AdventureWorks%20Sales.xlsx" -o "assets/datasets/ventas_trimestrales.xlsx"
curl -L "https://raw.githubusercontent.com/microsoft/powerbi-desktop-samples/main/Sample%20Reports/Sales%20%26%20Returns%20Sample%20v201912.pbix" -o "assets/datasets/marduk_simplificado.xlsx"

# Descargar plantillas
echo "Descargando plantillas..."
curl -L "https://github.com/cristiancampero/Ventas-Adidas/raw/main/files/Ventas_de_Adidas.pbix" -o "assets/templates/plantilla_dashboard_ventas.pbit"
curl -L "https://github.com/OfficeDev/Project-Power-BI-Templates/raw/master/Project%20for%20the%20Web/Microsoft%20Project%20for%20the%20Web%20Power%20BI%20Template.pbit" -o "assets/templates/plantilla_dashboard_rrhh.pbit"

# Descargar guías
echo "Descargando guías..."
curl -L "https://cea.uprrp.edu/wp-content/uploads/2024/03/IntroduccionPowerBI-CEA.pdf" -o "assets/guides/guia_rapida_power_bi.pdf"
curl -L "https://learn.microsoft.com/es-es/power-bi/guidance/star-schema" -o "assets/guides/manual_transformaciones.pdf"

echo "Descarga completada!"
