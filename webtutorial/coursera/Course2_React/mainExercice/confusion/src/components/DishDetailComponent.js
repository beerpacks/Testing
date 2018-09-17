import React from 'react';
import { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderComments(comments) {

        if (comments != null) {

            const allComments = comments.map((singleComment) => {
                return (
                    <li>
                        <ul className="list-unstyled">
                            <li>{singleComment.comment}</li>
                            <li>--{singleComment.author}, {singleComment.date}</li>
                        </ul>
                    </li>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {allComments}    
                    </ul>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    render() {
        if (this.props != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.image} alt={this.props.name} />
                            <CardBody>
                                <CardTitle>{this.props.name}</CardTitle>
                                <CardText>
                                    {this.props.description}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.comments)}
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

export default DishDetail;