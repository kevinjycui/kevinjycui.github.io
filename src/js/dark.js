function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function toggleDark() {
    var darkMode = document.getElementsByClassName('dark-mode');
    darkMode[0].classList.toggle('show');
    var lightMode = document.getElementsByClassName('light-mode');
    lightMode[0].classList.toggle('show');

    var light = document.getElementsByClassName('lightback');
    
    if (darkMode[0].className.match(/(?:^|\s)show(?!\S)/)) {
        for (var index = 0; index < light.length; index++)
            light[index].className = light[index].className.replace( /(?:^|\s)darkback(?!\S)/g , '' );
        document.getElementsByClassName('mainhead')[0].className = document.getElementsByClassName('mainhead')[0].className.replace( /(?:^|\s)darkback(?!\S)/g , '' );
        document.getElementById('titlename').className = document.getElementById('titlename').className.replace( /(?:^|\s)darkback(?!\S)/g , '' );
        portfolioPins = document.getElementsByClassName('portfolio-pin');
        for (var index = 0; index < portfolioPins.length; index++) {
            portfolioPins[index].src = portfolioPins[index].src.replace( '&theme=tokyonight', '' );
        }
    }
    else {
        for (var index = 0; index < light.length; index++)
            light[index].className += ' darkback';
        document.getElementsByClassName('mainhead')[0].className += ' darkback';
        document.getElementById('titlename').className += ' darkback';
        portfolioPins = document.getElementsByClassName('portfolio-pin');
        for (var index = 0; index < portfolioPins.length; index++) {
            portfolioPins[index].src += '&theme=tokyonight';
        }
    }

}
