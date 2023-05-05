import './styling/style.css';
import { addDefautButton } from './components/projButton';

function showDefault() {
    document.querySelector('#sidebar').appendChild(addDefautButton());
}

window.addEventListener('load', showDefault);