import { useState } from "react"


export default function StateFulForm() {
    const [name, setName] = useState('Rojoni Klanto');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('');
            console.log(name, email, password);
        }
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" className="border-2 "/>
                <br />
                <input 
                    onChange={handleEmailChange}
                type="email" name="email" id="" className="border-2 "/>
                <br />
                <input 
                    onChange={handlePasswordChange}
                type="password" name="password" required className="border-2 " />
                <br />
                <input type="submit" value="Submit" className="border-2 "/>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
}
