import React from 'react';
import {  VictoryChart,VictoryVoronoiContainer,
  VictoryTooltip,VictoryLine} from 'victory';
import data from './media-data/jstest.json'
import Navbar from "./components/Navbar"
import './App.css'
class App extends React.Component {
  state ={
    mediaData:data
  }
  render() {
    const {mediaData} = this.state
    return (
      <div>
         <Navbar/>
        <div className="container">
            <div className="child">
            <VictoryChart height={400} width={400}
              domainPadding={{ y: 10 }}
              containerComponent={
                <VictoryVoronoiContainer
                  voronoiDimension="x"
                  labels={({ datum }) => `${datum.a}: ${datum.y}`}
                  labelComponent={
                    <VictoryTooltip
                      cornerRadius={0}
                      flyoutStyle={{ fill: "black" }}
                    />}
                />}
            >
              <VictoryLine
                  data = {mediaData.DM.map((number,index) =>{
                    let dataObj={ x:index , y: number,a:"DM"}
                    return dataObj
                  })}
                style={{
                  data: {
                    stroke: "tomato",
                    strokeWidth: ({ active }) => active ? 4 : 2
                  },
                  labels: { fill: "tomato" },
                }}
              />

              <VictoryLine
                  data = {mediaData.TV.map((number,index) =>{
                    let dataObj={ x:index , y: number,number,a:"TV"}
                    return dataObj
                  })}
                style={{
                  data: {
                    stroke: "blue",
                    strokeWidth: ({ active }) => active ? 4 : 2
                  },
                  labels: { fill: "blue" }
                }}
              />

              <VictoryLine
                  data = {mediaData.OOH.map((number,index) =>{
                    let dataObj={ x:index , y: number,a:"OOH"}
                    return dataObj
                  })}
                style={{
                  data: {
                    stroke: "green",
                    strokeWidth: ({ active }) => active ? 4 : 2
                  },
                  labels: { fill: "green" }
                }}
              />
              <VictoryLine
                  data = {mediaData.PPC.map((number,index) =>{
                    let dataObj={ x:index , y: number,a:"PPC"}
                    return dataObj
                  })}
                style={{
                  data: {
                    stroke: "black",
                    strokeWidth: ({ active }) => active ? 4 : 2
                  },
                  labels: { fill: "black" }
                }}
              />
            </VictoryChart>
            </div>
        </div>
       </div>
    );
  }
}

export default App;