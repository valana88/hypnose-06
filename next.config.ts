import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Active la compilation Styled Components côté SWC
  // (génère les noms de classes stables pour le SSR)
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
