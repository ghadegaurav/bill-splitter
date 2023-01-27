const adduser = document.getElementById("adduser-btn")
const removeuser = document.getElementById("removeuser-btn")
const submit = document.getElementById("calculate")
const inputDiv = document.getElementById("input-div")
const expenseDiv = document.getElementById("expense-div")
const resultDiv = document.getElementById("resultdiv")
const result = document.getElementById("heading3")

let resultstring = " "
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
      share = Math.round(totalExpense / usercount)
      const newline = document.createElement("p");
      resultDiv.appendChild(newline);
      newline.innerHTML = "Share is " + share
      console.log("Share is " + share)

      for (i = 0; i < usercount; i++) {
         if (mainarr[i].total > share) {
            for (j = 0; j < usercount; j++) {
               if (mainarr[i].total > share && mainarr[j].total < share) {
                  temp = mainarr[i].total - share
                  const newline = document.createElement("p");
                  resultDiv.appendChild(newline);
                  if ((mainarr[j].total + temp) > share) {
                     newline.innerHTML=mainarr[j].name + " Gives " + (share - mainarr[j].total) + " to " + mainarr[i].name
                     mainarr[i].total = mainarr[i].total - (share - mainarr[j].total)
                     mainarr[j].total += (share - mainarr[j].total)
                  }
                  else {
                     newline.innerHTML=mainarr[j].name + " Gives " + (temp) + " to " + mainarr[i].name
                     mainarr[j].total += (temp)
                     mainarr[i].total = mainarr[i].total - (temp)
                  }
               }
               console.log(resultstring)
            }
         }
      }
      isupdate = false
   }
}

const buttonPressed = e => {
   if (e.target.id.includes("user")) {
      isupdate = true
      tempid = e.target.id.replace("user", "")
      mainarr[tempid - 1].name = e.target.value
      resultDiv.innerHTML= ""
   }
   else if(e.target.id.includes("expense")){
      isupdate = true
      tempid = e.target.id.replace("expense", "")
      mainarr[tempid - 1].expense = parseInt(e.target.value)
      resultDiv.innerHTML= ""
   }
}

document.addEventListener("input", e => {
   if (e.target.matches("input"))
   buttonPressed(e);
})

function myfunction() {
   isupdate=true
   usercount++
   mainarr.push(new demoobj(("user"+ usercount),0,0))
   const newuser = document.createElement("input");
   const newexpense = document.createElement("input");
   
   newuser.placeholder = "Type Name of User " + usercount;
   newuser.id = "user" + usercount;
   
   newexpense.placeholder = "Enter total indivisual expense";
   newexpense.type = "number";
   newexpense.id="expense"+usercount
   
   inputDiv.appendChild(newuser);
   expenseDiv.appendChild(newexpense);
   
   document.getElementById("usercountdisplay").innerHTML = "Total users are "+usercount
   resultDiv.innerHTML= ""
}

function removeuserfn() {
   if (usercount > 2) {
      resultDiv.innerHTML= ""
      isupdate=true
      document.getElementById("user"+usercount).remove()
      document.getElementById("expense" + usercount).remove()
      mainarr.pop()
      usercount--
      console.log(mainarr)
   }
}

adduser.addEventListener("click", myfunction)
submit.addEventListener("click", calculate)
removeuser.addEventListener("click",removeuserfn)