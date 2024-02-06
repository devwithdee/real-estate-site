/** @type {import('next').NextConfig} */
const nextConfig = {

  async headers() {
    return [
        {
            // matching all API routes
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "https://real-estate-site-three.vercel.app" },
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
},
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
