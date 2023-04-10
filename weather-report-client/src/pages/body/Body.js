import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from '../../components/Navbar';
import Result from "../result/Result";

function Body() {
    const [formData, setFormData] = useState({
        met: '',
        ta: '',
        tr: '',
        v: '',
        rh: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const queryParams = new URLSearchParams(formData).toString();
        const url = `http://localhost:3000/result?${queryParams}`;
        window.location.href = url;
    };
    return (
        < >
            <Navbar />
            <DIV>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formMet">
                        <Form.Label>代謝量 (met)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="代謝量を入力してください"
                            name="met"
                            value={formData.met}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formTa">
                        <Form.Label>空気温度 (℃)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="温度を入力してください"
                            name="ta"
                            value={formData.ta}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formTr">
                        <Form.Label>放射温度 (℃)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="放射温度を入力してください"
                            name="tr"
                            value={formData.tr}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formV">
                        <Form.Label>平均風速 (m/s)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="風速を入力してください"
                            name="v"
                            value={formData.v}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formRh">
                        <Form.Label>相対湿度 (%)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="相対湿度を入力してください"
                            name="rh"
                            value={formData.rh}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        送信
                    </Button>
                </Form>
            </DIV>
        </>
    );
}

export default Body;


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

