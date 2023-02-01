const timeoutInMS = 15*60*1000; // 3 minutes -> 3 * 60 * 1000
let timeoutId;

const handleInactive=() =>{
    localStorage.removeItem("localAuth");
    sessionStorage.removeItem("sessionAuth");
    // window.location.replace("/");

}

const startTimer = () => {
    timeoutId = setTimeout(handleInactive, timeoutInMS);
}

const resetTimer = () => {
    clearTimeout(timeoutId);
    startTimer();
}

const setupTimers = async () => {
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
    startTimer();
}

export {setupTimers};