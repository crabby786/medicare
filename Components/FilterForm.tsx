import { connect } from 'react-redux';;
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Picker,Icon } from 'native-base';
import { getByQuery } from '../Store/Actions/firestore';
 class FilterForm extends Component<any> {
     state = {
      category: 'Grocery',
      };
  onValueChange(val: string,key:string ) {
      let creds  = {
          key, val
      }
      this.setState({...this.state,category:val})
    return this.props.filterData(creds)
  }
  render() {
    return (
        <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder='category'
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.category}
                onValueChange={(val)=>this.onValueChange(val,'category')}
              >
                <Picker.Item label="Electronics" value="Electronics" />
                <Picker.Item label="stationary" value="stationary" />
                <Picker.Item label="Kitchen_app" value="Kitchen_app" />
                <Picker.Item label="Clothing" value="Clothing" />
                <Picker.Item label="Grocery" value="Grocery" />
              </Picker>
            </Item>

          </Form>
          
          
    );
  }
}

// const mapStateToProps = state => {
//     return {
//       socs: state.soc || {},
//     }
//   };
  
  const mapDispatchToProps = (dispatch)=> {
    return {
      filterData: (creds)=>  dispatch(getByQuery(creds.key,creds.val)) 
    }  
  };
  
  export default connect(null, mapDispatchToProps)(FilterForm);
  