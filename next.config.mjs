/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/tii-kittinan-pages",
    assetPrefix: "/tii-kittinan-pages",
    trailingSlash: true,  // เพิ่ม trailingSlash เพื่อให้ URL มีเครื่องหมาย / ต่อท้าย
    reactStrictMode: true,
    output: "export",
  };
  
  export default nextConfig;
  