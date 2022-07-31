module.exports = {
    distDir: 'build',
    images: {
        domains: [
            'res.cloudinary.com',
            'www.adammcquilkin.com',
            'images.unsplash.com'
        ],

        // Used to have cloudinary optimize images
        loader: 'cloudinary',
        path: 'https://res.cloudinary.com/duq3rhnd2/image/upload'
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    generateBuildId: () => 'build',
    webpack(config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });
        return config;
    },
};
