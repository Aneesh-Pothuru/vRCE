import React from "react";
import { withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { CardContainer } from "./card.styles";


const Card = (props) => {
    return(
        <CardContainer onClick={() => props.history.push(`/vRCE/detail/${props.deployment.id}`)}>
            <Typography variant="h5" component="h2">{props.deployment.title}</Typography>
            <Typography color="yellow">User ID: {props.deployment.userId}</Typography>
            <Typography >Data Center Type: { props.deployment.id % 3 === 0 ? "Private" : "Public" }</Typography>
        </CardContainer>
    )
}

export default withRouter(Card);
