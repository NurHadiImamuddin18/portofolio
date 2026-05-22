/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Mengubah Next.js menjadi HTML Statis
  images: {
    unoptimized: true, // Wajib untuk GitHub Pages
  },
  basePath: '/portofolio', // Menyesuaikan dengan nama repositori kamu
  assetPrefix: '/portofolio/', // Menyesuaikan link aset dengan nama repositori
};

export default nextConfig;