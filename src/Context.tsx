import React, { createContext, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios';


export const myContext = createContext({});
export default function Context(props: any) {

  const [userObject, setUserObject] = useState<any>();

  useEffect(() => {
    axios.get("https://cs484-finalproject-backend.herokuapp.com/getUser", { withCredentials: true}).then((res: AxiosResponse) => {
      if (res.data) {
        setUserObject(res.data);
      }
    })
  }, [])
  return (
    <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
  )
}
