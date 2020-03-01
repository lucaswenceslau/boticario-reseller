import React, { useContext, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { UserContext } from '../../context/userContext';
import './style.scss'
import { Link, Redirect } from 'react-router-dom';


const Login = () => {
    
    const [user,,login,setLogin] = useContext(UserContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    console.log("user", user)
    
    console.log("loGin", login)
    const handleSubmit = (ev) => {
        ev.preventDefault();
        const userIndex = user.findIndex(test => test.email === email)
        if(userIndex !== -1) {
            if(user[userIndex].password === password){
                alert('login ok')
                setLogin(true);
            }
            else{
                alert('senha incorreta')
            }
        }
        else {
            alert('Usuário não cadastrado ou login incorreto')
        }
    }

    return (
        <div className="login">
        {login && (<Redirect to="/"/>)}
            <span className="login__logo">
                <img src="" alt="" className="login__logo--img" />
            </span>
            <form className="login__form" onSubmit={ev => handleSubmit(ev)}>
                <label htmlFor="email" className="login__form-label">
                    Email
                    <Input 
                        type="email" 
                        placeholder="example@example.com"
                        onChange={ev => setEmail(ev.target.value)}
                    />
                </label>

                <label htmlFor="password" className="login__form-label">
                    Password
                <Input
                    type="password"
                    placeholder="Type your password"
                    onChange={ev => setPassword(ev.target.value)} 
                />
                </label>

                <Button content="Login" />

                <p className="login__create-account">Don't have an account yet?
                    <br />
                    <Link to='/create' className="login__create-account--create">Create a account</Link>
                </p>
            </form>

        </div>
    );
}

export default Login;
