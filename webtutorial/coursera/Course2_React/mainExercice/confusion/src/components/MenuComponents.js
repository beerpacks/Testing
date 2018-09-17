import React from 'react';
import { Component } from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish:null
        }
        console.log('menu Component constructor is invoked');
    }

    componentDidMount(){
        console.log('menu Component didMountComponent is invoked');
    }

    onDishSelect(dish){
        this.setState({selectedDish : dish });
    }

    renderDish(dish){
        if(dish != null){
            return(
                <DishDetail image={dish.image} name={dish.name} description={dish.description} comments={dish.comments} />
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log('menu Component render is invoked');
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {this.renderDish(this.state.selectedDish)}
            </div>
        );
    }
}

export default Menu;