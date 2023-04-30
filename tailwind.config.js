/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.ts',
        './public/*.html'
    ],
    prefix: 'file-upload-preview-',
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false
    }
}

