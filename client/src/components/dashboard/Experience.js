// import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react--redux';

// const Experience = ({ experience }) => {
//   const experiences = experiences.map((exp) => (
//     <td key={exp._id}>
//       <td>{exp.company}</td>
//       <td className='hide-sm'>{exp.title}</td>
//       <td>
//         <Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{''}
//         {exp.to === null ? (
//           ' Now'
//         ) : (
//           <Moment format='DD/MM/YYYY'>{exp.to}</Moment>
//         )}
//         ;
//       </td>
//       <td>
//         <button className='btn btn-danger'>Delete</button>
//       </td>
//     </td>
//   ));

//   return (
//     <Fragment>
//       <h2> className="my-2">Experience Credentials</h2>
//       <table className='table'>
//         <thead>
//           <tr>
//             <th>Company</th>
//             <th className='hide-sm'>Title</th>
//             <th className='hide-sm'>Years</th>
//           </tr>
//         </thead>
//         <tbody>{experiences}</tbody>
//       </table>
//     </Fragment>
//   );
// };

// Experience.propTypes = {};

// export default Experience;
