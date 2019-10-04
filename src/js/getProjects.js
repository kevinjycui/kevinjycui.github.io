const portfolio = [
    {'date':'2019'},
    {'name':'Geopoli w/ discord.py', 'desc':'', 'source':'src/img/geopoli.PNG', 'repo':'https://top.gg/bot/600823440802316288'},
    {'name':'Hack the North 2019 MPb3ats', 'desc':'', 'source':'src/img/medium.jpg', 'repo':'https://devpost.com/software/mpbeats'},
    {'name':'PennApps XX Hand Spoken OCR', 'desc':'', 'source':'src/img/handspoken.JPG', 'repo':'https://devpost.com/software/hand-spoken'},
    {'name':'RBC VoiceHacks Innovoicer w/ Rasa to Mycroft', 'desc':'', 'source':'src/img/mycroft.jpg', 'repo':'https://github.com/kevinjycui/innovoicer'},
    {'name':'ENFERI w/ Emotiv and Arduino', 'desc':'', 'source':'src/img/work-img.jpg', 'repo':'https://github.com/kevinjycui/enferi'},
    {'name':'Dijkstra Transportation Network', 'desc':'', 'source':'src/img/map_visual.jpg', 'repo':'https://github.com/kevinjycui/Dijkstra-Transportation-Network'},
    {'name':'Human Anatomy Model w/ Unity', 'desc':'', 'source':'src/img/human.jpg', 'repo':'https://github.com/kevinjycui/human-anatomy-model'},
    {'name':'BFS Pacman Clone', 'desc':'', 'source':'src/img/pacman.png', 'repo':'https://github.com/kevinjycui/pac-graph'},    
    {'date':'2018'},
    {'name':'EEG Cursor Controller w/ Emotiv', 'desc':'', 'source':'src/img/eeg.png', 'repo':'https://medium.com/@kevinjycui/of-mice-and-mind-creating-a-simple-eeg-cursor-control-application-7fcdad703d2f'},
    {'name':'Trinidad Guppy Simulator', 'desc':'', 'source':'src/img/trinidad.png', 'repo':'https://github.com/kevinjycui/Trinidad-Guppies'},    
    {'name':'Westmount C.I. Model UN', 'desc':'', 'source':'src/img/wcimun.JPG', 'repo':'https://wcimun.netlify.com/'},
]

for (e of portfolio) {
    if ('name' in e) {
        let link = document.createElement("a");
        link.href = e.repo;
        link.target = '_blank';
        let profile = document.createElement("div");
        profile.className = "eventModule";
        let head = document.createElement("h4");
        head.className = "event-name";
        head.append(document.createTextNode(e.name))
        let subtext = document.createElement("a");
        subtext.className = "event-descrip";
        subtext.append(document.createTextNode(e.desc));
        profile.appendChild(head);
        profile.appendChild(subtext);
        profile.style.backgroundImage = "url("+e.source+")";
        link.appendChild(profile);
        let element = document.getElementById("event-dir");
        element.appendChild(link)
    } else {
        let line = document.createElement("hr");
        let year = document.createElement("a");
        year.className = "date";
        year.append(document.createTextNode(e.date));
        let element = document.getElementById("event-dir");
        element.appendChild(line);
        element.appendChild(year);
    }
}
