# Xpeditze Website

[![Website](https://img.shields.io/badge/website-xpeditze.dpdns.org-17695d)](https://xpeditze.dpdns.org)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

Sitio público independiente para presentar, promocionar y vender Xpeditze.
No contiene el backend, las licencias ni los datos locales de la aplicación de
escritorio.

## Desarrollo

```bash
npm install
npm run dev
```

## Compilación

```bash
npm run build
npm run preview
```

## Configuración comercial

Copia `.env.example` como `.env.local` y reemplaza los valores antes de
publicar. Mientras no exista un checkout, los botones llevan a la sección de
contacto.

La página evita afirmar precios, clientes o testimonios que todavía no hayan
sido definidos y verificados.

## Publicación en Cloudflare Pages

El dominio público previsto es `https://xpeditze.dpdns.org`.

1. Mantén `doc-central-website` como proyecto de Pages con Direct Upload.
2. Guarda en GitHub el secreto `CLOUDFLARE_API_TOKEN` con permiso
   **Account / Cloudflare Pages / Edit**.
3. Guarda `CLOUDFLARE_ACCOUNT_ID` y las variables `VITE_*` de `.env.example`
   como variables de GitHub Actions.
4. Integra en `main` únicamente después de revisar la rama `preview`.
5. Agrega `xpeditze.dpdns.org` desde la sección **Custom domains** del proyecto.

Las reglas de `public/_headers`, junto con `robots.txt` y `sitemap.xml`, se
copian automáticamente a la salida de Vite durante la compilación.

### Vista previa antes de producción

La rama `preview` se publica con GitHub Actions en:

`https://thealexbig.github.io/xpeditze-website/`

Flujo recomendado:

1. Integra los cambios que quieras revisar en `preview`.
2. Espera que termine la acción **Vista previa en GitHub Pages**.
3. Revisa el enlace de GitHub Pages en computadora y móvil.
4. Cuando esté aprobado, integra el mismo cambio en `main`; solo entonces la
   acción **Publicar producción en Cloudflare Pages** compila y publica en el
   proyecto `doc-central-website`.

La compilación de vista previa usa la ruta base de GitHub Pages y agrega
`noindex, nofollow` para no competir con el dominio público en buscadores.

El proyecto de Cloudflare Pages usa Direct Upload. GitHub Actions publica
únicamente desde `main` con un token guardado como el secreto
`CLOUDFLARE_API_TOKEN`; el identificador de cuenta se guarda como la variable
`CLOUDFLARE_ACCOUNT_ID`. Al ser Direct Upload, las opciones de Build watch
paths ya no aplican; el disparador de producción está definido en el workflow
de GitHub.

## Seguridad y privacidad

Consulta [PRIVACY.md](PRIVACY.md) y [SECURITY.md](SECURITY.md) antes de
agregar formularios, analítica o servicios externos.

## Licencia

Código publicado bajo la licencia Apache 2.0. La marca Xpeditze y sus
elementos identificativos no se conceden como parte de esa licencia.
