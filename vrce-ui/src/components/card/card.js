import React from "react";
import { withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { CardContainer } from "./card.styles";


const Card = (props) => {
    return(
        <CardContainer onClick={() => props.history.push(`/detail/${props.deployment.id}`)}>
            <Typography variant="h5" component="h2">Deployment Name: {props.deployment.title.substring(0, 21)}</Typography>
            <Typography color="yellow">User ID: {props.deployment.userId}</Typography>
            <Typography >Data Center Type: { props.deployment.id % 3 === 0 ? "Private" : "Public" }</Typography>
        </CardContainer>
    )
}

export default withRouter(Card);
