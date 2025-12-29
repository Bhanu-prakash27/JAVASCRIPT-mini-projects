const BaseUrl=`https://api.exchangerate-api.com/v4/latest`;
const drop=document.querySelectorAll("select");
const btn=document.querySelector("#btn");
const inp=document.querySelector("input");

const msg=document.querySelector("#msg");
for(let dd of drop){
    for(let country in countryList){
        let val=document.createElement("option");
        val.innerText=country;
        val.value=country;
        if(country==="USD" && dd.id==="selectfrom"){
val.selected="selected";
        }
        else if(country==="INR" && dd.id==="selectto"){
val.selected="selected";
        }
    dd.append(val);
    }
    dd.addEventListener("change",(evt)=>{
updateflag(evt.target);
    })
}

const updateflag=(element)=>{
 let contryflag=element.value;
 let country=countryList[contryflag];
 let newsrc=`https://flagsapi.com/${country}/flat/64.png`;
 let i=element.parentElement.querySelector("img");
 i.src=newsrc;
}

btn.addEventListener("click",async(e)=>{
    e.preventDefault();
    const from_country=document.querySelector("#selectfrom").value;
    const to_country=document.querySelector("#selectto").value;
    let val=inp.value;
    if(val==="" ||val<0){
        inp.value=1;
    }

    const res=await fetch(`${BaseUrl}/${from_country}`);
    const data=await res.json();
    let rate=data.rates[to_country];
    let total=(val*rate).toFixed(3);
    msg.innerText=`${val} ${from_country} = ${total} ${to_country} `;
})

