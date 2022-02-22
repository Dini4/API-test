const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://cataas.com/cat";

async function detchHandler(){
    try{
        const response = await fetch(url);
        // const data = await response.json();
        image.src = response.cat;
    } catch (error){
        console.log(error)
    }
}

button.addEventListener("click", () =>{
    let isloaded = image.complete;
    if(isloaded){
        image.src = "http://thecatapi.com/api/images/get?format=src&typ…amp=function%20random()%20{%20[native%20code]%20}"+Math.random();
        console.log(image)
        // detchHandler();
    }
})