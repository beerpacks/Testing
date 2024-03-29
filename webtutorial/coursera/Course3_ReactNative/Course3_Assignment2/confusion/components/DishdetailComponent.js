import React,{Component} from 'react';
import {View, Text, ScrollView, FlatList,Button, Modal} from 'react-native';
import {Card, Icon, FormInput} from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite, toggleCommentForm, setCommentDishId, setCommentRating, setCommentAuthor, setCommentComment } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      favorites: state.favorites,
      commentForm : state.comment
    }
  }

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    toggleCommentForm:(isVisible)=>dispatch(toggleCommentForm(isVisible)),
    setCommentDishId:(dishId)=>dispatch(setCommentDishId(dishId)),
    setCommentRating:(value)=>dispatch(setCommentRating(value)),
    setCommentAuthor:(author)=>dispatch(setCommentAuthor(author)),
    setCommentComment:(comment)=>dispatch(setCommentComment(comment))
})

function RenderDish(props){
    const dish = props.dish;
    if(dish != null){
        return (
            <Card featuredTitle={dish.name} image={{uri: baseUrl + dish.image}}>
                <Text style={{margin:10}}>{dish.description}</Text>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <Icon raised reverse name={props.favorite ? 'heart' : 'heart-o'} type='font-awesome' color='#f50' onPress={()=>props.favorites ?console.log('already favorite'):props.onPress()}/>
                    <Icon raised reverse name={'pencil'} type='font-awesome' color='#512DA8' onPress={()=>props.onWriteComment()}/>
                </View>
            </Card>
        );
    }else{
        return (
            <View></View>
        );
    }
}

function RenderComments(props){
    const comments= props.comments;

    const renderCommentItem=({item,index})=>{
        return (
            <View key={index} style={{margin:10}}>
                <Text style={{fontSize:14}}>{item.comment}</Text>
                <Text style={{fontSize:12}}>{item.rating} Stars</Text>
                <Text style={{fontSize:12}}>{'-- ' + item.author + ', ' + item.date}</Text>
            </View>
        );
    }

    return (
        <Card title="Comments">
            <FlatList data={comments} renderItem={renderCommentItem} keyExtractor={item => item.id.toString()} />
        </Card>
    );
}

class DishDetail extends Component {

    markFavorite(dishId) {
        this.props.postFavorite(dishId);
    }

    writeComment(){
        this.props.toggleCommentForm(!this.props.commentForm.showModal);
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    render() {
        const dishId = this.props.navigation.getParam('dishId','');
        return(
            <ScrollView>
                <RenderDish dish={this.props.dishes.dishes[+dishId]}
                     favorite={this.props.favorites.some(el => el === dishId)}
                     onWriteComment={()=> this.writeComment()}
                     onPress={() => this.markFavorite(dishId)} 
                    />
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
                <Modal animationType = {"slide"} transparent = {false}
                    visible = {this.props.commentForm.showModal}
                    onDismiss = {this.props.toggleCommentForm(false)} //() => this.toggleModal()
                    onRequestClose = {this.props.toggleCommentForm(false) }>
                    <View style = {styles.modal}>
                        <Rating showRating onFinishRating={(val)=>this.props.setCommentRating(val)}/>
                        <FormLabel>Author</FormLabel>
                        <FormInput onChangeText={(text)=>this.props.setCommentAuthor(text)}/>
                        <FormLabel>Comment</FormLabel>
                        <FormInput onChangeText={(text)=>this.props.setCommentComment(text)}/>
                        <Button 
                            onPress = {() =>{}}
                            color="#512DA8"
                            title="Submit" 
                            />
                        <Button title="Cancel" onPress={()=>{this.props.toggleCommentForm(false)}} />
                        </View>
                </Modal>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    formRow: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: {
        justifyContent: 'center',
        margin: 20
     },
     modalTitle: {
         fontSize: 24,
         fontWeight: 'bold',
         backgroundColor: '#512DA8',
         textAlign: 'center',
         color: 'white',
         marginBottom: 20
     },
     modalText: {
         fontSize: 18,
         margin: 10
     }
});

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);