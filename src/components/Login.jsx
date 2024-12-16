import { useState } from "react";

function Login({agent, setUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleClickLogin = async(e) => {
        e.preventDefault();
        if (!email) {
            window.alert("Please enter your bluesky email.");
        }
        if (!password) {
            window.alert("Please enter your bluesky password.");
        }
        try {
            const { data } = await agent.login({
                identifier: email,
                password: password,
            })
            setUser(data);
        } catch(error) {
            window.alert('Login fail. Check your email and password.');
        } 
    }

    return (
        <div className="login-container">
            <form>
                <input 
                    placeholder="Bluesky email or username" 
                    value={email} 
                    onChange={handleChangeEmail}
                />
                <input 
                    type="password" 
                    placeholder="Bluesky password" 
                    value={password} 
                    onChange={handleChangePassword}
                />
                <button onClick={handleClickLogin}>Login</button>
            </form>
            <div>
                <div>Log in to access post deletion features. </div>
                <div>You can still view the website without logging in.</div>
            </div>
        </div>
     
    );
  }
  
  export default Login;
  