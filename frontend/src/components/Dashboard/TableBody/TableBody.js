import React from 'react';
import Moment from 'react-moment'
import style from './TableBody.module.css'
import { withRouter } from 'react-router-dom'

  const TableBody = withRouter(({ history, data, id }) => (
        <tr key={data._id} onClick={() => history.push(`/QuoteDetail/${data._id}`)} className={style.tablerow}>
          <th key={data._id} scope="row" className="indexNumber">{ id + 1 }</th>
          <td key={data.user.userName.firstName} className="firstName" >{data.user.userName.firstName}</td>
          <td key={data.user.userName.lastName} className="lastName" >{data.user.userName.lastName}</td>
          <td key={data.user.contact.phoneNumber} className="phoneNumber" >{data.user.contact.phoneNumber}</td>
          <td key={data.pickUpDateAndTime}><Moment local format="MMM DD, YYYY LT">{data.pickUpDateAndTime}</Moment></td>
          <td key={data.createdAt}><Moment local format="MMM DD, YYYY LT">{data.createdAt}</Moment></td>
        </tr>
));


export default TableBody;