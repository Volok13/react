import React, {FC, useEffect, useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import {IUser} from "./models/IUser";
import user from "./components/User/User";


const App: FC = () => {
const [user, setUser] = useState<IUser | null>(null);

    const lift = (obj:IUser) => {
        setUser(obj);
    }



  return (
    <div>
        <hr/>
        {JSON.stringify(user)}
        <hr/>
        <Users lift={lift}/>

    </div>
  );
}

export default App;
