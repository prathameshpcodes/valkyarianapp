var txtarea = document.querySelector("textarea")
var btn = document.querySelector("button")
var output = document.querySelector("#box")

var url = "https://api.funtranslations.com/translate/valyrian.json"

function constructUrl(input)
{
    return url + "?" + "text=" + input
}

function errorHandler(error){
console.log("error occurred", error)
alert("Something wrong with server! Please try again after sometime")
}

function translate(){

    var input  = txtarea.value
    fetch(constructUrl(input))
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated
    })
    .catch(errorHandler)
}

btn.addEventListener("click", translate)
