const members = [
    {'name':'RBC Royal Bank ', 'role':' Innovation Developer July 2019 - August 2019', 'source':'src/img/rbc-logo.jfif'},
    {'name':'Toronto Youth Network ', 'role':' Web Developer July 2019 - October 2019', 'source':'src/img/tyn-logo.png'},
    {'name':'Triway Education ', 'role':' Mathematics Tutor February 2019 - August 2019', 'source':'src/img/tw-logo.png'},
    {'name':'The Knowledge Society (TKS) ', 'role':' Alumni September 2018 - June 2019', 'source':'src/img/tks-logo.png'},
    {'name':'DMOJ: Online Judge ', 'role':' Problem Setter for Triway Cup May 2019 - June 2019', 'source':'src/img/dmoj-logo.png'},
]

for (member of members) {
    let profile = document.createElement("div");
    profile.className = "profModule";
    let image = document.createElement("img");
    image.className = "exp-icon";
    image.src = member.source;
    let head = document.createElement("h4");
    head.className = "exp-name";
    head.append(document.createTextNode(member.name))
    let subtext = document.createElement("a");
    subtext.className = "exp-role";
    subtext.append(document.createTextNode(member.role));
    profile.appendChild(image);
    profile.appendChild(head);
    profile.appendChild(subtext);
    let element = document.getElementById("team-nest");
    element.appendChild(profile)
}