const BASE_URL = import.meta.env.VITE_BASE_API_URL;

interface Schedule {
    title: string;
    desc: string;
    subject: string;
    frequency: string;
    repeat: string | null;
    time: string;
}

export async function getAllSchedules() {
    try {
        const response = await fetch(`${BASE_URL}/schedules`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export async function getSchedulesByTitle(title: string) {
    try {
        const response = await fetch(`${BASE_URL}/schedules?search=${title}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const createSchedule = async (schedule: Schedule) => {
    try {
        const response = await fetch(`${BASE_URL}/schedules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(schedule),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const updateSchedule = async (id: string, schedule: Schedule) => {
    try {
        const response = await fetch(`${BASE_URL}/schedules/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(schedule),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteSchedule = async (id: string) => {
    try {
        const response = await fetch(`${BASE_URL}/schedules/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
