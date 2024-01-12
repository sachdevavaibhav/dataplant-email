const BASE_URL = import.meta.env.VITE_BASE_API_URL;

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
