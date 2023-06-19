
import {useState, useEffect, useContext} from 'react';
import { AuthContext } from '@/hooks/AuthContext';

import Container from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const ProfileInfo = (props) => {
const { currentUser } = useContext(AuthContext)

    return <>
   
            {props.userInfo && currentUser && props.userInfo.map((user)=>{
                if(user.email === currentUser.email){
                    return <>
                        <div key={user.id}>
                        <p key={user.displayName}>Name: {user.firstName + " " + user.lastName}</p>
                        <p key={user.companyName}>Company: {user.companyName}</p>
                        <p key={user.email}>Email: {user.email}</p>
                        <p key={user.address}>Address: {user.address}</p>
                        </div>
                    </>
                }
            })}
  
    </>
}

export default ProfileInfo;