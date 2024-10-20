const fakeRequest = (url)=>{
    return new Promise((resolve, reject)=>{
        const rand = Math.floor(Math.random()*10);
        setTimeout(()=>{
            if(rand<7){
                resolve("Successfully connected to fake req");
            }
            reject("Failed to connect to fake");
        },1000)

    })

}

fakeRequest('dog.com/page1').then((data)=>{
    console.log("Your Fake data here", data)
}).catch((err)=>{
    console.log("Failed!",err)
})