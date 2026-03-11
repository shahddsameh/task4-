var obj = {
    name: " ",
    address: " ",
    age: " "
}

var handler = {
    set(target, prop, value) {
        if(target.hasOwnProperty(prop)){
            if(prop == "name") {
                if (value.length == 7) {
                    target[prop] = value
                } else {
                    throw 'please insert a string of 7 characters only'
                }
            } else if (prop == "address") {
                if(typeof value == "string") {
                    target[prop] = value
                } else {
                    throw 'please insert an address with string value only'
                }
            } else {
                if(value >= 25 && value <= 60) {
                    target[prop] = value 
                } else {
                    throw 'your age is out of our range'
                }
            }
        } else {
            throw 'property not defined'
        }
    } }





var myProxy = new Proxy(obj, handler)
// console.log(myProxy.name = "adfghj")
// console.log(myProxy.address = 7)
// console.log(myProxy.age = 70)