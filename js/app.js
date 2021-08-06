'use strict'


let a =["daa",0.1,3,'c'] 


let div =document.getElementById("dom");
let ul = document.createElement("ul") 
div.appendChild(ul)
for(let i=0 ; i<a.length ;i++)
{
    let li =document.createElement("li")
    li.textContent= a[i]
    ul.appendChild(li)
}
let li =document.createElement("li")
li.textContent="k"
ul.appendChild(li)


const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    render : function(){
        let name1 = person.fullName();
        let ppp = document.createElement("p") 
        ppp.textContent= this.id + " - " + name1
        div.appendChild(ppp)
    }
  };


 person.render() 



 let longbottom= document.createElement("button")
 longbottom.textContent="change color"
 div.appendChild(longbottom)
 longbottom.addEventListener("click", function(){
     let body = document.querySelector("body")
     body.style.backgroundColor="lightblue"
 }) 























