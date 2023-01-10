// let htmlA,CSSA,jsA;
// let ste score 
let scorce1=0,scorce2=0,scorce3=0,scorce4=0;

let my = [];
// fetch data from JSON and save in localstorge
fetch("js/quze.json")
.then((E)=>E.json())
.then((e)=>{
    localStorage.setItem("q",JSON.stringify(e));
    console.log(e);
    my=e;
    console.log("my");
    console.log(e);


});
if(my){

// inout your name 
let namee = document.querySelector(".yourname");
namee.innerHTML="";
swal("Write Your name:", {
    content: "input",
})
.then((value) => {
// namee.innerHTML=``;
namee.innerHTML=`${value}`;
if(value==null){
    namee.innerHTML="UnKnown";
    }
// swal(`Your Name is: ${value}`);
});

let ArrayOfAns=[];
let mylistlangsh = JSON.parse(localStorage.getItem("q"));
let randomArrayHtmlQ0;
let ArrayOtherAns;
// function get the quastion and save q in array and name lang 
function getq(LG){
    
    let arrayListLg = [];
    for(let [key,value] of Object.entries(my[0])){
        arrayListLg.push(key)
    }
    // arraya all other languag the chosed 
    arrayListLg.splice(arrayListLg.indexOf(LG),1);
    ArrayOtherAns=arrayListLg;
    let htmlArrayQ = my[0][LG];

    
    let numberQHTMl = htmlArrayQ.length;
    
    let randomArrayHtmlQ=shuffle(htmlArrayQ);
    randomArrayHtmlQ0=randomArrayHtmlQ;
    }
    
// get the qusction 


// document.childNodes[0]
// get the radiio input button 


let scorce=0;



let NameLangugeChosed="";


let theradeiobtn= document.querySelectorAll(".radio");
// console.log(theradeiobtn);


// select the langugch HTML , JS ,CSS
let theradeiotext = document.querySelectorAll(".htmllable");

    document.addEventListener("click",(B)=>{
        // console.log(B.currentTarget.childNodes[0]);
        if(B.target.className==="htmllable"){
        let cc = document.querySelectorAll(".spanLAble");
        cc.forEach((d)=>{
            d.classList.remove("active");
        });
        let c =B.target.childNodes[0];
        c.classList.add("active");
        NameLangugeChosed= B.target.id;
            // hid my q chose
            setTimeout(function(){document.querySelector(".box-q").style.display="none"},1000)
            
            setTimeout(function(){oneQ(NameLangugeChosed)},1500);
            setTimeout(getq(B.target.id),2000);
            
    }
    
    } );
// End select the langugch HTML , JS ,CSS

// one qustion 



// welcom the lang and selcet ready ; 
let mybox_Q = document.querySelector(".box-q");

let qustionSection = document.querySelector(".qustion")
// console.log()
function oneQ(v){
    let theFirstQ =document.createElement("div");
    let textFirstQ = document.createTextNode(`Welcom to the Quasction is ${v}`);
    theFirstQ.appendChild(textFirstQ);
    theFirstQ.classList.add("the-firstQ");
    qustionSection.appendChild(theFirstQ);

    let ready = document.createElement("div");
    let readybtn =document.createElement("button");
    readybtn.appendChild(document.createTextNode("Ready?"));
    ready.appendChild(readybtn);
    qustionSection.appendChild(ready);
    ready.classList.add("ready-box");
    readybtn.classList.add("ready-btn");

}

// show the question and choses after click the ready

document.addEventListener("click",function(e){
    if(e.target.className==="ready-btn"){
        
        document.querySelector(".ready-box").style.display="none";
        // console.log(randomArrayHtmlQ0);
        let checkk = document.createElement("button");
        checkk.className="checkk";
        let checkktext = this.createTextNode("CHECK");
        checkk.appendChild(checkktext);
        qustionSection.appendChild(checkk);
        let listBQ = document.createElement("div");
        listBQ.classList.add("listBQ");
        qustionSection.append(listBQ);
        let next = document.createElement("div");
        next.classList.add("next");
        let TextNext = document.createTextNode("Next");
        next.appendChild(TextNext);
        listBQ.append(next);
        let pre = document.createElement("div");
        let TextPre = document.createTextNode("Back");
        pre.appendChild(TextPre);
        pre.classList.add("pre");
        listBQ.append(pre);
        let listQ = document.createElement("div");
        listQ.classList.add("listQ");
        
        // listQ.childNodes[0].classList.add("oneQ");
        listBQ.append(listQ);
        
        
        randomArrayHtmlQ0.forEach((e,index)=>{
            let divQtext=document.createElement("div");
            divQtext.classList.add("divQtext");
            let TextQindiv = document.createTextNode(`${index+1} -  ${e.Qs} `);
            divQchose =document.createElement("div");
            divQchose.classList.add("divQchose");
            
            divQtext.append(TextQindiv);
            divQtext.appendChild(divQchose);
            listQ.append(divQtext);
            let ans1 = e.Ans;
            ArrayOfAns.push(ans1);
            // console.log("The EEENSSS");
            // console.log(ans1);
            let ans2,ans3,ans4;
            let AnsAllArray;
            // chose other anas  ,a1,a2,a3,a4
            otherans(ArrayOtherAns,ans1,ans2,ans3,ans4);
            function otherans(araya,a1,a2,a3,a4){
                var myansAnys=[];
                var random=-1;
                var AnsAraay=[];
                s();
                function s(){
                araya=shuffle(araya);
                var newAr=mylistlangsh[0][`${araya[0]}`];
                newAr=shuffle(newAr);
                myansAnys=newAr;
                random=Math.floor(Math.random() * 4);
                            }
                // console.log(myansAnys[random].Ans); 
                a2=myansAnys[random].Ans;
                s();
                a3=myansAnys[random].Ans;
                s();
                a4=myansAnys[random].Ans;
                s();
                AnsAraay.push(a2);         
                AnsAraay.push(a3);
                AnsAraay.push(a4);
                AnsAraay.push(a1);
                var AnsAraay1=new Set(AnsAraay);
                var AnsAraay2 =Array.from(AnsAraay1);
                

                if(AnsAraay2.length===4){
                    // console.log("AnsAraay2");
                    // console.log(AnsAraay2);
                    ans2=AnsAraay2[0];
                ans3=AnsAraay2[1];
                ans4=AnsAraay2[2]; 
                ans1=AnsAraay2[3];
                AnsAllArray=AnsAraay2;
                }else{otherans(araya,a1,a2,a3,a4)} 
                }
                
                // console.log("ans");
                // console.log(AnsAllArray);
                AnsAllArray=shuffle(AnsAllArray);
                for(let i=1;i<=4;i++){
                    let chosradio =document.createElement("input");
                    chosradio.type="radio";
                    chosradio.name=`${index}chose`;
                    divQchose.appendChild(chosradio);
                    let choslabel =document.createElement("label");
                    choslabel.className=`classlabel`;
                    choslabel.for=`${index}chose`;
                    divQchose.appendChild(choslabel);
                    let chsat =document.createElement("span");
                    chsat.classList.add(`chosat${index+1}`);
                    chsat.classList.add(`chosat`);
                    let chosatT = document.createTextNode(`${AnsAllArray[i-1]}`);
                    chsat.appendChild(chosatT);
                    choslabel.appendChild(chsat);

                }


        })
        let overlay=document.createElement("div");
        overlay.className="over";
        listQ.appendChild(overlay);
        countDown(0);
    //     console.log(`listQ.childNodes[0]`);
    // console.log(listQ.children[0]);
    listQ.children[0].classList.add("OneQ");
    }
    
});


let divQtextisclicekd =document.querySelectorAll(".divQtext");


// chose in the anser 
document.addEventListener("click",(e)=>{
    let ccc=0;
    if(e.target.classList.contains(`chosat1`)){
        ccc=0;
        selcet(1,0);
        scorce1=ccc;
        console.log(scorce1);
    }
    if(e.target.classList.contains(`chosat2`)){ccc=0;selcet(2,1);scorce2=ccc;}
    if(e.target.classList.contains(`chosat3`)){ccc=0;scorce3=selcet(3,2);scorce3=ccc;}
    if(e.target.classList.contains(`chosat4`)){ccc=0;scorce4=selcet(4,3);scorce4=ccc;}
    function selcet(clas,anserindex){
        
            
            let chosatt = document.querySelectorAll(`.chosat${clas}`);
            chosatt.forEach((el)=>{
                el.classList.remove("active")
                // console.log(el);
            });
            e.target.classList.add("active");
            chosatt.forEach((el,index)=>{
                if(el.classList.contains("active")){
                    if(el.innerHTML==ArrayOfAns[anserindex].toString()) {
                        // console.log("yeees");
                        ccc=1;
                        
                        
                    }else{
                        ccc=0;
                    }
                    
                }
                
            });
            
    }
    
});
// get the resulte

document.addEventListener("click",(e)=>{
    if(e.target.className==="checkk"){
        let listBQ1=document.querySelectorAll(".chosat");
        listBQ1.forEach((e)=>{
            e.classList.add("no");
        })
        e.target.classList.add("no");
        scorce=0;
        scorce=scorce1+scorce2+scorce3+scorce4;
        let scorceEl = document.querySelector(".yoursource");
        scorceEl.innerHTML="";
        let numsuece = document.createTextNode(`${scorce*25}%`);
        scorceEl.appendChild(numsuece);
        setTimeout(function(){ clearInterval(countdownIterval)},2000);
        for(let i=1;i<=4;i++){
            let chosatt = document.querySelectorAll(`.chosat${i}`);
            chosatt.forEach((el,index)=>{
                if(el.innerHTML==ArrayOfAns[i-1].toString()) {
                    el.classList.add("right");
                    
                    
                }else{
                    
                }
            });
        }
        let nextBtn=document.querySelector(".OneQ");
        nextBtn.style.cssText= `margin-left: 0%`;
        
        let nextt=document.querySelector(".next");
        nextt.classList.remove("no");
       countNExt=0;
       let overl=document.querySelector(".over");
       overl.classList.add("dis");
    }

});

let countNExt=0;
// next and prev
// let nextBtn=document.querySelector(".next");
document.addEventListener("click",(e)=>{
    if(e.target.className==="next"){
        let nextt=document.querySelector(".next");
        let pree =document.querySelector(".pre");
        console.log("next");
        let nextBtn=document.querySelector(".OneQ");
        if(countNExt>=0 && countNExt<=3){
            countNExt++;
            if(countNExt===3){
                nextt.classList.add("no")
            }
            pree.classList.remove("no");
            nextBtn.style.cssText= `margin-left: ${countNExt*-25.9}%`;
        }
    }
    if(e.target.className==="pre"){
        let nextBtn=document.querySelector(".OneQ");
        let pree =document.querySelector(".pre");
        let nextt=document.querySelector(".next");
        if(countNExt>0&&countNExt<=3){
            countNExt--;
            if(countNExt===0){
                pree.classList.add("no");
            }
            nextt.classList.remove("no");
            nextBtn.style.cssText= `margin-left: ${countNExt*-25.9}%`;
        }
        
    }
});

// function to shuffle array 
function shuffle(array){
    let current=array.length,
    temp,
    random;
    while(current > 0){

        random=Math.floor(Math.random() * current);
        

        current--;

        temp=array[current];

        array[current]=array[random];
        array[random]=temp;



    }
    return array;
}

// timer 
let timer = document.querySelector(".timer1");
function countDown(duration){
let minutes,seconds;
countdownIterval=setInterval(function(){

	minutes=parseInt(duration / 60);
	seconds = parseInt(duration % 60);

	minutes = minutes <10? `0${minutes} `:minutes;
	seconds = seconds <10? `0${seconds } `:seconds ;
	
    timer.innerHTML=`${minutes} : ${seconds}`;
    duration++; },1000)}
}
