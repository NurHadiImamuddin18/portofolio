/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Wajib jika Anda deploy ke GitHub Pages (Static HTML Export)
  basePath: '/portofolio',
  assetPrefix: '/portofolio',
  images: {
    unoptimized: true, // Wajib diaktifkan karena GitHub Pages tidak mendukung optimasi gambar otomatis Next.js
  },
};
export default nextConfig;