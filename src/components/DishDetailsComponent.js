import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderComments({ comment }) {
    return (
        <li>
            <p>{comment.comment} </p>
            <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
        </li>
    )
}

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-6">
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        </div>
    )
}

const DishDetails = (props) => {
    if (props.dish) {
        return (
            <div className="container">
                <div className="row">
                    
                        <RenderDish dish={props.dish} />
                    
                    <div className="col-12 col-md-6">
                        <h4>Comments</h4>
                        <ul>
                            {props.dish.comments.map(comment => <RenderComments comment={comment} />)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}


export default DishDetails;