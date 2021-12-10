import React, { useContext }from 'react';
import { myContext } from '../../Context';
import IUser from '../../types/mainTypes';

export default function HomePage() {

  const userObject = useContext(myContext) as IUser;

  return (
      <div>
          {
              userObject ? (
                  <h1>Welcome back {userObject.username}</h1>
              ) : (
                      <h1>Welcome! You are not logged not in!</h1>
                  )
          }
      </div>
  )
}
