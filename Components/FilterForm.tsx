import { connect } from 'react-redux';;
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Picker,Icon } from 'native-base';
import { getByQuery } from '../Store/Actions/firestore';
 class FilterForm extends Component<any> {
     state = {
        village: 'मंडणगड',
        panel:'10458'
      };
  onValueChange2(value: string ) {
      let creds  = {
          key:'तालुका रत्नागिरी',
          val:value
      }
      let creds2  = {
        key:'पॅनल नंबर',
        val:value
    }
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
                placeholder='village'
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.village}
                onValueChange={(val)=>this.props.filterData({key:'तालुका रत्नागिरी',val})}
              >
                <Picker.Item label="मंडणगड" value="मंडणगड" />
                <Picker.Item label="दापोली" value="दापोली" />
                <Picker.Item label="खेड" value="खेड" />
              </Picker>
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder='Panel'
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.panel}
                onValueChange={(val)=>this.props.filterData({key:'पॅनल नंबर',val:parseInt(val)})}
              >
                <Picker.Item label="10458" value="10458" />
                <Picker.Item label="12426" value="12426" />
                <Picker.Item label="10458" value="10458" />
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
  