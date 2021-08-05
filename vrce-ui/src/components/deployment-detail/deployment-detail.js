import React, { useEffect, useState } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ChartistGraph from "react-chartist";
import { cpuUsageChart, memoryUsage } from '../chart-data/chart-data';
import { Box, TablePage, ChartContainer, Line, Category, Description, Headers } from './deployment-detail.styles';

export const DeploymentDetail = (props) => {
    
    const [deployment, setDeployment] = useState([]);

    const deploymentId = props.match.params.detailId;

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${deploymentId}`)
        .then(response => response.json())
        .then(deployment => {console.log(deployment); setDeployment(deployment)})
      }) 
    
    return(
        <Box>
            <Typography variant="h4" component="h1">Deployment Name: {deployment.title}</Typography>
            <Typography variant="h5" component="h2" color="textSecondary">Deployment ID: {deployment.id}</Typography>

            <TableContainer component={Paper}>
                <TablePage aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Line>
                                    <Category variant="h5" component="h2" >Description: </Category>
                                </Line>
                            </TableCell>
                            <TableCell align="left">
                                <Line>
                                    <Description variant="h5" component="h2">{deployment.body}</Description>
                                </Line>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </TablePage>
            </TableContainer>
            <Headers variant="h6" component="h2">CPU Usage</Headers>
            <ChartContainer>
                <ChartistGraph
                    data={cpuUsageChart.data}
                    type="Line"
                    options={cpuUsageChart.options}
                />
            </ChartContainer>
            <Headers variant="h6" component="h2">Memory Usage</Headers>
            <ChartContainer>
                <ChartistGraph
                    data={memoryUsage.data}
                    type="Line"
                    options={memoryUsage.options}
                />
            </ChartContainer>
        </Box>
    )
}