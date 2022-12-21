import { Link } from "react-router-dom";
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Home() {
    return (
        <Form>
            <H1>コンディションにあった服を提案してもらいますか？</H1>
            <Button variant="primary" type="submit">
                開始！
            </Button>
        </Form>
    );
}

export default Home;


const H1 = styled.h1`
    text-align: center;
    font-size:  ${props => props.theme.x};
    font-weight: ${props => props.theme.bold};
    margin-bottom: 50px;
`