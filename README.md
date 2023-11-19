# About File Upload Preview

Input file to has preview file before uploader.

## Installation

Require: JQuery

`npm i --save @yonchando/file-upload-preview`

## Usage

```html
<link href="node_modules/@yonchando/file-upload-preview/dist/css/file_upload_preview.css" />

<input type="file" id="upload" data-default-image="defualt.png" />

<div class="preview"></div>

<script src="node_modules/@yonchando/file-upload-preview/dist/css/file_upload_preview.js"></script>
```

```javascript
// use default
$("#upload").fileUploader();

// custom preview content and class img
$("#upload").fileUplaoder({
  previewContent: $(".preview"),
  imgClass: "custom"
});
```

## Configs
|Property | Type | Required |
|---------|------|----------|
|`imgClass`| String | Optional|
|`previewContent`| JQuery\<HTMLElement\> | Optional|
|`previewContentClass`| String | Optional|
|`noStyle`| Boolean | Optional|
|`defaultImage`| String | Optional|

> Note: You can use config in input element with attribute data.

