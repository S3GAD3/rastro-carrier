# Publicar RASTRO CARRIER en GitHub

## Antes de crear el repositorio

- Confirme que puede distribuir el logotipo y los elementos de marca RASTRO incluidos en `index.html`.
- Compruebe el titular de copyright indicado en `LICENSE` y ajústelo si corresponde.
- Revise los enlaces de fuentes oficiales, las funciones principales y las pruebas del parser.
- Elimine cualquier dato de prueba, referencia de expediente, captura o exportación que no deba hacerse pública. No suba expedientes reales.
- Decida si el repositorio será público. GitHub Pages publicará el contenido web para cualquier visitante.

## Crear y subir el repositorio

1. Cree un repositorio vacío llamado `rastro-carrier` (o el nombre que prefiera).
2. Descomprima el paquete y suba su contenido, no la carpeta ZIP, a la raíz del repositorio.
3. Compruebe que `index.html`, `README.md` y `LICENSE` aparecen en la raíz.
4. Desde la raíz, pruebe el parser:

   ```bash
   node tests/reat-parser.test.js
   ```

5. Revise el diff antes de hacer el primer commit. No incluya expedientes, informes exportados, capturas de investigación ni datos personales.

## Activar GitHub Pages

1. Abra **Settings → Pages**.
2. En **Build and deployment**, elija **Deploy from a branch**.
3. Seleccione la rama `main` y la carpeta `/ (root)`; guarde.
4. Espere a que GitHub muestre la URL y compruebe el sitio publicado en HTTPS.
5. Pruebe en la URL real: copia de matrícula, navegación al REAT, extracción, registro de apunte, exportación e importación JSON, en escritorio y móvil.

La publicación de GitHub Pages es apta para servir esta página estática. No convierte la herramienta en un sistema de gestión segura de expedientes.

## Crear una versión

Use etiquetas de versión y notas de publicación. Para la primera publicación puede utilizar `v0.1.0`. Incluya en las notas:

- cambios funcionales;
- navegadores probados;
- incidencias conocidas;
- recordatorio de que `localStorage` no está cifrado y de que las consultas externas pueden revelar los términos buscados.

## Actualizar la herramienta

Mantenga `index.html` como fuente principal. Si cambia el parser, actualice `tests/reat-parser.test.js` y ejecute la prueba. Revise los enlaces externos y el aviso de privacidad antes de cada release. No incorpore claves API ni credenciales en el HTML.
