import React from "react";
import styled from "@emotion/styled"


const Container = styled("div")`
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Spinner = styled("div")`
    border: 5px solid var(--dark-grey);
    border-top: 5px solid var(--light-grey);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg) ;
        }
    }
`;

const Loading = () => {
    return (
        <Container>
            <Spinner />
        </Container>
    
    )
    
}

export default Loading;