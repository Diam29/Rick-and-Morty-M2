import React from 'react';
import { useState } from 'react';
import styles from './Form.module.css';
import validation from './validation.js';
import {  FaUnlockAlt, FaUserCircle } from 'react-icons/fa'


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
    event.preventDefault();
    setUserData({
        ...userData, [event.target.name]: event.target.value})
    setErrors(validation({
        ...userData, [event.target.name]: event.target.value}))
}

const handleSubmint = (event) => {
    event.preventDefault();
    setErrors(errors)
    props.login(userData)
    
}

    return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmint}>
            <div className={styles.userPass}>
            <label className={styles.label}><b>Username: </b></label>
            <FaUserCircle className={styles.logo}/>
                    <input 
                    type="text" 
                    name='username'
                    className={styles.input} 
                    value={userData.username} 
                    placeholder='Usuario'
                    onChange={handleInputChange}/>
                {errors.username && <p className={styles.error}><b>{errors.username}</b></p>}
            </div>
            <div className={styles.userPass}>
            <label className={styles.label}><b>Password: </b></label>
            <FaUnlockAlt className={styles.logo}/>
                <input 
                className={styles.input} 
                type="password" 
                name='password' 
                value={userData.password}
                placeholder='Contraseña'
                onChange={handleInputChange}/>
                {errors.password && <p className={styles.error}><b>{errors.password}</b></p>}
            </div>
            <button type='submit' className={styles.btt}>LOGIN</button>
            </form>
        </div>
    );
}