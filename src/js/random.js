const subtitles = [
                "print(\"Hello World!\")", 
                "cout << \"Hello World!\" << endl;",
                "System.out.println(\"Hello World!\");",
            ];

let blurb = document.createElement("p");
blurb.append(document.createTextNode(subtitles[Math.round(Math.random()*(subtitles.length-1))]));
blurb.className = "subdescrip blurb";
document.getElementById("titlename").appendChild(blurb);
