import React, { useState } from 'react';
import {getWeather} from '../Api/Api';
import {Container,Text,Box,Item} from './Styled';

const WeatherApp = () => {
    const [search,setSearch] = useState('');
    const [data,setData] = useState('');


    const enter = async(e) => {
        if(e.key==='Enter') {
            const newData = await getWeather(search);
            console.log(newData);
            setData(newData);
            setSearch('');
        }
        
    }
    return (
        <Container>
               <Text.City>Weather App with React</Text.City>
           
            <Box>
                <Box.Input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder={'Search....'} onKeyPress={enter}/>
            </Box>
            {
                data && <Item>
                        <Item.Box>
                        <Item.City>{data.data.name},&nbsp;{data.data.sys.country}</Item.City>
                        <Item.Deg>{parseInt(data.data.main.temp)}°С</Item.Deg>
                        <Item.ImgBox><Item.Img src={`http://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`} alt={data.data.weather[0].main}/></Item.ImgBox>
                        <Item.Sky>{data.data.weather[0].main},{data.data.weather[0].description}</Item.Sky>
                        <Item.DegText>{data.data.main.temp_min}°С&nbsp;/&nbsp;{data.data.main.temp_max}°С</Item.DegText>
                        </Item.Box>
                </Item>
            }
        </Container>
    );
};

export default WeatherApp;