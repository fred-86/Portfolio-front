module.exports = {
    verbose: true,
    automock: false,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/fileTransformer.js',
    },
    moduleNameMapper: {
        '\\.(png|jpg|JPG|webp|ttf|woff|woff2|svg|mp4)$':
            '<rootDir>/src/__mocks__/fileMock.js',
        'swiper/css': 'swiper/swiper.min.css',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transformIgnorePatterns: ['/node_modules/(?!swiper)'],
}
