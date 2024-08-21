import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Search from "../search";
export default function Weather() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    async function fetchWeatherData(param) {
        try {
            setLoading(true);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=086529d37a7cf6b83eeba8521512b717`);
            const data = await response.json();
            if (data) {
                setWeatherData(data);
                setLoading(false);
            }
            console.log(data, 'data');
        }
        catch (e) {
            setLoading(false);
            console.log(e);
        }
    }
    function handleSearch() {
        fetchWeatherData(search);
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }
    useEffect(() => {
        fetchWeatherData('Los Angeles')
    }, []);

    return (
        <div>
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />

            {
                loading ? <div>loading..</div> :
                    <div>
                        <div className="city-name">
                            <h2>{weatherData?.name} , <span>{weatherData?.sys?.country}</span></h2>
                        </div>
                        <div className="date">
                            <span>{getCurrentDate()}</span>
                        </div>
                        <div>
                            {weatherData?.main?.temp}
                        </div>
                        <p classname="description">
                            {weatherData && weatherData[0] ? weatherData[0].description : ''}
                        </p>
                    </div>
            }

        </div>
    );
}