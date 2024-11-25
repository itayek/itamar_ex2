
const API_KEY="x3NsUB0oGUMwgaLdqcrIq1HrkdGklbIT6p52wWGU";


type ApodItem = {
    title: string;
    date: string;
    url: string;
    media_type: string;
    explanation: string;
  };
  
export async function getData(count: number) {
  //const API_KEY = process.env.NASA_API_KEY;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${count}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as ApodItem[]; // Returns the parsed JSON array
  } catch (error) {
    console.error("Failed to fetch data from NASA API:", error);
    return [];
  }
}
