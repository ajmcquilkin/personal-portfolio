module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'www.adammcquilkin.com'
    ],

    // Used to have cloudinary optimize images
    // loader: 'cloudinary',
    // path: 'https://res.cloudinary.com/duq3rhnd2/image/upload'
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};
