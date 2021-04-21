function socials(selector, data){
    const DOM = document.querySelector(selector);
    if(!DOM){
        console.error('Error, nerasta norima vieta');
        return false;
    }
    let HTML = '';

    for (const { href, icon } of data){
        HTML += `<a href="${href}" target="_blank" class="fa fa-${icon} icon"></a>`
    }
    DOM.innerHTML = HTML;
}

export { socials }