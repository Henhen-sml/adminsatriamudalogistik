import { useRouter } from "next/router"
import { useEffect } from "react"
import Cookies from "js-cookie";
import Button from "components/Button";
import styled from "styled-components";

export default function Statistic() {
    const Auth:any = Cookies.get('_IDs')
    const route:any = useRouter();

    useEffect(() => {
        if(!Auth){
            alert('You Not Supposed to here before login ?')
            route.push('/')
        }
    })

    function Logout() {
        Cookies.remove('_IDs')
        route.push('/')
    }

    return(
        <>
        Statistic
            <Button onClick={(e) => Logout()}>LogOut</Button>
        </>
    )

}


const Title = styled.h1`
text-align: center;
padding-top: 45rem;
`