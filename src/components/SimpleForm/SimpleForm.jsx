

export default function SimpleForm() {
   
    const handleSubmit =e => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
        console.log('submitted')
    }
    return (
        <div>
            <form onSubmit ={handleSubmit}>
                <input className=" mb-3 border border-red-500" type="text" name="name"></input>
                <input className="mb-3 border border-red-500" type="email" name="email"></input>
                <input className="mb-3 border border-red-500" type="phone" name="phone"></input>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}
