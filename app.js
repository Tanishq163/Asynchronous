const output = (string) => {
    console.log(string);
}

output("Tanishq Kashyap");

setTimeout(() => {
    output("Hello World!");
}, 2000);


const getWords = () => {
    console.log("Apple");
    setTimeout(() => {
       console.log("Apple2"); 
    }, 3000);
    setTimeout(() => {
        console.log("Apple3");
    }, 5000);
    setTimeout(() => {
        console.log("Final Apple");
    }, 6000);
}


const done = () => {
    console.log("Job's done!");
}

const countdown = (num, callback) => {
    if(num === 0){
        callback();
    }
    if(num>0){
        console.log(num);
    }else{
        clearTimeout(countdown);
    }
    setTimeout(() => {
        countdown(num-1, callback);
    }, 1000);
}


let lunchTime = true;

const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if(lunchTime === true){
            let lunchObj = {
                lunch: "your favorite lunch",
                drink: "your favorite beverage"
            };
            resolve(lunchObj);
        } else {
            let err = new Error("this is a message from me.");
            reject(err);
        }
    })
}

orderMeSomeFood()
.then((value) => {
    console.log(value);
})
.catch((err) => {
    console.log(err);
})
