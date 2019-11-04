import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Firebase, FirebaseRef } from '../Constants/fbAudit';
//import { getSocList } from '../Actions/Products';
import { Container, Content, Text } from 'native-base';

class Recipes extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({}) }),
    fetchRecipes: PropTypes.func.isRequired,
    fetchMeals: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  state = {
    error: null,
    loading: false,
  }

  componentDidMount = () => this.fetchData();

  fetchData = () => {
    const { fetchSocs } = this.props;
    
    this.setState({ loading: true });
    return fetchSocs()
      .then(() => this.setState({
        loading: false,
        error: null,
      })).catch(err => this.setState({
        loading: false,
        error: err,
      }));
  }

  render = () => {
    const { socs } = this.props;
    //const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Container style={{ flex: 1 }}>
        <Content>
          <Text>
            {JSON.stringify(socs)}
          </Text>
          <Text>hi</Text>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    socs: state.soc || {},
  }
};

const mapDispatchToProps = {
  fetchSocs: ()=> {
    if (Firebase === null) return () => new Promise(resolve => resolve());
    console.log('getsoclist');
    return dispatch => new Promise(resolve => FirebaseRef.child('/')
      .on('value', (snapshot) => {
        const data = snapshot.val() || [];
        console.log(data);
        return resolve(
          dispatch({ type: 'get_soc_succ', payload: data }),
        );
      })).catch((err) => { throw err.message; });
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
