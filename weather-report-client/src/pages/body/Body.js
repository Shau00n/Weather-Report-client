import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from '../../components/Navbar';
// import Main from '../../layouts/Main';

function Home() {
    // useStateで管理している値
    

    return (
        < >
            <Navbar />
            <DIV>
                {/* 性別選択 */}
                <Form.Select aria-label="Default select example" class="form">
                    <option>性別を選択してください</option>
                    <option value="1">男性</option>
                    <option value="2">女性</option>
                </Form.Select><br />
                {/* 身長選択 */}
                <Form.Label>身長を入力して下さい</Form.Label>
                <Form.Control
                    required
                    type="number"
                    placeholder="身長"
                /><br />
                {/* 体重選択 */}
                <Form.Label>体重を入力して下さい</Form.Label>
                <Form.Control
                    required
                    type="number"
                    placeholder="体重"
                    id='form-weight'
                /><br />
                {/* 年齢選択 */}
                <Form.Label>年齢を入力して下さい</Form.Label>
                <Form.Control
                    required
                    type="number"
                    placeholder="年齢"
                /><br />
                {/* 活動レベル選択 */}
                <Form.Select aria-label="Default select example" class="form">
                    <option>活動レベルを選択してください</option>
                    <option value="1..0">椅子に座って静かにしている</option>
                    <option value="1.4">立って仕事をしている</option>
                    <option value="1.9">軽い荷物を運んでいる</option>
                </Form.Select><br />

                <DIV2 >
                    <Button variant="secondary" size="lg" active href="/">
                        前へ
                    </Button>
                    <Button variant="primary" size="lg" active href="result">
                        次へ
                    </Button>{' '}
                </DIV2>

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
const DIV2 = styled.div`
text-align: center;
margin-top: 30px;

`

// .Select.Form `
// weight: 80%;

// `

