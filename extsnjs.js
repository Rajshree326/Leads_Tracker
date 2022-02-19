let myleads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const leadsfromls=JSON.parse(localStorage.getItem("myleads"))
const tabBtn=document.getElementById("tab-btn")
// const tabs=[]
if(leadsfromls){
    myleads=leadsfromls
    render(myleads)
}

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
     myleads=[]
     render(myleads)
})

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
    })
    
})

inputBtn.addEventListener("click",function(){
    myleads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
})

// function saveLead(){
//     myleads.push(inputEl.value)
//     inputEl.value=""
//     renderLeads()
// }
function render(leads){
let listItems=""
for(let i=0;i<leads.length;i++){
    // template string
   listItems+=`
   <li>
       <a target='_blank' href='${leads[i]}'>
           ${leads[i]}
       </a>
   </li>
   `
}
ulEl.innerHTML=listItems
}
