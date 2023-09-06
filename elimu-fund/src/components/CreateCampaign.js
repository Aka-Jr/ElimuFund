import React, { Component } from 'react';
import '../App.css'; // This is the default App.css provided by Create React App
import { Link } from 'react-router-dom';

class CreateCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      surname: '',
      phone: '',
      email: '',
      agreedToTerms: false,
      story: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to an API
    console.log('Form data submitted:', this.state);
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: newValue,
    });
  };

  

  render() {
    return (
      <div className="App">
        <div className="container">
          <center>
            <h1>Create campaign</h1>
          </center>
          <form onSubmit={this.handleSubmit}>
            <div>
              <table width="120%" border="0">
                <tbody>
                  <tr >
                    <td colSpan="2">
                      <h3>Personal details</h3>
                    </td>
                    <td>
                      <h3>Your story</h3>
                    </td>
                  </tr>
                  <tr>
                    <td>First Name:</td>
                    <td>
                      <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        required
                      />
                    </td>
                    <td rowSpan="4">
                      <textarea
                        name="story"
                        value={this.state.story}
                        onChange={this.handleChange}
                        cols="30"
                        rows="10"
                        required
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>Surname:</td>
                    <td>
                      <input
                        type="text"
                        name="surname"
                        value={this.state.surname}
                        onChange={this.handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>
                      <input
                        type="text"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td >
                      <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                        id="email"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <input
                        type="checkbox"
                        name="agreedToTerms"
                        checked={this.state.agreedToTerms}
                        onChange={this.handleChange}
                        required
                      />
                      <label>
                        I agree to the <Link to="">terms</Link> and{' '}
                        <Link to="">conditions</Link>
                      </label>
                    </td>
                    
                    <td colSpan="2">
                    <input type="file" />
                    <label>Attach Photo</label>
                    </td>
                   
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <div>
              <input type="submit" value="Finish" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateCampaign;