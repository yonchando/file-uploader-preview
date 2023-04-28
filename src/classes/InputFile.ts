import {PREFIX_ClASS} from "../config";

export class InputFile {
    initialStyle(input) {
        const wrap = $(`<div>`, {
            class: this.addClass('relative w-full'.split(' '))
        });

        input.addClass(`${PREFIX_ClASS}opacity-0 ${PREFIX_ClASS}absolute ${PREFIX_ClASS}inset-0 ${PREFIX_ClASS}w-full ${PREFIX_ClASS}h-full ${PREFIX_ClASS}rounded-lg ${PREFIX_ClASS}cursor-pointer`)
        input.wrap(wrap);

        const flex = $(`<div>`, {
            class: this.addClass([
                'flex'
            ]),
        });
        input.before(flex);

        const span = $('<span>', {
            class: this.addClass(
                'block w-3/4 border border-gray-300 border-solid rounded-l-lg px-4 py-2 text-sm'.split(' '),
            ),
            text: 'Upload file',
        }).appendTo(flex);

        const button = $(`<button>`, {
            class: this.addClass('border border-gray-300 border-solid rounded-r-lg px-4 py-2 text-sm'.split(' ')),
            text: 'Upload',
        }).appendTo(flex);
    }

    private addClass(classes: string[]) {
        return classes.map((value) => {
            return `${PREFIX_ClASS}${value}`;
        }).join(' ');
    }
}