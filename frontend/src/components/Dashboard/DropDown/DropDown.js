// import React, { Component } from 'react';
// import style from './DropDown.module.css'

// const names = [["firstName", "First Name"],["lastName", "Last Name"],["phoneNumber","Phone Number"],["pickUp.date","Estimated Pick Up"],["createdAt","Created At"]]
// class DropDown extends React.Component {    
//   render() { 
    
//     const { dropDownActive, toggle, orderBy, order, doOrderBy, doOrder } = this.props;
//     // const checked = <span className={`${style.glyphicon} ${style.glyphiconok}`}></span>;
//     const input = names; // array from the bottom of this script
//     const output = input.map((item, index)=>{
//         return <li key={index}><a href="#" onClick={ doOrderBy }  data-value={ item[0]}>{item[1] } { orderBy === item[0] ? checked : null }</a></li>
//     });      
          
//     return (
//       <div className={ dropDownActive ? "dropdown  pull-right open" : "dropdown pull-right " }>
//         <a className="btn btn-info" onClick={ toggle } href="#">Sort items by<span className="caret"></span></a>
//         <ul className="dropdown-menu">
//           { output }
//           <li className="divider"></li>
//           <li><a href="#" onClick={ doOrder } data-value="asc">ascendind { order === "asc" ? checked : null }</a></li>
//           <li><a href="#" onClick={ doOrder } data-value="desc">descending { order === "desc" ? checked : null }</a></li>
//         </ul>
//       </div>    
//     )
//   }
// }
// // const categories = ["company","job","city","gender"]
// export default DropDown;