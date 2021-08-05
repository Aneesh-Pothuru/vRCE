import React from "react";
import Card from "../card/card"
import { Item } from './card-list.styles';

export const CardList = (props) => {
    return (
        <Item>
            {
                props.deployments.map(deployment => (
                    <Card key={deployment.id} deployment={deployment} />
                ))
            }
        </Item>
    )
}