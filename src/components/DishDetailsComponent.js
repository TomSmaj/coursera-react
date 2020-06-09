import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }


    }

    componentDidMount() {

    }

    renderComments(comment) {
        return(
            <li>
                <p>{comment.comment} </p>
                <p>--{comment.author}, {comment.date}</p>
            </li>
        )
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-6">
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6">
                    <h4>Comments</h4>
                    <ul>
                        {this.props.dish.comments.map(comment => this.renderComments(comment))}
                    </ul>
                </div>
            </div>
        )


    }
}

export default DishDetails;