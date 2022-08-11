import React from 'react';
import { VictoryPie } from "victory-pie";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const myData = [
    
    { x: "Daraz", y: 35 },
    { x: "Bikroy", y: 30 },
    { x: "Pickaboo", y: 35 },
  ];
  
      const data2 = [
        
        {
          "name": "Official",
          "uv": 50000,
          "pv": 30000
        },
        {
          "name": "Unofficial",
          "uv": 40000,
          "pv": 35000
        },
        {
          "name": "Without warranty",
          "uv": 30000,
          "pv": 28000
        },
        {
          "name": "used",
          "uv": 20000,
          "pv": 10000
        }
      ]
    return (
        <div className='grid grid-cols-2 gap-4 m-12'>

<div>
<h1 className='text-5xl font-bold m-4'>Sources</h1>
<div style={{ height: 450 }}>
      <VictoryPie
        data={myData}
        colorScale={["#84AF27", "#FFC239", "#0095A0"]}
        radius={100}
        dataKey={myData.y}
      />
      <Tooltip/>
      <Legend />
    </div>
</div>

<div>
    <h1 className='text-5xl font-bold m-4 pb-12'>Conditions</h1>
        <BarChart
          width={500}
          height={400}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#0095A0" background={{ fill: '#eee' }} />
        </BarChart>
      
</div>
            
        </div>
    );
};

export default Chart;