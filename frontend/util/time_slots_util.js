const produceTimeSlots = (open, close) => {
    let openTime = new Date(open).getHours();
    let closeTime = new Date(close).getHours();
    const timeSlots = [];
    while (openTime < closeTime) {
        openTime++;
        timeSlots.push(openTime);
    }
    const full = timeSlots.map(time => {
        return time < 10 ? `0${time}:00` : `${time}:00`
    })

    const half = timeSlots.map((time) => {
        return time < 10 ? `0${time}:30` : `${time}:30`;
    });

    return [...full, ...half].sort();
}

export default produceTimeSlots;