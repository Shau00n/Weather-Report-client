import { Link } from "react-router-dom";
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Home() {
    return (
        <DIV>
            <Form>
                <H1>コンディションにあった服を提案してもらいますか？</H1>
                <Button variant="primary" type="submit" href="body" size="lg">
                    測定開始！
                </Button>
                <H2>会員登録をして楽にコーディネイトを決めませんか？</H2>
                <Button variant="primary" size="lg" active href="login">
                    ログイン
                </Button>{' '}
                <Button variant="secondary" size="lg" active href="signup">
                    新規会員登録
                </Button>
            </Form>

        </DIV>
    );
}

export default Home;


const H1 = styled.h1`
    text-align: center;
    font-size:  ${props => props.theme.x};
    font-weight: ${props => props.theme.bold};
    margin-bottom: 50px;
`

const H2 = styled.h2`
    text-align: center;
    font-size:  25px;
    margin-bottom: 50px;
    margin-top: 50px;

`
const DIV = styled.div`
    text-align: center;
    background-color: #EEFAFF;
    margin: 80px;
    padding: 80px

`
