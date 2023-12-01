import { useNavigate } from "react-router"

export default function Home() {
    const navigate = useNavigate()
    return(
        <>
            <a href={navigate('/login')}>login</a>
        </>
    )
}