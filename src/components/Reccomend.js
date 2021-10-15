import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Reccomends = (props) => {
    return (
        <Container>
            <h3>Reccomended for you</h3>
            <Content>
                <Wrap>
                    <Link id="/">
                        <img src='https://th.bing.com/th/id/R.b9726e2cb1a648c776ab46f688ebe718?rik=c792sdLA7mjJIA&pid=ImgRaw&r=0' alt='' />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link id="/">
                        <img src='https://th.bing.com/th/id/R.b9726e2cb1a648c776ab46f688ebe718?rik=c792sdLA7mjJIA&pid=ImgRaw&r=0' alt='' />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link id="/">
                        <img src='https://th.bing.com/th/id/R.b9726e2cb1a648c776ab46f688ebe718?rik=c792sdLA7mjJIA&pid=ImgRaw&r=0' alt='' />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link id="/">
                        <img src='https://th.bing.com/th/id/R.b9726e2cb1a648c776ab46f688ebe718?rik=c792sdLA7mjJIA&pid=ImgRaw&r=0' alt='' />
                    </Link>
                </Wrap>
            </Content>
        </Container>
     )
};


const Container = styled.div`
    padding: 0 0 26px;
`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4,minmax(0,1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`
const Wrap = styled.div`
padding-top:56.25%;
border-radius:10px;
box-shadow: rgb(0 0 0 / 70%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow:hidden;
position:relative;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 3px solid rgba(249, 249, 249, 0.1);

img {
    inset:0px;
    display:block;
    height:100%;
    width:100%;
    object-fit:cover;
    opacity:1;
    position:absolute;
    transition: opacity 500ms ease-in-out;
    top:0;
    z-index:1;
}

&:hover {
    border-width:5px;
    border:rgba(249, 249, 249 0.8);
    box-shadow: rgb(0 0 0 / 83%) 0px 40px 58px -16px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    transform: scale(1.05);
}
`;


export default Reccomends