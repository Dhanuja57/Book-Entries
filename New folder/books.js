//popup-box
//popup-overley
//add-button
var addbutton =document.getElementById("add-button")
var popupoverlay=document.querySelector(".popup-overley")
var popupbox=document.querySelector(".popup-box")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//deletebook
var deletebook=document.getElementById("Deletebook")

deletebook.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})
    //select container,addbook,booktitle,authorname,bookdes
    var container=document.querySelector(".container")
    var addbook=document.getElementById("addbook")
    var booktitle=document.getElementById("booktitle")
    var authorname=document.getElementById("authorname")
    var bookdes=document.getElementById("bookdes")

    addbook.addEventListener("click",function(event){
        event.preventDefault()
        var div=document.createElement("div")
        div.setAttribute("class","container-book")
        div.innerHTML=` <h2>${booktitle.value}</h2>
        <h4>${authorname.value}</h4>
        <p>${bookdes.value}</p>
        <button class="button" onclick="cancelbook(event)">Delete</button>`
        container.append(div)
        popupoverlay.style.display="none"
        popupbox.style.display="none"

    })
    function cancelbook(event){
        event.target.parentElement.remove()
    }

      