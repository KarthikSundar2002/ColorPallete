let code = document.querySelectorAll('.code');
let color = document.querySelectorAll('.color');
let generate = document.querySelector('#Generate');
let Title = document.getElementById('Title');
let Save = document.getElementById('Save');
let colors = [];
generate.addEventListener("click",colorGen);
Save.addEventListener("click", PostData);

function colorGen() {
    var letters = '0123456789abcdef';
    var hastag = ['#','#','#','#','#','#'];

    for (let i=0;i<6;i++){
        hastag[i]+=letters[Math.floor(Math.random() *16)];
        hastag[i]+=letters[Math.floor(Math.random() *16)];
        hastag[i]+=letters[Math.floor(Math.random() *16)];
        hastag[i]+=letters[Math.floor(Math.random() *16)];
        hastag[i]+=letters[Math.floor(Math.random() *16)];
        hastag[i]+=letters[Math.floor(Math.random() *16)];
    }

    for (let i=0;i<code.length;i++){
        code[i].innerHTML = hastag[i];
        color[i].style.backgroundColor = hastag[i];
        code[i].addEventListener("input",() => {
            color[i].style.backgroundColor = code[i].innerHTML;
        })

    }

}

function PostData(){
    for (let i = 0; i < 6; i++) {
        colors.push(code[i].innerText)
    }
    fetch("/",{
        method: "POST",
        body: JSON.stringify({
            title: Title.innerText.toLowerCase(),
            colors: colors
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}

colorGen();

// window.onkeyup = (e)=> {

//     if (e.keycode == 33) {

//         colorGen();

//     }

// };