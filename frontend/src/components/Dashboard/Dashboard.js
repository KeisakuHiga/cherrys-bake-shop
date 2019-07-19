import React, { Component } from 'react'
import Moment from 'react-moment'
import style from './Dashboard.module.css'
import _ from 'lodash';
import TableBody from './TableBody/TableBody';
import DropDown from './DropDown/DropDown';
const axios = require('axios')

class Dashboard extends Component {
  state = {
    allQuotes: [],
    orderBy: "firstName",
    order: "asc",  // or "desc",
    dropDownActive: false

  }
  
  componentDidMount = () =>{
    this.getAllQuotes()
  }

  getAllQuotes = async () => {
    const token = localStorage.getItem('token')
    const url = `${process.env.REACT_APP_API_URL}/quote/getAllQuotes`
    const response = await axios.get(url, {headers: { token } });
    const data = await response.data;
    this.setState({
      allQuotes: data
    });
  };
  toggle = (e) => {
    e.preventDefault();
    let isActive = this.state.dropDownActive;
    isActive = !isActive;
    this.setState({dropDownActive: isActive});
  }
  doOrderBy = (e) => {
    e.preventDefault();
    const newOrderBy = e.target.getAttribute('data-value');
    this.setState({orderBy : newOrderBy});
  }
  doOrder = (e) => {
    e.preventDefault();
    const newOrder = e.target.getAttribute('data-value');
    this.setState({order : newOrder});
  }
  render() {
    let { orderBy, order, allQuotes }  = this.state
    // allQuotes  = _.orderBy(allQuotes, (item) => {
    //   return item[orderBy]
    // }, order)
    allQuotes  = _.orderBy(allQuotes,[orderBy], order)
    
    const items = allQuotes.map((item, index)=>{
      return <TableBody data={ item }
                        key={ item._id }
                        orderBy={ this.state.orderBy }
                        id={item.index}
                        />
    }); 

    if(!allQuotes) {
      return null
    } else {
      return (
        <>
          <h1 className={style.dashtitle}>All Quotes</h1>
          <div className={style.sortbutton}>
            <DropDown toggle={ this.toggle } 
                  dropDownActive={ this.state.dropDownActive } 
                  doOrderBy={ this.doOrderBy }
                  doOrder={ this.doOrder }
                  orderBy={ this.state.orderBy }
                  order={ this.state.order } />
          </div>
          <div className={style.dashboardcontainer}>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" >Number</th>
                  <th scope="col" >First Name</th>
                  <th scope="col" >Last Name</th>
                  <th scope="col" >Phone Number</th>
                  <th scope="col" >Estimated Pick Up</th>
                  <th scope="col" >Created At</th>
                </tr>
              </thead>
              <tbody>
                { items }
                {/* {allQuotes.map((quote, index) => (
                  <tr key={index} onClick={() => window.location =`/QuoteDetail/${quote._id}`} className={style.tablerow}>
                    <th key={quote._id} scope="row">{index + 1}</th>
                    <td key={quote.user.userName.firstName}>{quote.user.userName.firstName}</td>
                    <td key={quote.user.userName.lastName}>{quote.user.userName.lastName}</td>
                    <td key={quote.user.contact.phoneNumber}>{quote.user.contact.phoneNumber}</td>
                    <td key={quote.pickUp.time}><Moment local format="MMM DD, YYYY LT">{quote.pickUp.time}</Moment></td>
                    <td key={quote.createdAt}><Moment local format="MMM DD, YYYY LT">{quote.createdAt}</Moment></td>
                    </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </>
      )
    }
  }
}

export default Dashboard;


