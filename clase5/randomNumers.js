const obj = {}

for (let index = 0; index < 10000; index++) {
    
    let randomNumber = Math.ceil(Math.random()*20);
    
    obj[randomNumber] ? obj[randomNumber]++ : obj[randomNumber] = 1
}

console.log(obj);