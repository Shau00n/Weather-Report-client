import { Link } from "react-router-dom";
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Navbar from '../../components/Navbar';

function Home() {
    // PMV計算式の定義
    // 必要な定数の定義
    const airTemperature = 25.0; // 空気温度
    const meanRadiantTemperature = 25.0; // 平均放射温度
    const relativeHumidity = 50.0; // 相対湿度
    const airVelocity = 0.1; // 風速
    const standardClo = 0.6; // 標準的な着衣量
    const age = 30; // 年齢
    let gender = "male"; // 性別（male: 男性, female: 女性）
    const bodySurfaceArea = 1.8; // 体表面積

    // 性別によって代謝率を設定
    let metabolicRate;
    if (gender === "male") {
        metabolicRate = 1.0; // 男性の代謝率
    } else if (gender === "female") {
        metabolicRate = 0.9; // 女性の代謝率
    }

    // PMVが0になるcloの計算
    let clo = standardClo;
    let diff = 100;
    let count = 0;

    while (diff > 0.01 && count < 100) {
        const tcl = 0.303 * Math.exp(-0.036 * metabolicRate) + 0.028;
        const hc = 2.38 * Math.pow(Math.abs(meanRadiantTemperature - airTemperature), 0.25);
        const vaporPressure = (relativeHumidity / 100) * 6.105 * Math.exp(17.27 * airTemperature / (237.7 + airTemperature));
        const pa = vaporPressure / 10 * 0.12 * (100 - relativeHumidity) + 0.38 * airVelocity;
        const pmv = 0.303 * Math.exp(-0.036 * metabolicRate) * (bodySurfaceArea - 0.078 * metabolicRate - 0.116) + 0.42 * (metabolicRate - 58) - 0.006 * (age - 35) + (0.28 * (tcl - airTemperature) - hc * (meanRadiantTemperature - airTemperature) - pa) / (metabolicRate * (3.05 * 0.001 * bodySurfaceArea));
        if (pmv < 0) {
            clo += 0.1;
        } else {
            clo -= 0.1;
        }
        diff = Math.abs(pmv);
        count++;
    }

    console.log("PMVが0になるclo: " + clo.toFixed(2));




    return (
        <>
            <Navbar />
            <DIV>
                <H1>あなたにあった服装は、、、</H1>
                <H2>コーディネイト：長袖長ズボンにカーディガンを羽織りましょう</H2>
                <H2>気温：１９度<br />
                    風量：３m<br />
                    天気：晴れ<br />
                    場所：東京<br />
                    {clo.toFixed(2)}
                </H2>


                <H3>再度計測をする場合は開始を押してね！</H3>
                <Button variant="primary" type="submit" href="/">
                    開始！
                </Button>
            </DIV>
        </>
    );
}

export default Home;


const H1 = styled.h1`
    text-align: center;
    font-size:  ${props => props.theme.x};
    font-weight: ${props => props.theme.bold};
    margin-bottom: 30px;
`

const H2 = styled.h2`
    text-align: center;
    margin-bottom: 20px; 
`

const H3 = styled.h3`
    text-align: center;
    margin-bottom: 20px; 
`

const DIV = styled.div`
    text-align: center;
    background-color: #EEFAFF;
    margin-top: 30px;
    margin-right: 100px;
    margin-left: 100px;
    padding: 80px

`