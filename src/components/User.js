import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import usePageCutter from '../hooks/usePageCutter.js'
import useFilters from '../hooks/useFilters.js'
import NatBadge from './NatBadge'
import UserNull from './UserNull'
import { FaPhone } from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai"
import { getUserModalData,showModal } from '../Redux/dialectSlice.js'
import './style/user.css'

function User() {

    const dispatch = useDispatch()
    const themeMode = useSelector(state => state.dialect.themeMode)
    const filteredData = useFilters() //we receive the filtered data
    const users = usePageCutter() //slicing data for one page

    if( users.length === 0 ) {        
        return <UserNull/>
    }
    else {
        return (
            <ul className='user-box'>
                {users.map((user) => (
                    <li className={`user-${themeMode}`} 
                        key={user.login.uuid}
                        onDoubleClick={() => { 
                            dispatch(getUserModalData(user))
                            dispatch(showModal(true))
                        }}
                    >
                    <div className="pass">
                        <div className="avatar">
                            <img src={user.picture.medium} className='photo' alt=''/> 
                        </div>
                        <div className="info">
                            <h3 className="full-name cell">
                                {user.name.first} {user.name.last}
                            </h3>
                            <p className="age cell">
                                {user.dob.age} years ( {new Date(user.dob.date).toLocaleDateString()} )
                            </p>
                            <NatBadge  user={user} /> 
                        </div>
                    </div>
                    <div className='contacts'>
                        <div className="mail cell">
                            <i className={`icon-${themeMode}`}><AiOutlineMail/></i>
                            <p>{user.email}</p>
                        </div>
                        <div className="tel cell">
                            <i className={`icon-${themeMode}`}><FaPhone/></i>
                            <p>{user.phone}</p>
                        </div>
                    </div>
                    <div className="location">
                        <p className='cell'>/ {user.location.country}  /</p>
                        <p className='cell'>{user.location.state} , {user.location.city}  </p>
                        <p className='cell'>{user.location.street.number},{user.location.street.name} street,</p>
                    </div>
                </li>))}
            </ul> 
        )
    }
}
export default User;

