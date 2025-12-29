let boxes=document.querySelectorAll(".boxes");
let win=document.querySelector(".winner");
let msg=document.querySelector(".msg")
let rset=document.querySelector("#rset")
let play0=true;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(play0===true){
        box.innerText="0";
        play0=false;
    }
    else{
        box.innerText="X";
        play0=true;
    }
    box.disabled=true;
    checkWinner();
    })
})
  
rset.addEventListener("click",()=>{
    enableBtn();

})

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
const disableBtn=()=>{
for(let box of boxes){
    box.disabled=true;
}
}

const enableBtn=()=>{
  for(let box of boxes){
    box.disabled=false;
    win.classList.add("hide");
    box.innerText="";
    play0=true;
}  
}

const showWinner=(winner)=>{
win.classList.remove("hide");
msg.innerText=`congratulations to winner ${winner}`;
disableBtn();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        let mov1=boxes[pattern[0]].innerText;
        let mov2=boxes[pattern[1]].innerText;
        let mov3=boxes[pattern[2]].innerText;
if(mov1!=="" && mov2!=="" && mov3!==""){
    if(mov1==mov2 && mov2==mov3){
        console.log("winner is "+mov1.innerText);
        showWinner(mov1);
    }
}
    }
}
