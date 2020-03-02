import React, { useContext, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { UserContext, LoginContext, CurrentUserContext } from '../../context/userContext';
import './style.scss'
import { Link, Redirect } from 'react-router-dom';


const Login = () => {
    const [login, setLogin] = useContext(LoginContext);
    const [, setCurrentUser] = useContext(CurrentUserContext);
    const [user] = useContext(UserContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const userIndex = user.findIndex(test => test.email === email)
        if(userIndex !== -1) {
            if(user[userIndex].password === password){
                alert('login ok')
                setLogin(true);
                setCurrentUser({
                    name: user[userIndex].name,
                    email: user[userIndex].email, items: []
                })
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
