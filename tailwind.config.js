/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.ts',
        './public/*.html'
    ],
    prefix: '',
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false
    }
}

