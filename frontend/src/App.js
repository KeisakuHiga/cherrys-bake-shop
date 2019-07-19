import React from "react";
import Routes from "./Routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Social from "./components/Social/Social"
const axios = require('axios')

class App extends React.Component {
  state = {
    allQuotes: null,
    authentication: false
  };

  componentDidMount = async () => {
    try {
      this.getAllQuotes();
      const token = localStorage.getItem("token");
      const authentication = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/current-user`,
        { headers: { token: token } }
      );
      this.setState({
        authentication: true,
        currentUser: authentication.data
      });
    } catch (err) {
      this.setState({
        authentication: false
      });
    }
  };

  getAllQuotes = async () => {
    const url = `${process.env.REACT_APP_API_URL}/quote/getAllQuotes`;
    const response = await axios.get(url);
    const data = await response.data;
    this.setState({
      allQuotes: data
    });
  };

  register = async userInfo => {
    const url = process.env.REACT_APP_API_URL;
    try {
      const response = await axios.post(`${url}/auth/register`, userInfo);
      const token = response.data.token;
      localStorage.setItem("token", token);
      this.setState({
        authentication: true
      });
    } catch (err) {
      this.setState({
        authentication: false,
        errorMessage: `Error => ${err.message}`
      });
    }
  };

  createNewQuote = async quoteInfo => {
    const url = process.env.REACT_APP_API_URL;
    try {
      console.log('hello')
      await axios.post(`${url}/quote/newQuote`, quoteInfo);
    } catch (err) {
      console.log(err)
      this.setState({
        errorMessage: `Error => ${err.message}`
      });
    }
  };

  login = async userCredentials => {
    const url = process.env.REACT_APP_API_URL;
    try {
      const response = await axios.post(`${url}/auth/login`, userCredentials);
      const token = response.data.token;
      localStorage.setItem("token", token);
      this.setState({
        authentication: true
      });
    } catch (err) {
      this.setState({
        authentication: false,
        errorMessage: 'Your credentials is invalid. Please try again.'
      });
    }
  };
  logout = () => {
    localStorage.removeItem("token")
    this.setState({
      authentication: false
    })
  }

  render() {
    const { allQuotes, authentication, errorMessage } = this.state;
    if (!allQuotes) {
      return null;
    } else {
      return (
        <div>
          <Navbar 
            authentication={authentication} 
            logout={this.logout} 
          />
          <Social />
          <Routes 
            allQuotes={allQuotes} 
            authentication={authentication} 
            dateFormat={this.dateFormat} 
            register={this.register} 
            login={this.login} 
            errorMessage={errorMessage}
            createNewQuote={this.createNewQuote}
          />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
