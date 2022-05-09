let myLeads = ["www.google.com","www.yahoo.com", "www.amircodes4u.com"]
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")



const inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function() {
   myLeads.push(inputEl.value)
   console.log(inputEl.value)
   console.log(myLeads)
})

//log out the items in myLeads array using for loop
for (let i = 0; i < myLeads.length; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li> ";
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}