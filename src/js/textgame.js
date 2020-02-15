const text = {1:[
    'You view the ticket. The ticket was printed just yesterday at the station office. It reads: "One-way ticket for one to Grande Capital from Setbury Station, Platform 5". You hand the ticket to the ticket collector and make your way to the platforms.', 
    'As you head to the stairs, an older gentleman in a neatly pressed frock coat intercepts you. From his suitcase and clipboard you can clearly see that this man is a salesman.', 
    '"Marvelous morning, my commuting compadre", he begins as he approaches you, "can I just take a minute or two of your time to tell you about some of the greatest deals you will ever find". He reaches into his coat pocket cheerily and pulls out a slightly creased businesscard.', 
    'The card reads "Mr. Julius Ebiiltloia, Senior Sales Rep, Ebiiltloia and Sons". You wonder if he is the Ebiiltloia or one of the sons. Ahead of you, you see a train pull up at platform 5. You cannot tell if it is yours, though a crowd of passengers have begun to file in. An officer blows his whistle as a couple people try to cut through, "All passengers not taking this train, please take 3 steps AWAY from the platform!"'
],
2:'Other Text'};

const choices = {1:[
'Greet the salesman. You are curious about him', 
'Greet the salesman. You are interested in purchasing something',
'Ignore the salesman. You do not wish to waste your time']}

const path = {1:[1, 3, 4]}
  
function next(num) {
    window.scrollTo(0, 0);
    console.log("----");

    var texts = document.getElementsByClassName("para");
    for (t in texts) {
        texts[t].innerHTML = text[num][t]
    }

    var page = document.getElementById("page");

    var choose = document.getElementsByClassName("choice subdescrip");

    while (choices[num].length > choose.length) {
        let head = document.createElement("div");
        head.className = "choice subdescrip";
        head.append(document.createTextNode("Sample Text"))
        choose[0].parentElement.appendChild(head)
        choose = document.getElementsByClassName("choice subdescrip");
    }

    while (choices[num].length > choose.length) {
        choose[0].parentElement.removeChild(choose[0])
        choose = document.getElementsByClassName("choice subdescrip");
    }

    choose = document.getElementsByClassName("choice subdescrip");

    for (s in choose) {
        choose[s].innerHTML = choices[num][s];
        choose[s].onmouseup = "next("+path[num][s]+")";
        choose[s].touched = "next("+path[num][s]+")";
        console.log(path[num][s])
    }

    page.innerText = num;
}