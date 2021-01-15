// React
import React from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

import axios from 'axios';

class ContactUs extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
       subject: '', 
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    alert("Successful")
    axios({
      method: "POST",
      url:"#", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: "", email: "", subject:"",message: ""})
  }
  
  render() {
    return(
            
<MDBContainer style={{alignContent:"center"}} >
  <MDBRow>
    <MDBCol md="6">
      <form onSubmit={this.handleSubmit.bind(this)} method="POST">
        <p className="h4 text-center mb-4">Reach out to us</p>
        <label htmlFor="defaultFormContactNameEx" >
          Your name
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control"value={this.state.name} onChange={this.onNameChange.bind(this)} />
        <br />
        <label htmlFor="defaultFormContactEmailEx" >
          Your email
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
        <br />
        <label htmlFor="defaultFormContactEmailEx" >
          Subject
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
        <br />?
        <label htmlFor="defaultFormContactMessageEx" value={this.state.message} onChange={this.onMessageChange.bind(this)}>
          Your message
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="5" />
        <div className="text-center mt-4">
                  <MDBBtn style={{backgroundColor:"#33b5e5"}} outline type="submit">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }
  onSubjectChange(event) {
    this.setState({subject: event.target.value})
}

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
};
export default ContactUs;