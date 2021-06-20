import Link from 'next/link'
import { useState } from 'react'

export default function about() {

    const [values, setValues] = useState({
        name: ''
    })

    const handleChange = (e) => {
        const {value, name} = e.target
        setValues({...values, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }
    return (
        <div>
            <h1>Hello, world</h1>
            <form onSubmit={handleSubmit}>

                <input type="text" name="name" value={values.name} onChange={handleChange} />
                <input type="submit" value="save"/>
            </form>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    )
}
