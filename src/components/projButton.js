function addDefautButton() {
    let button = document.createElement('button');
    button.id = "proj-button"
    button.classList.add('proj-button');
    button.type = 'button';

    button.innerText="New Project"

    return button;
}

export { addDefautButton };