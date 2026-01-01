

let formElement = document.querySelector(".reg-form");

let userData = JSON.parse(localStorage.getItem("users")) || [];

formElement.addEventListener('submit',(e)=>{
   
 const userName = e.target.name.value;
 const course = e.target.course.value;
 const address = e.target.address.value;

 let objData = {
    userName,
    course,
    address, 
 }
  userData.push(objData);
      localStorage.setItem("users", JSON.stringify(userData));

  
    storeDataInTAble();
    setTimeout(()=>{
        e.target.firstElementChild.innerHTML = "Data Submitted";

    },1000)
     setTimeout(()=>{
        e.target.firstElementChild.innerHTML = "";

    },2000)

  
  
   e.preventDefault();
 e.target.reset();
    
})

let tabelBody = document.querySelector('tbody');
let storeDataInTAble = ()=>{
    let tabelRow = ''
    userData.forEach((item,index)=>{
         tabelRow+= `
          <tr>
            <td>${index+1}</td>
             <td>${item.userName}</td>
              <td>${item.course}</td>
               <td>${item.address}</td>
               <td del-id="${index}">Delete</td>
        </tr>`
        
    })
    tabelBody.innerHTML = tabelRow;
}

tabelBody.addEventListener("click",(e)=>{

   
    if(e.target.tagName=="TD")
   {

     
        let delId = e.target.getAttribute("del-id");
        if(confirm("Do You want to delete this record")){
            userData.splice(delId,1);
             localStorage.setItem("users", JSON.stringify(userData));

            
            storeDataInTAble();
        }
       
     }
})


storeDataInTAble();