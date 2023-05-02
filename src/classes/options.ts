export class Options {
    
    public imgClass?: string;
    public previewContent: JQuery<HTMLElement>;
    public previewContentClass: string;
    public noStyle: boolean;
    public defaultImage: string|string[];
    
    constructor(options) {
        this.imgClass = options.imgClass ?? `file-upload-preview-w-full`;
        this.previewContent = options.previewContent ?? undefined;
        this.previewContentClass = options.previewContentClass ?? `file-upload-preview-flex file-upload-preview-gap-4`;
        this.noStyle = options.noStyle ?? false;
        this.defaultImage = options.defaultImage;
    }
    
    defaultContentPreview(plugin) {
        if (this.previewContent === undefined) {
            this.previewContent = $(`<div>`);
            plugin.after(this.previewContent);
        }
        $(this.previewContent).addClass(this.previewContentClass);
    }
}