module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {
    domains: ["raw.githubusercontent.com", "i.ibb.co", "ibb.co"],
  },
  reactStrictMode: true,
};
