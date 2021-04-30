function changeOuterLinks() {
    document.querySelectorAll('#link-list');
    if(document.innerHtml = 'outer-link'){
        addEventListener('click', function() {
            document.target = '_blank';
        })
    }
}


export { changeOuterLinks };