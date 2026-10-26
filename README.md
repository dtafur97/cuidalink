# CuidaLink · Landing

Landing local del proyecto CuidaLink, creada con Astro, TypeScript y CSS. Se conserva el proyecto existente y su estructura visual de verde profundo, marfil y salvia. La salida es estática y las fuentes se sirven localmente.

## Abrir la web

Ejecutar `iniciar.cmd` o, desde esta carpeta:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\iniciar.ps1
```

El iniciador utiliza las herramientas portables de este equipo cuando están disponibles. Abrir la dirección que indique la terminal; el puerto habitual es 4321 y Astro elige otro si está ocupado.

## Revisar y compilar

Con Node.js y pnpm disponibles:

```powershell
pnpm check
pnpm build
pnpm preview
```

También se pueden ejecutar las herramientas ya instaladas directamente, sin reinstalar dependencias:

```powershell
node node_modules/astro/bin/astro.mjs check
node node_modules/astro/bin/astro.mjs build
```

`dist/` contiene el sitio compilado. La entrega es local; no se publica en un alojamiento externo.

## Identidad y contenido

- CuidaLink se aplica a la marca, los textos, los metadatos, las descripciones accesibles y la descarga.
- Logo de dos eslabones conectados en `public/brand/`, compartido visualmente con Android.
- Imagen conceptual del módulo rectangular basada en la propuesta del proyecto, con acabado de producto. Creada con la herramienta integrada de generación de imágenes; la página la identifica como diseño conceptual. La fuente PNG se conserva junto a la versión WebP optimizada.
- Demo con tres capturas reales de CuidaLink 0.3.2: Inicio, Preparación y Personalización. Los selectores cambian la imagen, el texto alternativo y la explicación. No se dibuja una interfaz Android ficticia.
- Menú móvil, preguntas desplegables, navegación con teclado, preferencia de movimiento reducido y enlace para saltar al contenido.

Las capturas se obtuvieron del emulador con la app actual y sus pruebas de flujo existentes. Los PNG originales están en `../App Android/docs/capturas/0.3.2/`. Las imágenes web preservan la captura sin cambios de interfaz.

La app funciona con datos locales de prueba. El contenido mantiene explícito que el monitoreo remoto y la conexión con el hardware siguen pendientes.

## Descarga Android

`public/downloads/CuidaLink-demo.apk` contiene la misma compilación que `../App Android/entregas/CuidaLink-latest-debug.apk`. La ruta anterior `Luma-demo.apk` entrega ese mismo instalador para conservar enlaces existentes. Ambas rutas se copiaron también a `dist/` mediante la compilación.

Android conserva el identificador `pe.luma.app` y el certificado de firma de desarrollo, permitiendo actualizar la app anterior con sus datos. Los códigos y QR `LUMA-…` continúan siendo compatibles.

## Editar

- `src/pages/index.astro`: página, secciones y metadatos.
- `src/components/Brand.astro`: marca visible.
- `src/components/Device.astro`: imagen conceptual del producto.
- `src/components/AppDemo.astro`: capturas y explicación de la app.
- `src/scripts/main.ts`: menú, cambio de capturas y animaciones.
- `src/styles/global.css`: diseño y adaptación a pantallas.
- `public/brand/`: logo y símbolo en SVG.
- `public/images/`: imagen del producto y capturas Android optimizadas.

## Verificación del 26 de octubre de 2026

- Astro Check: 8 archivos; 0 errores, 0 advertencias, 0 sugerencias.
- Compilación estática completada.
- Comprobación visual en escritorio y móvil; marca y menú accesibles a 320 px.
- Los tres selectores muestran las capturas correctas con una sola selección activa.
- La descarga y su alias anterior responden correctamente y coinciden con el APK actual.
- Android: 18 pruebas unitarias y 6 instrumentadas existentes aprobadas; Lint con 0 errores y 7 advertencias.

Las dependencias fijadas se conservan: Astro 7.4.2, TypeScript 6.0.3 y pnpm 11.25.0. La configuración mantiene las cachés independientes por comando (`luma-dev`, `luma-sync` y `luma-build`) y el árbol aislado de pnpm para conservar la configuración de inicio previamente verificada.

El respaldo del código anterior y del instalador previo está en `../outputs/cuidalink-paso-1/`. Las decisiones, capturas web y encargo de imagen están en `../outputs/cuidalink-diseno/`.