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

1. Publica este directorio en un repositorio GitHub independiente.
2. En Cloudflare, crea un proyecto de Pages conectado al repositorio.
3. Usa `npm run build` como comando de compilación y `dist` como directorio de salida.
4. Configura en Pages las variables `VITE_*` descritas en `.env.example`.
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
4. Cuando esté aprobado, integra el mismo cambio en `main`; solo entonces
   Cloudflare ejecuta la compilación de producción.

La compilación de vista previa usa la ruta base de GitHub Pages y agrega
`noindex, nofollow` para no competir con el dominio público en buscadores.

En Cloudflare Pages, la rama de producción es `main`, las implementaciones de
ramas de vista previa están desactivadas y las rutas observadas son:

- Incluidas: `*`
- Excluidas: `.github/*`, `README.md`, `PRIVACY.md`, `SECURITY.md`, `LICENSE`,
  `.gitignore`

## Seguridad y privacidad

Consulta [PRIVACY.md](PRIVACY.md) y [SECURITY.md](SECURITY.md) antes de
agregar formularios, analítica o servicios externos.

## Licencia

Código publicado bajo la licencia Apache 2.0. La marca Xpeditze y sus
elementos identificativos no se conceden como parte de esa licencia.
