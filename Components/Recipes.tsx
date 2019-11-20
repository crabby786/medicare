import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Text,
  List, ListItem, Thumbnail,  Left, Body, Right, Button 
} from 'native-base';
import { getDocs, getDoc, getByQuery } from '../Store/Actions/firestore';
import FilterForm from './FilterForm';

class Recipes extends Component<any> {
  static defaultProps = {
    match: null,
  }

  state = {
    error: null,
    loading: false,
  }

  // componentDidMount = () => {
  //   const { fetchSocs } = this.props;
  //   return fetchSocs();
  // } 


  render = () => {
    const { socs,filteredData } = this.props;
    //const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Container style={{ flex: 1 }}>
        <Content>
          <FilterForm></FilterForm>
          <List
          dataArray={filteredData && filteredData}
            keyExtractor={obj=>obj.No}            
            renderItem={({item})=>
               (
                <ListItem thumbnail >
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmGzCzP9Pd1ZABKaX1cBOHZrZgGlIaFL40zfs_4-jx9tLEcTu&s' }} />
              </Left>
              <Body>
                <Text>{item['संस्थेचे नांव']}</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            
            
            </ListItem>
              )
            }
          >
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    socs: state.soc || {},
    filteredData:state.soc.filteredData || {},
  }
};

const mapDispatchToProps = (dispatch)=> {
  return {
    fetchSocs: ()=>  dispatch(getByQuery('तालुका रत्नागिरी',10458)) 
  }  
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
