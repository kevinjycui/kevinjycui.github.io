const announce = "Applications for Next Event Coming Soon!";

let blurb = document.createElement("h5");
blurb.append(document.createTextNode(announce));
let textbutton = document.getElementsByClassName("announce");

for (ann of textbutton) {
    ann.appendChild(blurb);
}