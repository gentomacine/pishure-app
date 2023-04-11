import React from 'react'
import styled from 'styled-components'
import {ResponsiveContainer, XAxis, YAxis, AreaChart, Tooltip, Area, CartesianGrid} from 'recharts'

function Stats() {
    let viewsData = [];
    let downloadsData = [];
    let Vday = 1;
    let Dday = 1;
    for (let i = 30; i >= 0; i--) {
        viewsData.push({
            date: `Aug ${Vday++}`,
            value: Math.floor(1000 * Math.random())  
        })
    }

    for (let i = 30; i >= 0; i--) {
        downloadsData.push({
            date: `Aug ${Dday++}`,
            value: Math.floor(500 * Math.random())  
        })
    }

    console.log(viewsData, downloadsData);

    return (
        <StatContainer>
            <ViewsContainer>
                <Info>
                    <h4>Total views</h4>
                    <h2>30,100</h2>
                </Info>
                <ResponsiveContainer width='100%' height={250}>
                    <AreaChart data={viewsData}>
                        <Area dataKey="value"/>
                    </AreaChart>
                </ResponsiveContainer>
            </ViewsContainer>
            <DownloadsContainer>
                <Info>
                    <h4>Total views</h4>
                    <h2>30,100</h2>
                </Info>
                <ResponsiveContainer width='100%' height={250}>
                    <AreaChart data={downloadsData}>
                        <Area dataKey="value"/>
                    </AreaChart>
                </ResponsiveContainer>
            </DownloadsContainer>
        </StatContainer>
    )
}

const StatContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 150px 0;
    

    @media screen and (max-width: 1376px) {
        flex-direction: column;
        align-items: center;
        padding: 24px;
    }

`
const ViewsContainer = styled.div`
    width: 40.75rem;
    height: 24.813;
    border-radius: 5px;
    background-color: #12141D;
    padding: 30px;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    justify-content: space-between;

    @media screen and (max-width: 740px) {
        width: 100%;
    }
`
const DownloadsContainer = styled.div`
    width: 40.75rem;
    height: 24.813;
    border-radius: 5px;
    background-color: #12141D;
    padding: 30px;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    justify-content: space-between;

    @media screen and (max-width: 740px) {
        width: 100%;
    }
`

const Info = styled.div`

    h4 {
        font-size: 0.875rem;
        color: #BEC0CE;
        font-weight: 400;
        margin-bottom: 4px;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
    }

`

export default Stats
