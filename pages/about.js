import Link from 'next/link'

export default function about() {
    return (
        <div>
            <h1>Hello, world</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    )
}
