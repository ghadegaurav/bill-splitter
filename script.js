const adduser = document.getElementById("adduser-btn")
const submit = document.getElementById("calculate")
const inputDiv = document.getElementById("input-div")
const expenseDiv = document.getElementById("expense-div")
//const inputs = document.querySelectorAll("input")

let temp = 0 
let tempid = 'demo'
let usercount=2
let idvar = 2
let isupdate = false

function demoobj(name, expense1, total1) {
   this.name = name;
   this.expense = expense1;
   this.total = total1
}



 

let mainarr =[
   {
      name: "user1",
      expense: 0,
      total :0
   },
   {
      name: "user2",
      expense: 0,
      total:0
   }
   // {
   //    name: "user3",
   //    expense : 1000
   // }
   // ,
   // {
   //    name: "user4",
   //    expense : 725
   // }
   // ,
   // {
   //    name: "user5",
   //    expense : 1500
   // }
]

function calculate() {
   if (isupdate) {
      for (i = 0; i < usercount; i++){
         mainarr[i].total = mainarr[i].expense
      }
      console.log(mainarr)
      share = 0
      totalExpense = 0
      for (i = 0; i < usercount; i++) {
         totalExpense += mainarr[i].expense
      }
      share = totalExpense / usercount
      console.log("Share is " + share)

      for (i = 0; i < usercount; i++) {
         // console.log(mainarr[i].expense)
         if (mainarr[i].total > share) {
            for (j = 0; j < usercount; j++) {
               //console.log("Second for loop")
               if (mainarr[i].total > share && mainarr[j].total < share) {
                  //console.log("Second for loop, if ")
                  temp = mainarr[i].total - share
                  if ((mainarr[j].total + temp) > share) {
                     //console.log(temp)
                     //console.log("innner-if")
                     console.log(mainarr[j].name + " Gives " + (share - mainarr[j].total) + " to " + mainarr[i].name)
                     mainarr[i].total = mainarr[i].total - (share - mainarr[j].total)
                     mainarr[j].total += (share - mainarr[j].total)
                  }
                  else {
                     //console.log(temp)
                     //console.log("innner-else")
                     console.log(mainarr[j].name + " Gives " + (temp) + " to " + mainarr[i].name)
                     mainarr[j].total += (temp)
                     mainarr[i].total = mainarr[i].total - (temp)
                  }
               }
            }
         }
      }
      isupdate = false
   }
}
//console.log(mainarr)

//let newtempobj = new demoobj(("user"+ ++usercount),0)
//mainarr.push(new demoobj(("user"+ usercount),0))

const buttonPressed = e => {
   //console.log(e.target.id)
   if (e.target.id.includes("user")) {
      isupdate = true
      //console.log(e.target.id)
      tempid = e.target.id.replace("user", "")
      //console.log(tempid)
      mainarr[tempid - 1].name = e.target.value
   }
   else if(e.target.id.includes("expense")){
      isupdate = true
      //console.log(e.target.value)
      //document.getElementById("heading").innerHTML+=e.target.value
      //document.getElementById("heading2").innerHTML = parseInt(e.target.value)
      tempid = e.target.id.replace("expense", "")
      mainarr[tempid - 1].expense = parseInt(e.target.value)
   }
}

//for (let input of inputs) {
document.addEventListener("input", e => {
   //console.log("Hiii fuck you")
   if (e.target.matches("input"))
      buttonPressed(e);
   })
   //input.addEventListener("input", buttonPressed);
//}


function myfunction() {
   //mainarr[1].expense=100
   usercount++
   //const newtempobj = Object.create(demoobj)
   mainarr.push(new demoobj(("user"+ usercount),0,0))
   //mainarr.push(Object.create(demoobj))
   //mainarr.push(newtempobj);
   //document.getElementById("heading").innerHTML="Ok now working"
   const newuser = document.createElement("input");
   const newexpense = document.createElement("input");
   newuser.placeholder = "Type Name of User " + usercount;
   newuser.id = "user" + usercount;
   
   newexpense.placeholder = "Enter total indivisual expense";
   newexpense.type = "number";
   newexpense.id="expense"+usercount
   inputDiv.appendChild(newuser);
   expenseDiv.appendChild(newexpense);
  // document.getElementById("heading2").remove()
  // mainarr[0].name=document.getElementById("user1").value
   //console.log(document.getElementById("user1").value)
   //console.log(usercount)
  // mainarr[2].name = "Gandu"
   //console.log(mainarr[3].name)
  // console.log(mainarr)

}

adduser.addEventListener("click", myfunction)
submit.addEventListener("click", calculate)
// const element = document.getElementById("adduser-btn");
// element.addEventListener("click", myFunction);

// function myFunction() {
//    console.log("Button Clicked")
//   document.getElementById("heading").innerHTML = "Hello World";
// }