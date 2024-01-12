import { useState, useEffect } from "react";
import { getAllSchedules } from "../../../utils/apiMethods";
import { getScheduleString } from "../utils/getScheduleString";

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

export function useFetchSchedules(): [ITable['data'] | null, React.Dispatch<React.SetStateAction<null>>] {
    const [schedules, setSchedules] = useState(null);
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