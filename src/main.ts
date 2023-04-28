import {Options} from "./classes/options";
import {FileRender} from "./classes/FileRender";
import {InputFile} from "./classes/InputFile";


$.fn["fileUploader"] = function (options) {
    return $.each(this, function () {
        const plugin = $(this);

        const dataAttribute = $(plugin).data();

        const settings = $.extend(options, dataAttribute);
        
        const option: Options = new Options(settings);
        
        option.default(plugin);
        
        if(!option.noStyle){
            new InputFile().initialStyle(plugin);
        }

        plugin.on('change', function (): void {
            const files: FileList = this.files;
            new FileRender().toHtml(option,files);
        });
    });
}