# Guía de uso — RASTRO CARRIER

## 1. Abrir la herramienta

Puede abrir `index.html` directamente. Para que el portapapeles y Web Crypto funcionen de forma consistente, es preferible usar la página publicada en HTTPS o servir la carpeta en `localhost`:

```bash
python -m http.server 8000
```

Después abra `http://localhost:8000` en el navegador. Este servidor local no sube los datos a Internet.

## 2. Iniciar un expediente

Escriba una referencia en **Expediente**. La herramienta guarda cada caso por separado en el almacenamiento local del navegador. El selector permite cambiar entre casos ya guardados.

Introduzca la matrícula sin preocuparse por espacios o minúsculas. La herramienta normaliza el formato y muestra indicios del tipo y serie. No use esos indicios como prueba de fecha o clasificación registral.

## 3. Consultar REAT y revisar la extracción

Pulse **Copiar y abrir REAT**. La matrícula se copia y se abre el portal oficial. Haga allí la búsqueda manual y copie el texto de la ficha completa. De vuelta en la herramienta:

1. Pegue el contenido en **Resultado de REAT**.
2. Pulse **Extraer titular, NIF y autorización**.
3. Compruebe los tres campos frente al texto de origen. Corrija manualmente cualquier error o dato incompleto.
4. Pulse **Volcar al expediente y registrar apunte**.

El apunte guarda también un fragmento del texto pegado, limitado a 5.000 caracteres, para poder revisar de dónde salió la extracción. El resto de datos debe contrastarse en la fuente.

## 4. Seguir pivotes y registrar hallazgos

Complete los identificadores disponibles. Las tarjetas de fuentes muestran qué dato puede copiarse y abrirse. Las búsquedas OSINT se generan con el motor seleccionado; use **copiar** para adaptar una consulta sin abrirla.

En el cuaderno, registre para cada resultado:

- fuente y fecha/hora;
- identificador consultado y URL;
- resultado observado, contexto y limitaciones;
- si se considera un hallazgo clave.

La traza automática registra aperturas y búsquedas iniciadas desde la herramienta; no registra lo que se hace dentro de los sitios externos.

## 5. Hashes y exportación

**Adjuntar huella de captura** calcula SHA-256 del archivo elegido en el navegador. RASTRO CARRIER no conserva ni adjunta el fichero; registra nombre, tamaño y hash para ayudar a cotejarlo posteriormente. No equivale a una cadena de custodia ni sustituye la conservación forense.

- **Informe .txt / .html:** resumen legible del expediente, los apuntes y la traza.
- **Copia .json:** respaldo estructurado que permite restaurar el caso.
- **Restaurar .json:** importa un expediente. Si ya existe la misma referencia, se solicitará confirmación antes de sobrescribir.

Los archivos exportados pueden contener datos personales o sensibles. Trátelos como documentación de investigación.

## 6. Borrar datos

Use **Eliminar** para borrar el expediente activo del almacenamiento local. El borrado no elimina las copias ya exportadas ni los datos que un servicio externo pudiera haber registrado al recibir una búsqueda.
