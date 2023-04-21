//callback funkcije
/*let provera = function (yes,no,broj){
    if (broj%2 ==0){
        yes();
    }else{
        no();
    
    }
    
};

setTimeout(()=>console.log("prosle dve sekunde"),2000)

provera(
    ()=>  console.log("uspeo si"),
    
    () =>console.log("nisi uspeo"),
    12
    );*/
arr=['kutic','marko']
let ispis="lista najvecih cavulja";

let addListItem =()=>{
    setTimeout(()=>{

        for(let key of arr){
            ispis +="<li>"+ key +"</li>";
            
        }
        document.body.innerHTML=ispis;

    },4000)
}  
/*
let anotherItem= ()=>{
    return new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        ispis+="<li>"+"nikola"+"</li>";
        resolve()
    },3000)
})
}

anotherItem().then(addListItem)
*/
let cekaj= (resolve,reject)=>{
    setTimeout(() => {
        ispis+="<li>"+ "nikola" +"</li>"
        
        let error=true
        if(error==false)
            resolve();
        else
            reject("nes ti ne valja")
    }, 3000);

}
let addItemPromise=new Promise(cekaj);
addItemPromise.then(addListItem);
addItemPromise
    .then(addListItem)
    .catch((err)=>(document.body.innerHTML="<p>"+err+"</p>"));