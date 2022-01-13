import React from "react";
import styled from "@emotion/styled"



const Container = styled("div")`
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 2.5rem;
        color: var(--dark-green);
    }
`

const MessageComponent = (props) => {
    return (
        <Container>
            <p>{props.message}</p>
        </Container>
    )
}

export default MessageComponent;