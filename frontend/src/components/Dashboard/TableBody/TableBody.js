import React, { Component } from 'react';
import Moment from 'react-moment'
import style from './TableBody.module.css'

class TableBody extends Component {
  state = {  }
  render() {
    const { data, orderBy } = this.props;
    // const input = categories; // array from the bottom of this script
    // const output = input.map((item)=>{
    //   return <div><small className={ orderBy === item ? "active" : null }>{item}:</small> {data[item] }</div>
    // });
    return (
      <>
        <tr key={data._id} onClick={() => window.location =`/QuoteDetail/${data._id}`} className={style.tablerow}>
          <th key={data._id} scope="row">test</th>
          <td key={data.user.userName.firstName}>{data.user.userName.firstName}</td>
          <td key={data.user.userName.lastName}>{data.user.userName.lastName}</td>
          <td key={data.user.contact.phoneNumber}>{data.user.contact.phoneNumber}</td>
          <td key={data.pickUpDateAndTime}><Moment local format="MMM DD, YYYY LT">{data.pickUpDateAndTime}</Moment></td>
          <td key={data.createdAt}><Moment local format="MMM DD, YYYY LT">{data.createdAt}</Moment></td>
        </tr>
      </>
    );
  }
}

export default TableBody;