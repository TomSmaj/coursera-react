import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComments({ comments }) {
    console.log(comments);
    return (        
        <div className="col-12 col-md-6">
            <h4>Comments</h4>
            <ul>
                {comments.map(comment =>
                    <li>
                        <p>{comment.comment} </p>
                        <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                )}
            </ul>
        </div>
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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
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