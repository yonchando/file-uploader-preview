let mix = require('laravel-mix');

mix.ts('src/main.ts', 'dist/js/file_upload_preview.js')
    .disableNotifications();