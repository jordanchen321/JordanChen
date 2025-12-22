/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // required for GitHub Pages
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
