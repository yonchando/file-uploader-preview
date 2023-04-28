let mix = require('laravel-mix');
const {options} = require("laravel-mix");

mix.ts('src/main.ts', 'dist/js/file_upload_preview.js')
    .postCss('src/css/main.css','dist/css/file_upload_preview.css',[
        require('tailwindcss')
    ])
    options({
        processCssUrls: false,
    })
    .disableNotifications();