const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://aws.random.cat/meow?ref=public-apis";

async function detchHandler(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.file;
    } catch (error){
        console.log(error)
    }
}

button.addEventListener("click", () =>{
    let isloaded = image.complete;
    if(isloaded){
        detchHandler();
    }
})