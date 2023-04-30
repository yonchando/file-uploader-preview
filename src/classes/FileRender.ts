import {Options} from "./options";

export class FileRender {
    toHtml(option: Options, files: FileList) {
        $(option.previewContent).empty();
        $.each(files, (i: number, file: File) => {
            const reader: FileReader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                const src: string | ArrayBuffer = e.target.result;
                this.appendContent(option, src);
            }
            reader.readAsDataURL(file);
        });

        return this;
    }

    renderDefaultImage(option: Options) {
        const images: string[] = typeof option.defaultImage === 'string' ? option.defaultImage.split('|') : option.defaultImage;
        $.each(images, (i: number, value: string) => {
            this.appendContent(option, value);
        });
        return this;
    }

    appendContent(option, src) {
        const img: JQuery<HTMLElement> = $(`<img src="${src}" class="${option.imgClass}" alt=""/>`);
        $(option.previewContent).append(img);
    }
}