import React, { useState, useContext } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { UserContext } from '../../context/userContext'
import './style.scss';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [cpf, setCpf] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const [users, setUsers] = useContext(UserContext);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (confirmPassword === password) {
            setUsers(old => ({
                ...old,
                name,
                email,
                cpf,
                password
            }))
        }

        console.log(users)
    }
    return (
        <div className="create">
            <span className="create__logo">
                <Link to='/'> Back</Link>
                <img src="" alt="" className="create__logo--img" />
            </span>
            <form className="create__form" onSubmit={ev => handleSubmit(ev)}>
                <label htmlFor="name" className="create__form-label">
                    Full Name
                    <Input
                        type="name"
                        id="name"
                        placeholder="Fulano of Lorem"
                        onChange={ev => setName(ev.target.value)}
                    />
                </label>

                <label htmlFor="cpf" className="create__form-label">
                    CPF
                    <Input
                        type="number"
                        id="cpf"
                        placeholder="000.000.000-00"
                        onChange={ev => setCpf(ev.target.value)}
                    />
                </label>

                <label htmlFor="email" className="create__form-label">
                    Email
                    <Input
                        type="email"
                        id="email"
                        placeholder="example@example.com"
                        onChange={ev => setEmail(ev.target.value)}
                    />
                </label>

                <label htmlFor="password" className="create__form-label">
                    Password
                    <Input
                        type="password"
                        id="password"
                        placeholder="Type your password"
                        onChange={ev => setPassword(ev.target.value)}
                    />
                </label>

                <label htmlFor="password" className="create__form-label">
                    Confirm Password
                    <Input
                        type="password"
                        id="password"
                        placeholder="Repeat your password"
                        onChange={ev => setConfirmPassword(ev.target.value)}
                    />
                </label>

                <Button content="Create Account" type='submit' />
                <p className="create__create-account">Already have an account? <Link to='/login' className="create__create-account--create">login</Link></p>
            </form>

        </div>
    );
}

export default CreateAccount;
