import React from "react";
import {  Card, CardTitle,Textfield, Button } from 'react-mdl';
import API from '../../api/api';
import mapquestAPI from '../../api/mapquest';
import '../feed/Feed.css';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.updateInput = this.updateInput.bind(this);
    this.state = {
      outletShow: false,
      outletDetails: {}
    };
  }
  // Updating the value.
  updateInput(evt){
    this.state = {value: evt.target.value};   
  }
  
  // getting the location details.
  getLocationDetails = async (address) => {
    const params = { params:{
      location: address ,
      key: 'YriuEILCV55s3V3P44EdrVe6CRjIHncU'
    }};
    // API Call
    const result = await mapquestAPI.get(`/address`, params)
    .then(res => res.data)
    .catch((error)=>{
      // on error
      alert('There is an error in API call!')
    });
    return result;
  };

  // Getting the outlet list.
  getOutlets = async () => {
    if(this.state.value !== undefined)
    {
      const locationDetails = await this.getLocationDetails(this.state.value);
      const coordinates = this.getCoordinates(locationDetails);
      const outletDetails = await this.getOutletDetails(coordinates);
      this.setState({ outletDetails: outletDetails });
      this.setState({ outletShow: true });
    }
  };
  
  // Getting the coordinates.
  getCoordinates(locationDetails) {
    const latLng = locationDetails.results[0].locations[0].latLng;
    return latLng;
  }
  // Getting the outlet details.
  getOutletDetails = async (coordinates) => {
    const params = { params:{
      lat: coordinates.lat,
      lan: coordinates.lng
    }};
    // API Call
    const result = await API.get(`/list`, params)
    .then(res => res.data)
    .catch((error)=>{
      // on error
      alert('There is an error in API call!')
    });
    return result;
  };
  
  render() {
    const isOutletShow = this.state.outletShow;
    const outletDetails = this.state.outletDetails;
    let cardTitle = 'No Data available!';
    if(outletDetails) {
      cardTitle = outletDetails.name;
    }
    let cards;
    if(isOutletShow) {
      cards = <Card 
                className ="feed-container"
                  shadow={0}
                  >
                <CardTitle className = "hf-title">{cardTitle}</CardTitle>
              </Card>;
    }
    return (
      <div className ="hf-outer-div">
        <div className = "hf-form-container">
            <Textfield
                label="Search..."
                onChange={this.updateInput}
            />
            <br/>
            <Button onClick={this.getOutlets} raised accent ripple>Search</Button>
        </div> 
        <br/>    
        <br/>
        <hr className ="hr-line"/> 
          {cards}
      </div>
      
    );
  }
}

export default Feed;
