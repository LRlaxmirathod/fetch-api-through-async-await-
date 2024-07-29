// fetch api using then catch//

let button = document.querySelector("#button")
let p = document.querySelector("#p")

let url = "https://catfact.ninja/fact";

function get(){
    fetch(url)
    .then((response)=>{
        console.log(response)
        return response.json();
    })
    .then((data)=>{
        console.log(data)
        p.innerText = data.fact
    })

}

button.addEventListener('click' , function(e){
    console.log("button was clicked")
    get()
    console.log(e.target)
    console.log(e.type)
    console.log(e.timeStamp)
    console.log(e.bubbles)
    console.log(e.currentTarget)
    console.log(e.clientX)
    console.log(e.clientY)
})



