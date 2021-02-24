function great(){
    return "Hello!"
}

function respond(){
    return setTimeout(()=> {
return "Hey!"
    }, 100)
}

great();
respond();