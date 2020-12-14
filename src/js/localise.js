var zh_CN = {
    "Kevin Cui": "崔骏扬",
    "Software Developer / Student": "软件工程师 / 学生",
    "About Me": "介绍",
    "Resumé": "简历",
    "Download": "下载",
    "Portfolio": "作品集",
    "Resources": "资源",
    "Dark Mode": "暗黑模式",
    "Light Mode": "灯光模式",
    "Solutions": "来源",
    "Blog": "博客",
    "Wiki": "维基",
    "© 2020 Kevin Junyang Cui | Toronto, ON Canada": "© 2020 Kevin Junyang Cui | 加拿大安省多伦多",
    "TL;DR": "精华",
    "Less": "更少",
    "Default": "中等",
    "More": "更多",
    "Name": "标题",
    "Year": "年",
    "PDF Download": "下载PDF",
    "LaTeX Download": "下载LaTeX",
    "Email": "电子邮件"
}

function getUrlVars() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function localise() {
    var t = document.getElementsByClassName("t");
    for (var i=0; i<t.length; i++) {
        if (t[i].textContent in zh_CN)
            t[i].textContent = zh_CN[t[i].textContent];
        else if (t[i].hasAttribute('title') && t[i].getAttribute('title') in zh_CN)
            t[i].setAttribute('title', zh_CN[t[i].getAttribute('title')])
    }
}

if (getUrlVars()['lang'] === 'zh_CN') {
    document.getElementById('en_CA').className += ' show'
    document.getElementById('zh_CN').className = document.getElementById('zh_CN').className.replace( /(?:^|\s)show(?!\S)/g , '' );
    localise()
}
else {
    document.getElementById('en_CA').className = document.getElementById('en_CA').className.replace( /(?:^|\s)show(?!\S)/g , '' );
    document.getElementById('zh_CN').className += ' show'
}