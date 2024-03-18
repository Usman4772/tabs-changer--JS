let data=[
    {id:1,title:"Music",category:"music"},
    {id:2,title:"Podcasts",category:"podcasts"},
    {id:3,title:"Hip Hop",category:"hip hop"},
    {id:4,title:"News",category:"news"},
    {id:5,title:"Games",category:"games"},
]
let btnContainer=document.querySelector(".buttons")
let contentContainer=document.querySelector(".content")

data.forEach(data=>{
    let button=document.createElement("button")
    button.innerHTML=data.title
    button.id=data.id
    button.setAttribute("data-category",data.category)
    btnContainer.appendChild(button)
})


let buttons=document.querySelectorAll("button")


buttons.forEach(btn=>btn.addEventListener("click",showData))

function showData(){
let category=this.dataset.category

//!Using ForEach
data.forEach(data=>{

    if(data.category===category){
        contentContainer.innerHTML=""
        let div=document.createElement("div")
        div.innerHTML=data.title
        contentContainer.appendChild(div)
    }
})




//!Using Filter Method
// let content=data.filter(data=>data.category==category)
// console.log(content)
// let div=document.createElement("div")
// div.innerHTML=content[0].title
// contentContainer.innerHTML=""
// contentContainer.appendChild(div)
}