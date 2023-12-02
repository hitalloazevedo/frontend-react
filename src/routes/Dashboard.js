import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import jwt from "jsonwebtoken"
import RenderProducts from "../components/RenderProducts.js"
import Header from "../components/Header.js"

export default function Dashboard() {

    const navigate = useNavigate()



    return (
        <>
            <Header></Header>
            <h1>Dashboard</h1>
            <RenderProducts/>
        </>
    )
}