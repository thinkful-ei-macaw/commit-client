// import './Onboarding2.css'
// import React from 'react'
// import Nav from '../../components/Nav/Nav'
// import {Redirect} from 'react-router-dom'
// export default class Onboarding2 extends React.Component { 

// constructor(props){
//   super(props) 
 
// }
  
//   handleSubmit = (e) => {
//     e.preventDefault()
//     this.props.setWeek({
//         monday: {
//           morning: e.target.morning_1.checked,
//           afternoon: e.target.afternoon_1.checked,
//           evening: e.target.afternoon_1.checked
//         },
//         tuesday: {
//           morning: e.target.morning_2.checked,
//           afternoon: e.target.afternoon_2.checked,
//           evening: e.target.evening_2.checked
//         },
//         wednesday: {
//           morning: e.target.morning_3.checked,
//           afternoon: e.target.afternoon_3.checked,
//           evening: e.target.evening_3.checked
//         },
//         thursday: {
//           morning: e.target.morning_4.checked,
//           afternoon: e.target.afternoon_4.checked,
//           evening: e.target.evening_4.checked
//         },
//         friday: {
//           morning: e.target.morning_5.checked,
//           afternoon: e.target.afternoon_5.checked, 
//           evening: e.target.evening_5.checked,
//         },
//     }, this.props.currentWeek)
    
//   }
//   render()
//   {
//     if (this.props.currentWeek > 2) return <Redirect to='/daily-focus'/>
//     return (
//         <div>
//         <Nav/>
//         <section className="container">
     
//             <h1>Habit Scheduler</h1>
//     <p>WEEK {this.props.currentWeek}</p>
//             <form onSubmit={e=>this.handleSubmit(e)}>
//             <div className='table-container'>
//               <h2>Select times you would like to study to reach 10-hour goal</h2>
//             <table>
                
//                 <tbody>
//                 <tr>
//                     <td></td>
//                     <td>Morning </td>
//                     <td>Afternoon </td>
//                     <td>Evening </td>
//                 </tr>
//                 <tr>
//                     <td>MON</td>
//                     <td><input name="morning_1" type="checkbox"/></td>
//                     <td><input name="afternoon_1"type="checkbox"/></td>
//                     <td><input name="evening_1"type="checkbox"/></td>
                    
//                 </tr>
//                 <tr>
//                     <td>TUE</td>
//                     <td><input name="morning_2" type="checkbox"/></td>
//                     <td><input name="afternoon_2"type="checkbox"/></td>
//                     <td><input name="evening_2"type="checkbox"/></td>
                    
//                 </tr>
//                 <tr>
//                     <td>WED</td>
//                     <td><input name="morning_3" type="checkbox"/></td>
//                     <td><input name="afternoon_3"type="checkbox"/></td>
//                     <td><input name="evening_3"type="checkbox"/></td>
                    
//                 </tr>
//                 <tr>
//                     <td>THU</td>
//                     <td><input name="morning_4" type="checkbox"/></td>
//                     <td><input name="afternoon_4"type="checkbox"/></td>
//                     <td><input name="evening_4"type="checkbox"/></td>
//                 </tr>
//                   <tr>
//                       <td>FRI</td>
//                       <td><input name="morning_5" type="checkbox"/></td>
//                     <td><input name="afternoon_5"type="checkbox"/></td>
//                     <td><input name="evening_5"type="checkbox"/></td>
//                   </tr>
//                   </tbody>
//             </table>
//             </div>
//              <p>Your average study duration is X</p>
       
//         <button>{this.props.currentWeek}</button>
//         </form>
//         </section>
        
//         </div>
//     )
//   }
// }
