let myLeads = []

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myLeads", "www.exampleleads.com" )
// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

//Get leads from the local storage, store it in a variable, log out the variable
localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

const inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function() {
   myLeads.push(inputEl.value);
   inputEl.value = ""
   //save the myLeads array to localStorage
   localStorage.setItem("myLeads", JSON.stringify(myLeads) ) 
   renderLeads();
//    console.log(localStorage.getItem("myLeads"))
})


//log out the items in myLeads array using for loop
function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
    // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";
    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'> 
            ${myLeads[i]}
            </a>
        </li>
    `
        ulEl.innerHTML = listItems
    }
}