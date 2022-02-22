const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://dog.ceo/api/breeds/image/random";

async function detchHandler(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.message;
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