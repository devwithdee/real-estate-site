/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cssModules: true, // Enable CSS modules

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Resolve Bootstrap CSS alias
      config.resolve.alias['bootstrap/dist/css/bootstrap.min.css'] =
        'bootstrap/dist/css/bootstrap.min.css';
    }

    return config;
  },
};

module.exports = nextConfig;
