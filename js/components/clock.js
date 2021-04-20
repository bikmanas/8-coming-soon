function calcTimeTillDate(date){
    const clock = new Date();
    let year = clock.getFullYear();

    let yearTarget = `${year}-${date}`;
    let yearDateObj = new Date(yearTarget);
    let currMiliseconds = yearDateObj.getTime();
    let nowInMiliseconds = Date.now();

    if(currMiliseconds < nowInMiliseconds){
        year++;
        yearTarget = `${year}-${date}`;
        yearDateObj = new Date(yearTarget);
        currMiliseconds = yearDateObj.getTime();
    } 
    
    const timeLeftInMiliseconds = currMiliseconds - nowInMiliseconds;
    const timeLeftInSeconds = Math.round(timeLeftInMiliseconds / 1000);

    const seconds = timeLeftInSeconds % 60;
    const minutes = (timeLeftInSeconds - seconds) / 60 % 60;
    const hours = (timeLeftInSeconds - seconds - minutes * 60) / 3600 % 24;
    const days = (timeLeftInSeconds - seconds - minutes * 60 - hours * 3600) / 86400;
    
    


    return { days, hours, minutes, seconds } 
}

function formatNumber(number){
    return number < 10 ? '0' + number : number;
}

function clock (selector, date){
    const DOM = document.querySelector(selector);
    const timeLeft = calcTimeTillDate(date);
    const config = ['days', 'hours', 'minutes', 'seconds'];
    
    let HTML = '';

    for (const item of config) {
        const value = timeLeft[item];
        
        let formatedValue = value;
        if(item !== config[0]){
            formatedValue = formatNumber(value);
        }   
    
        HTML += `<div class="time">
                    <div class="value">${formatedValue}</div>
                    <div class="label">${item}</div>
                </div>`;
    }
    DOM.innerHTML = HTML;
}

export { clock }