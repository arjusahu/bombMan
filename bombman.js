let about = document.getElementsByClassName("about")[0];
let button = document.getElementsByClassName("btn")[0];
let blocks = document.getElementsByClassName("blocks")[0];
let points = document.getElementsByClassName("points")[0];
let score = document.getElementById("score");
let newdiv = document.createElement("div");
let count = 0;
let arr = [];
button.addEventListener("click", formationOfBlocks);

function formationOfBlocks() {

    newdiv.innerHTML = "";
    score.innerHTML = "0";
    points.style.display = "inline-block";
    about.style.display = "none";
    //cretes random boxes where box are placed
    for (let ran = 0; ran < 10; ran++) {
        let no = Math.ceil(Math.random() * 81);
        if (!arr.includes(no)) {
            arr[ran] = no;
        }
        else {
            ran = ran - 1;
        }
    }
    let html = "";
    for (let i = 1; i <= 81; i++) {
        html = html + `<span class="bx1" id="${i}" onclick="editbox(this.id)" class="box" style="display:inline-block;font-size:6em;
    background-color:white;margin:0em 0em 0em .1em;width:1.0em;height:1.0em;box-shadow:.3em .3em .6em black,-.05em -.05em .4em black"></span>`
        if (i % 9 == 0)
            html = html + "<br/>"
    }
    blocks.innerHTML = html;
}





let copy1 = 0;
function editbox(i) {
    button.innerHTML = "Restart";
    let score1 = document.getElementById("score").innerHTML;
    if (score1 == 70)//he will win after 70 click
    {
        let msg = document.getElementsByClassName("msg")[0]
        newdiv.setAttribute("id", "lost");
        newdiv.setAttribute("style", "font-size:11em;background-Color: rgba(133, 126, 187, 0.8);font-weight:bold;text-shadow:1px 1px 5px black;color:green");

        newdiv.innerHTML = "YOU WON 😃 ";
        msg.appendChild(newdiv);
        for (let even = 1; even <= 81; even++) {
            let v1 = document.getElementById(even);
            v1.onclick = "final()";
        }

    }
    let copy2 = copy1;
    copy1 = i;
    if (copy1 != copy2) {
        if (copy2 != 0) {
            let boxafter = document.getElementById(copy2);
            boxafter.style.backgroundColor = "white";
        }
        if (score1 == "")
            count = 1;
        else {
            count = parseInt(score1) + 1;
        }


        if (arr.includes(parseInt(i))) {
            showBomb(i);
        }

        else {
            score.innerHTML = count;
            let box = document.getElementById(i)
            box.style.backgroundColor = "green";

        }
    }
}



// function to show bomb 
function showBomb(i) {
    let bomb = document.getElementById(i);
    bomb.style.backgroundColor = "red";
    bomb.style.backgroundImage = "url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";
    for (let rand = 0; rand < 10; rand++) {
        let bomb = document.getElementById(arr[rand]);
        bomb.style.backgroundColor = "red";
        bomb.style.backgroundImage = "url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";
        bomb.style.backgroundSize = "cover";

    }
    for (let even = 1; even <= 81; even++) {
        let v1 = document.getElementById(even);
        v1.onclick = "final()";

    }
    let msg = document.getElementsByClassName("msg")[0]
    newdiv.setAttribute("id", "lost");
    newdiv.setAttribute("style", "font-size:11em;background-Color: rgba(133, 126, 187, 0.8);font-weight:bold;text-shadow:1px 1px 5px black;color:red");
    newdiv.innerHTML = "YOU LOST ☹️ ";
    msg.appendChild(newdiv);


}
