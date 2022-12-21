import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from '../../components/Navbar';
// import Main from '../../layouts/Main';

function Home() {
    return (
        < >
            <Navbar />
            <DIV>
                <Form>
                    <H1>コンディションにあったコーディネイト<br />を提案してもらいますか？</H1>
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
        </>
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
    margin-bottom: 40px;
    margin-top: 70px;

`
const DIV = styled.div`
    text-align: center;
    background-color: #EEFAFF;
    margin-top: 30px;
    margin-right: 100px;
    margin-left: 100px;
    padding: 80px

`
