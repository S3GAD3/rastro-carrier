# RASTRO CARRIER

Herramienta web local del Kit RASTRO para ordenar consultas OSINT abiertas relacionadas con vehículos de transporte por carretera, sus autorizaciones y las empresas o personas vinculadas.

> **Importante:** es una ayuda de investigación. No sustituye consultas institucionales, diligencias, certificaciones registrales ni la conservación de evidencias originales. Verifique cada dato en su fuente y documente la fecha, el método y las limitaciones de la consulta.

## Funciones

- Normaliza y ofrece indicios orientativos sobre matrículas españolas.
- Copia la matrícula y abre el Registro de Empresas y Actividades de Transporte (REAT).
- Permite pegar el texto de una ficha REAT y extraer titular, NIF/CIF/NIE y autorización. La extracción es heurística: revise los campos antes de incorporarlos.
- Organiza identificadores de vehículo, titular, autorización, persona vinculada, domicilio, dominio y teléfono.
- Enlaza con fuentes oficiales y registros, y genera consultas abiertas en Google, Bing o DuckDuckGo.
- Mantiene un cuaderno de consultas, hallazgos clave y traza de aperturas y búsquedas iniciadas desde la herramienta.
- Exporta informes TXT y HTML, copia JSON de respaldo e importa JSON.
- Calcula SHA-256 de un archivo seleccionado sin guardarlo. El apunte conserva nombre, tamaño y hash; no conserva el archivo.
- Incluye el logotipo RASTRO y funciona como un único `index.html`, sin dependencias externas.

## Requisitos

- Navegador actualizado, preferentemente Chrome o Edge.
- Para funciones de portapapeles y SHA-256, abra la herramienta desde un contexto seguro: GitHub Pages (`https://`) o `localhost`.
- No requiere instalación, cuenta, clave API, servidor propio ni dependencias de terceros.

## Uso rápido

1. Descargue `index.html` o publique el repositorio en GitHub Pages.
2. Introduzca una referencia de expediente y la matrícula. Pulse **Copiar y abrir REAT**.
3. En el REAT oficial, haga la consulta por matrícula. Copie el texto de la ficha, vuelva a RASTRO CARRIER y péguelo en el cuadro de resultado.
4. Pulse **Extraer titular, NIF y autorización**. Revise y corrija cada valor antes de pulsar **Volcar al expediente y registrar apunte**.
5. Añada otros identificadores. Abra las fuentes que correspondan, realice las consultas manualmente y registre el resultado, URL y observaciones en el cuaderno.
6. Exporte un informe o una copia JSON si necesita conservar el trabajo. El JSON sirve también para restaurar el expediente en otro navegador.

La guía ampliada está en [`docs/USO.md`](docs/USO.md). Las instrucciones para desplegarlo están en [`docs/PUBLICACION-GITHUB.md`](docs/PUBLICACION-GITHUB.md).

## Datos y privacidad

- La página no incorpora API, analítica, telemetría ni backend. No envía datos automáticamente a un servidor.
- Los expedientes se guardan en `localStorage` del navegador, **sin cifrar**. Cualquier persona con acceso al mismo perfil del navegador podría verlos.
- Al abrir un portal, mapa, buscador o servicio externo, el identificador puede transmitirse a ese tercero, especialmente cuando forma parte de la URL. La herramienta avisa de este comportamiento en pantalla.
- Los informes y copias JSON pueden contener datos personales, identificadores y notas de investigación. Guárdelos y compártalos según las normas de su unidad.
- Use un perfil de navegador y dispositivo adecuados, evite datos reales en pruebas o capturas de GitHub y elimine del navegador los expedientes cuando proceda.

## Alcance y límites

RASTRO CARRIER facilita pivotes manuales. No realiza scraping, no inicia sesión en portales, no consulta sistemas restringidos y no accede a DGT-PID, ERRU, TACHOnet ni sistemas de inspección del transporte. La herramienta no confirma por sí misma titularidad, vigencia de autorizaciones, infracciones, control societario ni la identidad de una persona. Las estimaciones de matrícula y validaciones de formato son orientativas.

Las fuentes pueden cambiar su dirección o funcionamiento. Compruebe que el portal oficial sigue vigente antes de usarlo y contraste los resultados con el organismo competente. Un enlace a un agregador no convierte su contenido en fuente oficial.

## Probar el extractor REAT

Con Node.js instalado, ejecute desde la raíz del repositorio:

```bash
node tests/reat-parser.test.js
```

La prueba no requiere paquetes adicionales y cubre texto en línea, etiquetas y valores separados, tablas con tabuladores, NIF/CIF/NIE y ausencia de datos reconocibles.

## Publicación con GitHub Pages

1. Cree un repositorio llamado, por ejemplo, `rastro-carrier`.
2. Suba el contenido de esta carpeta a la rama `main`, con `index.html` en la raíz.
3. En **Settings → Pages**, seleccione despliegue desde la rama `main` y la carpeta raíz.
4. Abra la URL publicada y pruebe la consulta REAT, la extracción, el cuaderno, la exportación y la importación JSON.
5. Antes de publicar una versión, revise [`docs/PUBLICACION-GITHUB.md`](docs/PUBLICACION-GITHUB.md) y cree un `Release` etiquetado, por ejemplo `v0.1.0`.

## Licencia y marca

El código y la documentación se ofrecen bajo licencia MIT; consulte [`LICENSE`](LICENSE). El nombre, logotipo y demás elementos identificativos de **RASTRO** se reservan a su titular y no se licencian por la MIT. La titularidad de marcas y derechos de terceros se mantiene separada de la licencia del código.

## Créditos

Creado por S3GAD3 para el Kit RASTRO. La herramienta enlaza a portales oficiales y servicios externos cuyos nombres y contenidos pertenecen a sus respectivos titulares.
