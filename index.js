//using  async await 

let button = document.querySelector("#button")
let p = document.querySelector("#p")

let url = "https://catfact.ninja/fact";

async  function get(){
    let response = await fetch(url);
    console.log(response)
    let data = await response.json()
    console.log(data)
    p.innerText = data.fact;
}

button.addEventListener('click'  , function(){
get()

})


