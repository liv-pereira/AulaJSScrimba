
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById('ul-el"')

console.log(ulEl)
inputBtn.addEventListener("click", function() {
  myLeads.push("www.awesomelead.com")
  myLeads.push(inputEl.value);
  console.log(myLeads)
})


