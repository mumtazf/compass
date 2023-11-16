import React from 'react'
import './Avatar.css'

const Avatar = (props) =>  {
    console.log("hi")
    console.log(props)

    if(!props || !props.user){
        return null;
    }


    return (
        <div className='Avatar'>
            <img className='user-img' src={props.user.avatarurl} />
        </div>
    )
}

export default Avatar