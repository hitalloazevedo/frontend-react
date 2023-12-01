import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    return(
        <>
            <Link to={'/login'}>login</Link>
        </>
    )
}