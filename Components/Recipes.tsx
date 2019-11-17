import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Text } from 'native-base';
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
          <Text style={{marginTop:15}}>
            {filteredData.length && JSON.stringify(filteredData)}
          </Text>
          <Text>hi</Text>
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
