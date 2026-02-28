const NWS_API_BASE = "https://api.weather.gov";
const USER_AGENT = "weather-app/1.0";
export async function makeNSWRequest(url) {
    const headers = {
        "User-Agent": USER_AGENT,
        Accept: 'application/geo+json'
    };
    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    catch (error) {
        console.error("Unable to make NWS request: ", error);
        return null;
    }
}
