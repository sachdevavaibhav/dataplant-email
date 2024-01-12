export const getScheduleString = (frequency: string, repeat: string, time: Date) => {
    // Daily at 10:00 AM
    // Weekly on Monday at 10:00 AM
    // Monthly on the 1st Monday at 10:00 AM

    const REPEAT = {
        'mon': 'Monday',
        'tues': 'Tuesday',
        'wed': 'Wednesday',
        'thurs': 'Thursday',
        'fri': 'Friday',
        'sat': 'Saturday',
        'sun': 'Sunday',
        'first_mon': 'First Monday',
        'last_fri': 'Last Friday',
    }
    time = new Date(time);
    const timeStampInIST = time.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const timeInIST = timeStampInIST.split(',')[1].trim();

    if (frequency === 'daily') {
        return `Daily at ${timeInIST}`;
    } else if (frequency === 'weekly') {
        repeat = REPEAT[repeat as keyof typeof REPEAT];
        return `Weekly on ${repeat} at ${timeInIST}`;
    } else if (frequency === 'monthly') {
        repeat = REPEAT[repeat as keyof typeof REPEAT];
        return `Monthly on the ${repeat} ${timeInIST}`;
    }
};
