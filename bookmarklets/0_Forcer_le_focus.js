const css = `
    a[href]:focus-visible,
    button:focus-visible,
    select:focus-visible,
    input:focus-visible,
    textarea:focus-visible,
    [tabindex]:focus-visible,
    [contenteditable]:focus-visible {
        outline: 2px solid #0a76f6 !important;
        outline-offset: 2px !important;
    }

    a[href],
    button,
    select,
    input:not([type="hidden"]),
    textarea,
    [tabindex],
    [contenteditable]:not([contenteditable="false"]) {
        outline: 2px solid #0a76f6 !important;
        outline-offset: 2px !important;
    }
`;

const style = document.createElement('style');
style.id = 'show-focus-styles';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
