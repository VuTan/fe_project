import React from "react";
import {Card, Placeholder} from "react-bootstrap";

const SkeletonProduct = () => {
    return (
        <Card style={{width: '100%'}}>
            <Card.Img style={{height: "80%"}} variant="top" src={require("../images/holder.jpg")}/>
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6}/>
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7}/> <Placeholder xs={4}/> <Placeholder xs={4}/>
                </Placeholder>
            </Card.Body>
        </Card>)
}

export default SkeletonProduct