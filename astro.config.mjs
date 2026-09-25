import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/the-grinders/',
  site: 'https://the-grinders.example.com',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })],
});