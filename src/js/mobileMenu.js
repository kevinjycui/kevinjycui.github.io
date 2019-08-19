const icons = document.getElementsByClassName("navIcon smallIcon");
const texts = document.getElementsByClassName("overlay");
const flyoutElement = document.getElementsByClassName("title")[0];

if (screen.width <= 1080) {
    let mobile = document.getElementsByClassName("mobile")[0];
    mobile.style.display = 'inline';
    for (i of icons) {
        i.style.display = "none";
    }
    for (t of texts) {
        t.style.display = "none"
    }
} else {
    if (flyoutElement.style.width == '50%') {
        close();
    }
    let mobile = document.getElementsByClassName("mobile")[0];
    mobile.style.display = 'none';
    for (i of icons) {
        i.style.display = "inline";
    }
    for (t of texts) {
        t.style.display = "inline"
    }
}

document.addEventListener("click", (evt) => {
    if (screen.width <= 1080) {

        let targetElement = evt.target;
        let mobile = document.getElementsByClassName("mobile")[0];

        do {
            if (targetElement == mobile) {
                open();
                mobile.style.display = 'none';
                return;
            }
            for (i of icons) {
                if (targetElement == i) {
                    close();
                    mobile.style.display = 'inline';
                    return;
                }
            }
            if (targetElement == flyoutElement) {
                return;
            }
            targetElement = targetElement.parentNode;
        } while (targetElement);
        close();
        mobile.style.display = 'inline';
    }
});

window.onresize = () => {
    width = this.innerWidth;
    height = this.innerHeight;
    if (width <= 1080) {
        let mobile = document.getElementsByClassName("mobile")[0];
        if (flyoutElement.style.width == '50%') {
            mobile.style.display = 'none';
            for (i of icons) {
                i.style.display = "inline";
            }
            for (t of texts) {
                t.style.display = "inline"
            }
        } else {
            mobile.style.display = 'inline';
            for (i of icons) {
                i.style.display = "none";
            }
            for (t of texts) {
                t.style.display = "none"
            }
        }
    } else {
        if (flyoutElement.style.width == '50%') {
            close();
        }
        let mobile = document.getElementsByClassName("mobile")[0];
        mobile.style.display = 'none';
        for (i of icons) {
            i.style.display = "inline";
        }
        for (t of texts) {
            t.style.display = "inline"
        }
    }
}

let open = () => {
    //mobile.style.display = 'none';
    for (i of icons) {
        i.style.display = 'inline';
    }
    for (t of texts) {
        t.style.display = 'inline';
    }
    flyoutElement.style.animationName = 'slideIn';
    flyoutElement.style.animationDuration = '0.8s';
    flyoutElement.style.animationIterationCount = '1';
    flyoutElement.style.maxWidth = '50%';
    flyoutElement.style.width = '50%';
}

let close = () => {
    //mobile.style.display = 'inline';
    for (i of icons) {
        i.style.display = 'none';
    }
    for (t of texts) {
        t.style.display = 'none';
    }
    flyoutElement.style.animationName = 'slideOut';
    flyoutElement.style.animationDuration = '0.8s';
    flyoutElement.style.animationIterationCount = '1';
    flyoutElement.style.maxWidth = '5%';
    flyoutElement.style.width = '5%';
}