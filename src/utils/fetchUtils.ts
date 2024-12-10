import axios from "axios";

export const fetchFromApi = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
    }
};
