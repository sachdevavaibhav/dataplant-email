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