import {PREFIX_ClASS} from "../config";

export class Options {
    
    public imgClass?: string;
    public previewContent: JQuery<HTMLElement>;
    public previewContentClass: string;
    public noStyle: boolean;
    public defaultImage: string|string[];
    
    constructor(options) {
        this.imgClass = options.imgClass ?? `${PREFIX_ClASS}w-full`;
        this.previewContent = options.previewContent ?? undefined;
        this.previewContentClass = options.previewContentClass ?? `${PREFIX_ClASS}flex ${PREFIX_ClASS}gap-4`;
        this.noStyle = options.noStyle ?? false;
        this.defaultImage = options.defaultImage;
    }
    
    default(plugin) {
        if (this.previewContent === undefined) {
            this.previewContent = $(`<div>`);
            plugin.after(this.previewContent);
        }
        $(this.previewContent).addClass(this.previewContentClass);
    }
}