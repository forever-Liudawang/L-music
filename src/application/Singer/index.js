import React ,{memo} from 'react'
import {Container} from "./style"
function Singer(props) {
    console.log(props,"props=====>>>>")
    return (
        <Container>
            singer
        </Container>
    )
}
export default  memo(Singer)
