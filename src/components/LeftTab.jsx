import React, { useEffect, useState } from 'react'
import wind from "./../assets/wind.png"
import moisture from "./../assets/moisture.png"

const LeftTab = ({currentData}) => {
    const [timeInt, setTimeInt] = useState("")
    function time() {
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        
        setTimeInt(("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2));
    }

    useEffect(()=>{
        time();
        setInterval(time, 1000);
    },[])

    


  return (
    <div style={{flex:"3", justifyContent:"center", justifyItems:"center", backgroundColor:"#f2f2f2", borderRadius:"32px 0px 0px 32px" }}>
        <div style={{padding:"32px 0 8px 32px", display:"flex", alignItems:"center"}}>
            <img src={currentData?.current?.condition?.icon} ></img>
            {currentData?.location?.name}
            <span style={{textAlign:"right", flex:"1", marginRight:"32px", marginLeft:"16px"}}> {timeInt} </span>
        </div>
        <div style={{padding:"16px 0 8px 32px", textAlign:"center"}}>
            <h1 style={{fontSize:"4rem"}}>
                {currentData?.current?.temp_c} &deg;C
            </h1>
            <h2>
                {currentData?.current?.condition?.text}
            </h2>
        </div>
        <div style={{padding:"32px 0 8px 32px", display:"flex", alignItems:"center"}}>
            <img src={wind} alt="" style={{margin:"16px 0px 16px 32px"}} height={50} width={50} />
            <span style={{margin:"16px"}}>{currentData?.current?.wind_kph} Kmph</span>
            <div style={{flex:"1"}}></div>
            <img src={moisture} style={{margin:"16px 8px 16px 32px"}} alt="" height={35} width={35}/>
            <span style={{textAlign:"right", marginRight:"32px", marginLeft:"16px"}}>{currentData?.current?.humidity} %</span>
        </div>
    </div>
  )
}

export default LeftTab