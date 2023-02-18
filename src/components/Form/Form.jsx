import React from 'react';
import { useState } from 'react';
import styles from './Form.module.css';
import validation from './validation.js';
import { FaGithubAlt, FaUserAlt, FaUnlockAlt, FaUserCheck, FaUserCircle } from 'react-icons/fa'


export default function Form(props) {

const [userData, setUserData] = useState({
    username: '',
    password: ''
});

const [errors, setErrors] = useState({
    username: '',
    password:''
})


const handleInputChange = (event)=>{
    setUserData({...userData, [event.target.name]: event.target.value})
    setErrors(validation(userData))
}

const handleSubmint = (event) => {
    event.preventDefault();
    props.login(userData)
}

    return(
        <div>
            <form className={styles.container} onSubmit={handleSubmint}>
            <label className={styles.name}><b>Username: </b></label>
            <div className={styles.divlogo}>
            <FaUserCircle className={styles.logo}/>
                {
                    <input 
                    type="text" 
                    name='username'
                    
                    className={styles.label } 
                    value={userData.username} 
                    onChange={handleInputChange}/>}
            </div>
                {errors.username && <p className={styles.warning}>{errors.username}</p>}
            <label className={styles.name}><b>Password: </b></label>
                <input className={styles.label} type="password" name='password' placeholder='Password' value={userData.password} onChange={handleInputChange}/>
                {errors.password &&<p className={styles.warning}>{errors.password}</p>}
            <button className={styles.btt}>LOGIN</button>
            </form>
        </div>
    );
}