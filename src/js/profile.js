const textModules = document.getElementsByClassName('text-module');
const textLines = document.getElementsByClassName('subdescrip');

function setModule(setting) {
    for (txt of textLines) {
        if (txt.id == setting) txt.style.display = 'block';
        else txt.style.display = 'none';
    }
}

textModules[2].style.borderStyle = 'solid';
setModule('default');

for (let index=0; index<textModules.length; index++) {
    let mod = textModules[index];
    mod.addEventListener('click', () => {
        for (other of textModules) other.style.borderColor = '#F7F8FA';
        mod.style.borderStyle = 'solid';
        mod.style.borderColor = '#444444'
        setModule(mod.id.split('-')[0]);
    });
    mod.addEventListener('mouseover', () => mod.style.cursor = 'pointer');
}