import axios from 'axios';

const api = {
    url:'https://api.openweathermap.org/data/2.5',
    key:'cb0d16f0b5d3e76bc43607d8166dd73b'
}
//weather?q={city name}&appid={API key}',
export const getWeather = async(name) => {
    const data = await axios(`${api.url}/weather?q=${name}&units=metric&appid=${api.key}`)
                .then(weather => weather)
                .catch(err => console.log(err));
        return data;
}
