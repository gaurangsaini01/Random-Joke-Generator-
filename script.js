const button=document.querySelector(".btn");
const jokecontainer=document.querySelector(".joke")
console.log(jokecontainer)
const url="https://v2.jokeapi.dev/joke/Any?type=single"

function getJoke()
{
    fetch(url).then(response=>response.json()).then((data)=>{
       jokecontainer.textContent=`${data.joke}`
    })
    
}
button.addEventListener('click',(e)=>{
    e.preventDefault();
    getJoke();
})