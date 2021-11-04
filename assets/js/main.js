let subscribe = document.getElementById("subscribe")
let subscribed = document.getElementById("subscribed")

let email = document.getElementById("email")
let message = document.getElementById("message")
let name = document.getElementById("name")

function subscribeForm(){
    subscribe.classList.remove("hide")
    subscribe.classList.add("show")
    subscribe.scrollIntoView()
}

function sendMessage(){
    subscribe.classList.remove("show")
    subscribe.classList.add("hide")
    subscribed.classList.remove("hide")
    subscribed.classList.remove("show")
    console.log(name.value)
    console.log(email.value)
    console.log(message.value)
}

function closeWindow(){
    subscribed.classList.remove("show")
    subscribed.classList.add("hide")
}
