let allQues = document.querySelectorAll(".item h3");
allQues.forEach((q,i)=>{
  


    q.addEventListener('click',(e)=>{
           allQues.forEach((ques,ind)=>{

           })


        if(e.target.tagName == "SPAN"){
            q.nextElementSibling.classList.toggle('show');
        if(q.lastElementChild.innerHTML == "+"){
            q.lastElementChild.innerHTML = "-"
        }
        else{
            q.lastElementChild.innerHTML = "+"
        }
        }

        
    })
})
    
