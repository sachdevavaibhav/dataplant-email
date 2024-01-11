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

export function useFetchSchedules(): [ITable['data'], React.Dispatch<React.SetStateAction<never[]>>] {
    const [schedules, setSchedules] = useState([]);
    useEffect(() => {
        const getSchedules = async () => {
            const res = await getAllSchedules();
            const data = res.data.map((item:IResponse['data']) => {
                return {
                    title: item.title,
                    desc: item.desc,
                    subject: item.subject,
                    schedule: item.frequency,
                    id: item._id
                }
            });
            setSchedules(data);
        }
        getSchedules();
    }, []);
    return [schedules, setSchedules];
}