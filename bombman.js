let about = document.getElementsByClassName("about")[0];
let button = document.getElementsByClassName("btn")[0];
let blocks = document.getElementsByClassName("blocks")[0];
let points = document.getElementsByClassName("points")[0];
let score = document.getElementById("score");
let newdiv = document.createElement("div");
// points.setAttribute("class","text-center");

let count = 0;
console.log(about, button, blocks);
button.addEventListener("click", formationOfBlocks);

console.log("clicked");
function formationOfBlocks() {

    newdiv.innerHTML = "";
    score.innerHTML = "0";
    points.style.display = "inline-block";
    about.style.display = "none";
    let html = "";
    for (let i = 1; i <= 81; i++) {
        html = html + `<span id="${i}" onclick="editbox(this.id)" class="box" style="display:inline-block;font-size:6em;
    background-color:white;margin:0em 0em 0em .1em;width:1.5em;height:1.5em;box-shadow:.3em .3em .6em black"></span>`
        if (i % 9 == 0)
            html = html + "<br/>"
    }
    blocks.innerHTML = html;
}





let arr = [];
function editbox(i) {
    button.innerHTML = "Restart";
    let score1 = document.getElementById("score").innerHTML;
    if (score1 == 70)//he will win after 70 click
    {
        let msg = document.getElementsByClassName("msg")[0]
        newdiv.setAttribute("class", "text-success");
        newdiv.setAttribute("style", "font-size:10em");
        newdiv.innerHTML = "YOU WON";
        msg.appendChild(newdiv);
        for (let even = 1; even <= 81; even++) {
            let v1 = document.getElementById(even);
            v1.onclick = "final()";
            //console.log(v1);
        }

    }
    if (score1 == "")
        count = 1;
    else {
        count = parseInt(score1) + 1;
    }

    // let random=Math.ceil(Math.random()*81);
    for (let ran = 0; ran < 10; ran++) {
        let no = Math.ceil(Math.random() * 81);
        if (!arr.includes(no)) {
            arr[ran] = no;
        }
        else {
            ran = ran - 1;
        }
    }
    //console.log(arr, i);

    if (arr.includes(parseInt(i))) {
        // console.log(i);
        showBomb(i);
    }

    else {

        score.innerHTML = count;
        let box = document.getElementById(i)
        box.style.backgroundColor = "green";
        setTimeout(() => {
            box.style.backgroundColor = "white";
            box.innerHTML = "";
        }, 1000);

    }
}




function showBomb(i) {
    let bomb = document.getElementById(i);
    bomb.style.backgroundColor = "red";
    bomb.style.backgroundImage = "url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";
    for (let rand = 0; rand < 10; rand++) {
        let bomb = document.getElementById(arr[rand]);
        bomb.style.backgroundColor = "red";
        bomb.style.backgroundImage = "url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";

    }
    for (let even = 1; even <= 81; even++) {
        let v1 = document.getElementById(even);
        v1.onclick = "final()";
        
        //console.log(v1);
    }
    // for (let even=1;even<=81;even++)
    // {
    //     let v1 = document.getElementById(even); 
    //    // v1.onclick="final()";
    //     console.log(v1);
    // }
    score.innerHTML = "0";

    let msg = document.getElementsByClassName("msg")[0]
    newdiv.setAttribute("class", "text-danger");
    newdiv.setAttribute("style", "font-size:10em");
    newdiv.innerHTML = "GAME OVER";
    msg.appendChild(newdiv);


}




// function final()
// {
//     console.log("ggg");
//     let msg = document.getElementsByClassName("msg")[0]
//     let newdiv=document.createElement("div");
//     newdiv.setAttribute("class","text-danger");
//     newdiv.innerHTML="GAME OVERooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo";
//     msg.appendChild(newdiv);

// }