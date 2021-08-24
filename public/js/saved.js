let code = document.querySelectorAll('.code');
let color = document.querySelectorAll('.color');

let close = document.getElementById("close");
close.addEventListener("click",()=>{
    document.querySelector(".pop-up").style.display = "none";
})
for (let i=0;i<code.length;i++){

    color[i].style.backgroundColor = code[i].innerHTML;


}