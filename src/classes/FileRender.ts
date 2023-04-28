import {Options} from "./options";

export class FileRender {
    toHtml(option: Options, files: FileList) {
        $(option.previewContent).empty();
        $.each(files, function (i: number, file: File) {
            const reader: FileReader = new FileReader();
            reader.onload = function (e: ProgressEvent<FileReader>) {
                const src: string | ArrayBuffer = e.target.result;
                const img: JQuery<HTMLElement> = $(`<img src="${src}" class="${option.imgClass}" alt=""/>`);
                $(option.previewContent).append(img);
            }
            reader.readAsDataURL(file);
        });
    }
}