# Central Docs Website

Sitio público independiente para presentar, promocionar y vender Central Docs.
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

El dominio público previsto es `https://centraldocssv.dpdns.org`.

1. Publica este directorio en un repositorio GitHub independiente.
2. En Cloudflare, crea un proyecto de Pages conectado al repositorio.
3. Usa `npm run build` como comando de compilación y `dist` como directorio de salida.
4. Configura en Pages las variables `VITE_*` descritas en `.env.example`.
5. Agrega `centraldocssv.dpdns.org` desde la sección **Custom domains** del proyecto.

Las reglas de `public/_headers`, junto con `robots.txt` y `sitemap.xml`, se
copian automáticamente a la salida de Vite durante la compilación.
