const resources = [
    {'id': 'comp', 'name':'Competitive Programming 2017-2020', 'desc':'All my AC solutions to competitive programming problems (DMOJ, WCIPEG, Codeforces, etc.), 2017-2020', 'source':'src/img/cf.jpg', 'repo':'https://github.com/kevinjycui/Competitive-Programming'},
    {'id': 'ics3u1', 'name': 'ICS3U1 2018-2019', 'desc': 'All unit assignments from Grade 11 University Introduction to Computer Science elective ICS3U1, perfect scores', 'source':'src/img/python.png', 'repo':'https://github.com/kevinjycui/ICS3U1'},
    {'id': 'picoctf', 'name':'PicoCTF 2019', 'desc':'Solutions and writeups for the picoCTF 2019 Cybersecurity Competition held by Carnegie Mellon University ', 'source':'src/img/picoctf.png', 'repo':'https://github.com/kevinjycui/picoCTF-2019-writeup'},
    {'id': 'aoc', 'name':'Advent of Code 2019', 'desc':'Solutions for Advent of Code Programming Contest 2019 Advent Calendar', 'source':'src/img/aoc.png', 'repo':'https://github.com/kevinjycui/advent-of-code-2019'},
    {'id': 'ics4u1', 'name':'ICS4U1 2019-2020', 'desc':'All unit assignments from Grade 12 University Computer Science elective ICS4U1, perfect scores ', 'source':'src/img/python.png', 'repo':'https://github.com/kevinjycui/ICS4U1'},
    {'id': 'practicewiki', 'name':'Practice Bot Wiki', 'desc':'Complete wiki for commands and other utilities of Practice Bot: The all-competitive-programming-purpose Discord Bot', 'source':'src/img/tea_icon.png', 'repo':'https://github.com/kevinjycui/Practice-Bot/wiki'},
];

function showDesc(popup) {
    popup.className = 'popuptext show';
}

function hideDesc(popup) {
    popup.className = 'popuptext';
}

var ind = 0;

for (e of resources) {
    let link = document.createElement('a');
    link.href = e.repo;
    link.target = '_blank';

    let profile = document.createElement('div');
    profile.className = 'eventModule popup';
    let popup = document.createElement('span');
    popup.className = 'popuptext';
    popup.id = e.id;
    popup.append(document.createTextNode(e.desc));

    let head = document.createElement('h4');
    head.className = 'event-name';
    head.append(document.createTextNode(e.name))

    profile.appendChild(head);
    profile.appendChild(popup);
    profile.style.backgroundImage = 'url('+e.source+')';
    profile.id = e.id + '-wrapper';
    profile.addEventListener('mouseover', () => showDesc(document.getElementById(profile.id.split('-')[0])));
    profile.addEventListener('mouseleave', () => hideDesc(document.getElementById(profile.id.split('-')[0])));

    link.appendChild(profile);
    let element = document.getElementById('resource-dir');
    element.appendChild(link)

    ind++;

}
