import { useState, useEffect } from "react";
import { getAllSchedules } from "../../../utils/apiMethods";

interface ITable {
    data: {
        title: string,
        desc: string,
        subject: string,
        schedule: string,
        id: string
    }[]
}

interface IResponse {
    data: {
        title: string,
        desc: string,
        subject: string,
        frequency: string,
        repeat: string,
        createdAt: Date,
        time: Date
        _id: string
    }

}

const getScheduleString = (frequency: string, repeat: string, time: Date) => {
    // Daily at 10:00 AM
    // Weekly on Monday at 10:00 AM
    // Monthly on the 1st Monday at 10:00 AM

    const REPEAT = {
        'mon': 'Monday',
        'tue': 'Tuesday',
        'wed': 'Wednesday',
        'thu': 'Thursday',
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

export function useFetchSchedules(): [ITable['data'], React.Dispatch<React.SetStateAction<never[]>>] {
    const [schedules, setSchedules] = useState([]);
    useEffect(() => {
        const getSchedules = async () => {
            const res = await getAllSchedules();
            const data = res.data.map((item:IResponse['data']) => {
                const schedule = getScheduleString(item.frequency, item.repeat, item.time);
                return {
                    title: item.title,
                    desc: item.desc,
                    subject: item.subject,
                    schedule: schedule,
                    id: item._id
                }
            });
            setSchedules(data);
        }
        getSchedules();
    }, []);
    return [schedules, setSchedules];
}