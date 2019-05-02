import React,{Component} from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Button, Alert, PanResponder, Share } from 'react-native';
import {Card, Icon, Rating, FormLabel, FormInput} from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite, postComment } from '../redux/ActionCreators';
import * as Animatable from 'react-native-animatable';


const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      favorites: state.favorites
    }
  }

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    postComment:(dishId, author, comment, rating)  => dispatch(postComment(dishId, author, comment, rating))
})

function RenderDish(props){
    const dish = props.dish;

    handleViewRef = ref => this.view = ref;

    const recognizeDrag = ({ moveX, moveY, dx, dy }) => {
        if ( dx < -200)
            return true;
        else
            return false;
    }

    const recognizeComment = ({moveX, moveY, dx, dy }) => {
        return dx > 200;
    }

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gestureState) => {
            return true;
        },
        onPanResponderGrant: () => {this.view.rubberBand(1000).then(endState => console.log(endState.finished ? 'finished' : 'cancelled'));},
        onPanResponderEnd: (e, gestureState) => {
            console.log("pan responder end", gestureState);
            if (recognizeDrag(gestureState)){
                Alert.alert(
                    'Add Favorite',
                    'Are you sure you wish to add ' + dish.name + ' to favorite?',
                    [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => {props.favorite ? console.log('Already favorite') : props.onPress()}},
                    ],
                    { cancelable: false }
                );
            }else if(recognizeComment(gestureState)){
                props.onNewComment();
            }
            return true;
        }
    })

    const shareDish = (title, message, url) => {
        Share.share({
            title: title,
            message: title + ': ' + message + ' ' + url,
            url: url
        },{
            dialogTitle: 'Share ' + title
        })
    }

    if (dish != null) {
        return(
            <Animatable.View animation="fadeInDown" duration={2000} delay={1000}
            ref={this.handleViewRef}
            {...panResponder.panHandlers}>
                <Card
                    featuredTitle={dish.name}
                    image={{uri: baseUrl + dish.image}}>
                    <Text style={{margin:10}}>{dish.description}</Text>
                    <View style={{flexDirection:'row', flex:1, justifyContent:'center'}}>
                        <Icon raised reverse name={props.favorite ? 'heart' : 'heart-o'} type='font-awesome' color='#f50' onPress={()=>props.favorites ?console.log('already favorite'):props.onPress()}/>
                        <Icon raised reverse name={'pencil'} type='font-awesome' color='#512DA8' onPress={()=>props.onNewComment()}/>
                        <Icon
                            raised
                            reverse
                            name='share'
                            type='font-awesome'
                            color='#51D2A8'
                            //style={styles.cardItem}
                            onPress={() => shareDish(dish.name, dish.description, baseUrl + dish.image)} />
                    </View>
                </Card>
            </Animatable.View>
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
        <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>        
        <Card title='Comments' >
            <FlatList 
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
                />
        </Card>
        </Animatable.View>
    );
}

class DishDetail extends Component {

    constructor(props){
        super(props);
        this.state={
            showModal:false,
            rating:3,
            comment:'',
            author:''
        }
    }

    markFavorite(dishId) {
        this.props.postFavorite(dishId);
    }

    newComment(){
        //alert(JSON.stringify(this.state));
        this.setState({
            showModal:!this.state.showModal
        });
    }

    resetState(){
        this.setState({
            showModal:false,
            rating:3,
            comment:'',
            author:''
        });
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
                     onPress={() => this.markFavorite(dishId)} 
                     onNewComment={()=>this.newComment()}
                    />
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
                <Modal 
                    animationType = {"slide"} 
                    transparent = {false}
                    visible = {this.state.showModal}
                    onDismiss = {() =>this.resetState() }
                    onRequestClose = {() =>this.resetState() }>
                    <View style = {styles.modal}>
                        <Rating 
                            style={{alignSelf:'center'}}
                            showRating
                            step
                            onFinishRating={(rate)=>this.setState({rating:rate})}
                        />
                        <FormLabel>Author</FormLabel>
                        <FormInput onChangeText={(text)=>this.setState({author:text})}/>
                        <FormLabel>Comment</FormLabel>
                        <FormInput onChangeText={(text)=>this.setState({comment:text})}/>
                        <Button 
                            onPress = {() =>
                                {
                                    this.props.postComment(dishId,this.state.author,this.state.comment,this.state.rating);
                                    this.resetState();
                                }}
                            color="#512DA8"
                            title="Submit" 
                            />
                        <Button
                            onPress = {() =>this.resetState()}
                            color="#512DA8"
                            title="Cancel" 
                            />
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