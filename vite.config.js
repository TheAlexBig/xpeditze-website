import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubPagesPreview = process.env.GITHUB_PAGES_PREVIEW === 'true';

export default defineConfig({
  base: isGitHubPagesPreview ? '/xpeditze-website/' : '/',
  plugins: [
    react(),
    isGitHubPagesPreview && {
      name: 'github-pages-preview-noindex',
      transformIndexHtml(html) {
        return html.replace(
          'content="index, follow, max-image-preview:large"',
          'content="noindex, nofollow"',
        );
      },
    },
  ].filter(Boolean),
});
