import React, { useEffect, useState } from "react";
import LeftTab from "./LeftTab";
import RightTab from "./RightTab";

const Dashboard = () => {
    const [currentData, setCurrentData] = useState();
    // const [iP, setIP] = useState();
    const [city, setCity] = useState();
    
    const fetchIPData = () => {
        fetch('https://api.ipify.org?format=json')
        .then(response => { 
            return response.json() 
        })
        .then(data => {
            console.log(data)
            fetchCityData(data.ip);
        })
        .catch(error => {
            console.error("Error fetching IP address:", error);
        });         
    }

    const fetchCityData = (ip) => {
        fetch(`http://ip-api.com/json/${ip}`)
        .then(response => { 
            return response.json() 
        })
        .then(data => {
            console.log(data)
            setCity(data?.city)
        })
    }
    
    const fetchCurrentData = () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=a2a15624bbd8488f8df51915241710&q=${city}&aqi=yes`)
        .then(response => { 
            return response.json() 
        })
        .then(data => {
            console.log(data)
            setCurrentData(data)
        })
    }
    useEffect(() => {
        fetchCurrentData();
        // fetchCitiesData();
        setInterval(fetchCurrentData, 100000);
    },[city])
    
    useEffect(() => {
        fetchIPData();
    },[])

    // const fetchCitiesData = () => {
    //     // fetch('https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api/IN.json')
    //     fetch('https://services2.arcgis.com/5I7u4SJE1vUr79JC/arcgis/rest/services/UniversityChapters_Public/FeatureServer/0/query?where=1%3D1&outFields=City&outSR=4326&f=json')
    //     .then(response => { 
    //         return response.json() 
    //     })
    //     .then(data => {
    //         console.log(data)
    //     })
    // }
    
    





    return (
        <div style={{display:"flex", height:"95vh" , flexWrap:"wrap", gap:"8px", margin:"2vh", borderRadius:"32px", backgroundColor:"white"}}>
            <LeftTab currentData={currentData}/>
            <RightTab currentData={currentData}/>
        </div>
    )
}

export default Dashboard;