export class InputFile {
    initialStyle(input) {
        const wrap = $(`<div>`).addClass([
            'file-upload-preview-relative',
            'file-upload-preview-w-full',
        ])

        input.addClass([
            'file-upload-preview-opacity-0',
            'file-upload-preview-absolute',
            'file-upload-preview-inset-0',
            'file-upload-preview-w-full',
            'file-upload-preview-h-full',
            'file-upload-preview-rounded-lg',
            'file-upload-preview-cursor-pointer'
        ]);
        input.wrap(wrap);

        const flexForm = $(`<div>`).addClass([
            'file-upload-preview-flex',
            'file-upload-preview-items-center',
        ]);
        input.before(flexForm);

        $('<span>').addClass([
            'file-upload-preview-block',
            'file-upload-preview-w-3/4',
            'file-upload-preview-border',
            'file-upload-preview-border-gray-300',
            'file-upload-preview-border-solid',
            'file-upload-preview-rounded-l-lg',
            'file-upload-preview-px-4',
            'file-upload-preview-py-2',
            'file-upload-preview-text-sm',
        ]).text('Upload file').appendTo(flexForm);

        $(`<button>`).addClass([
            'file-upload-preview-border',
            'file-upload-preview-border-gray-300',
            'file-upload-preview-border-solid',
            'file-upload-preview-rounded-r-lg',
            'file-upload-preview-px-4',
            'file-upload-preview-py-2',
            'file-upload-preview-text-sm'
        ]).text('Upload').appendTo(flexForm);
    }
}