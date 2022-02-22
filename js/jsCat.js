const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://cataas.com/cat";


button.addEventListener("click", () =>{
    let isloaded = image.complete;
    if(isloaded){
        image.src = "http://thecatapi.com/api/images/get?format=src&typ…amp=function%20random()%20{%20[native%20code]%20}"+Math.random();
    }
})