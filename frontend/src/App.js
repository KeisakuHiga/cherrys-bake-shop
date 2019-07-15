import React from "react";
import Routes from "./Routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const axios = require('axios')

class App extends React.Component {
  state = {
    allQuotes: null,
    authentication: false
  }

  componentDidMount = async () => {
    try {
      this.getAllQuotes()
      const token = localStorage.getItem('token')
      const authentication = await axios.get(`${process.env.REACT_APP_API_URL}/user/current-user`, { headers: { token: token } })
      console.log(authentication)
      this.setState({
        authentication: true,
        currentUser: authentication.data
      })
    } catch(err) {
      console.log(err)
      this.setState({
        authentication: false
      })
    }
  }

  getAllQuotes = async () => {
    const url = `${process.env.REACT_APP_API_URL}/quote/getAllQuotes`
    const response = await axios.get(url)
    const data = await response.data
    this.setState({
      allQuotes: data
    })
  }

  login = async (userCredentials) => {
    const url = process.env.REACT_APP_API_URL
    try {
      const response =  await axios.post(`${url}/auth/login`, userCredentials)
      const token = response.data.token
      localStorage.setItem("token", token)
      this.setState({
        authentication: true
      })
    } catch (err) {
      this.setState({
        authentication: false,
        errorMessage: `Wrong credential ${err.message}`
      })
    }
  }

  dateFormat = (date) => {
    date = new Date(date)
    const month = date.toLocaleString("en-us", { month: "short" })
    const day = date.getDate()
    const year = date.getFullYear()
    const newDate = month+'. '+day+', ' + year
    return newDate
  }

  render() {
    const { allQuotes, authentication } = this.state
    if(!allQuotes) {
      return null
    } else {
      return (
        <div>
          <Navbar />
          <Routes 
            allQuotes={allQuotes} 
            authentication={authentication} 
            dateFormat={this.dateFormat} 
            login={this.login} 
          />
          <Footer />
        </div>
      )
    }
  }
}

export default App;
