import React, { Fragment } from 'react';
import spinner from './spinner.gif'; //DO YOU MEAN CHANGE THIS TO CAPITALS WILL??

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '500px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
