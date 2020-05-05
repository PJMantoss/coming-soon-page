//Set up End date for countdown (getTime === Time in milli seconds)
let launchDate = new Date("July 31, 2020 12:00:00").getTime()

//set up timer to tick every 1 second
let timer = setInterval(tick, 1000)

const tick = () => {
    //Get current time
    let now = new Date().getTime();

    //Get difference in time to get time left until it reaches 0
    let t = launchDate - now;

    //Check if time is above 0
    if (t > 0){
        //Algorithm to calculate days...
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        // prefix any number below 10 with a "0" E.g. 1 = 01
        if (days < 10){days = "0" + days}

        // Algorithm to calculate hours
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10){hours = "0" + hours};
        
    }
}