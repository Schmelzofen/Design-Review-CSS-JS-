let subscribe = document.getElementById("subscribe")
let subscribed = document.getElementById("subscribed")

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
}

function closeWindow(){
    subscribed.classList.remove("show")
    subscribed.classList.add("hide")
}