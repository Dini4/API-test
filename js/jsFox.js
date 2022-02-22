const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://randomfox.ca/floof/";

async function detchHandler(){
    try{
        const response = await fetch(url);
        const data = await response.json();

        image.src = data.image;
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
image.addEventListener("click", () =>{
    let isloaded = image.complete;
    if(isloaded){
        detchHandler();
    }
})
