
const choices=document.querySelectorAll(".choice");
const userScore=document.querySelector("#userscore");
const compscore=document.querySelector("#compscore");
const msg=document.querySelector("#msg");
const btn=document.querySelector("#rset");

btn.addEventListener("click",()=>{
    userScore.innerText="0";
    compscore.innerText="0";
})

const generateCompChoice=()=>{
    const options=["rock","paper","scissor"];
    let val=Math.floor(Math.random()*3);
    return options[val];
}
const checkwinner=(uw,uc,cc)=>{
    if(uw){
        msg.innerText=`congratulations user!user choice  ${uc} beats ${cc}`;
        msg.computedStyleMap.color="green";
        userScore.innerText=Number(userScore.innerText)+1;
    }
    else{
        msg.innerText=`computer choice  ${cc} beats ${uc}`;
        msg.computedStyleMap.color="red";
        compscore.innerText=Number(compscore.innerText)+1;
    }
}

const showWinner=(uc,cc)=>{
if(uc===cc){
msg.innerText=`Match drawn userchoice is ${uc} and comp choice${cc}`;
}
else{
    let userwin=true;
    if(uc==="rock"){
        userwin=cc==="paper"?false:true;
    }
    else if(uc==="scissor"){
        userwin=cc==="rock"?false:true;
    }    
    else{
        userwin=cc==="scissor"?false:true;
    }
    checkwinner(userwin,uc,cc);
}
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        let compChoice=generateCompChoice();
        showWinner(userChoice,compChoice);
    })
})
