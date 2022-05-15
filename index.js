let questions=document.querySelectorAll(".question");
let answers=document.querySelectorAll(".ans");

for(let i=0;i<questions.length;i++)
{
    questions[i].addEventListener('click',()=>{
        // console.log(e);
        if(questions[i].classList.contains("bold"))
        {
            console.log("kya");
            questions[i].classList.remove("bold");
            answers[i].classList.remove("display");
        }
        else{
            answers[i].classList.add("display");
            questions[i].classList.add("bold");
            
        }
       
        
        
        
    })
    
    // document.querySelector("body").addEventListener('click',(e)=>{
    //     if(e.target=="")
    //     questions[i].classList.remove("bold");
    //     answers[i].classList.remove("display");
    
    // })
    
}

