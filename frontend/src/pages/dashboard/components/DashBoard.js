import React from 'react';
import { CustomState } from '../../../context/ContextProvider';

function DashBoard() {
  const {user}= CustomState();
  return (
    <>
      {
        user?
        <>This is DashBoard!  </>
        :
        <>Enter Credentials</>
      }
    </>
  )
}

export default DashBoard
