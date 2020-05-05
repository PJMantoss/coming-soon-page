//Set up End date for countdown (getTime === Time in milli seconds)
let launchDate = new Date("July 31, 2020 12:00:00").getTime()

//set up timer to tick every 1 second
let timer = setInterval(tick, 1000)

const tick = () => {
    //Get current time
    let now = new Date().getTime();

    //Get difference in time to get time left until it reaches 0
    let t = launchDate - now;
}