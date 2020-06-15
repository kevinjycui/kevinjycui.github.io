const subtitles = [
                'print(\'Hello World!\')', 
                'cout << "Hello World!" << endl;',
                'System.out.println("Hello World!");',
            ];

let blurb = document.createElement('p');
blurb.append(document.createTextNode(subtitles[Math.floor(Math.random()*subtitles.length)]));
blurb.className = 'subdescrip blurb';
document.getElementById('titlename').appendChild(blurb);
