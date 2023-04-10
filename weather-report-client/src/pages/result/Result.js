import { Link } from "react-router-dom";
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';

const Result = ({ sex, age1, weight, height, activityLevel }) => {

    // PMV計算式の定義
    // // 必要な定数の定義
    // const airTemperature = 25.0; // 空気温度
    // const meanRadiantTemperature = 25.0; // 平均放射温度
    // const relativeHumidity = 50.0; // 相対湿度
    // const airVelocity = 0.1; // 風速
    // const standardClo = 0.6; // 標準的な着衣量
    // const age = 30; // 年齢
    // let gender = "male"; // 性別（male: 男性, female: 女性）
    // const bodySurfaceArea = 1.8; // 体表面積

    // // 性別によって代謝率を設定
    // let metabolicRate;
    // if (gender === "male") {
    //     metabolicRate = 1.0; // 男性の代謝率
    // } else if (gender === "female") {
    //     metabolicRate = 0.9; // 女性の代謝率
    // }

    // // PMVが0になるcloの計算
    // let clo = standardClo;
    // let diff = 100;
    // let count = 0;

    // while (diff > 0.01 && count < 100) {
    //     const tcl = 0.303 * Math.exp(-0.036 * metabolicRate) + 0.028;
    //     const hc = 2.38 * Math.pow(Math.abs(meanRadiantTemperature - airTemperature), 0.25);
    //     const vaporPressure = (relativeHumidity / 100) * 6.105 * Math.exp(17.27 * airTemperature / (237.7 + airTemperature));
    //     const pa = vaporPressure / 10 * 0.12 * (100 - relativeHumidity) + 0.38 * airVelocity;
    //     const pmv = 0.303 * Math.exp(-0.036 * metabolicRate) * (bodySurfaceArea - 0.078 * metabolicRate - 0.116) + 0.42 * (metabolicRate - 58) - 0.006 * (age - 35) + (0.28 * (tcl - airTemperature) - hc * (meanRadiantTemperature - airTemperature) - pa) / (metabolicRate * (3.05 * 0.001 * bodySurfaceArea));
    //     if (pmv < 0) {
    //         clo += 0.1;
    //     } else {
    //         clo -= 0.1;
    //     }
    //     diff = Math.abs(pmv);
    //     count++;
    // }

    // console.log("PMVが0になるclo: " + clo.toFixed(2));

    // const airTemperature = 25.0; // 空気温度
    // const meanRadiantTemperature = 25.0; // 平均放射温度
    // const relativeHumidity = 50.0; // 相対湿度
    // const airVelocity = 0.1; // 風速
    // const standardClo = 0.6; // 標準的な着衣量
    // const age = 30; // 年齢
    // let gender = "male"; // 性別（male: 男性, female: 女性）
    // const bodySurfaceArea = 1.8; // 体表面積

    // // 性別によって代謝率を設定
    // let metabolicRate;
    // if (gender === "male") {
    //     metabolicRate = 1.0; // 男性の代謝率
    // } else if (gender === "female") {
    //     metabolicRate = 0.9; // 女性の代謝率
    // }

    // // PMVが0になるcloの計算
    // let clo = Math.max(0.5, Math.min(2, standardClo)); // cloの初期値を0.5~2の間に収める
    // let diff = 100;
    // let count = 0;

    // while (diff > 0.01 && count < 100) {
    //     const tcl = 0.303 * Math.exp(-0.036 * metabolicRate) + 0.028;
    //     const hc = 2.38 * Math.pow(Math.abs(meanRadiantTemperature - airTemperature), 0.25);
    //     const vaporPressure = (relativeHumidity / 100) * 6.105 * Math.exp(17.27 * airTemperature / (237.7 + airTemperature));
    //     const pa = vaporPressure / 10 * 0.12 * (100 - relativeHumidity) + 0.38 * airVelocity;
    //     const pmv = 0.303 * Math.exp(-0.036 * metabolicRate) * (bodySurfaceArea - 0.078 * metabolicRate - 0.116) + 0.42 * (metabolicRate - 58) - 0.006 * (age - 35) + (0.28 * (tcl - airTemperature) - hc * (meanRadiantTemperature - airTemperature) - pa) / (metabolicRate * (3.05 * 0.001 * bodySurfaceArea));
    //     if (pmv < 0 && clo < 2) { // cloの値が2を超えないようにする
    //         clo += 0.1;
    //     } else if (pmv > 0 && clo > 0) { // cloの値が0を下回らないようにする
    //         clo -= 0.1;
    //     }
    //     diff = Math.abs(pmv);
    //     count++;
    // }

    // console.log("PMVが0になるclo: " + clo.toFixed(2));


    function calculatePMV(met, clo, ta, tr, v, rh) {
        const pa = rh * 10 * Math.exp(16.6536 - 4030.183 / (ta + 235.0));
        const icl = 0.155 * clo;
        const m = met * 58.15;
        const w = m - 58.15;
        const mw = m - w;
        const ts = 35.7 - 0.028 * mw;
        const fcl = 1.0 + 0.15 * icl;
        const tcl = 0.303 * Math.exp(-0.036 * m) + 0.028;
        const hl1 = 3.05 * 0.001 * (5733.0 - 6.99 * mw - pa);
        const hl2 = 0.42 * (mw - 58.15);
        const hl3 = 1.7 * 0.00001 * m * (5867.0 - pa);
        const hl4 = 0.0014 * m * (34.0 - ta);
        const hl5 = 3.96 * 0.00000001 * fcl * (Math.pow(tcl + 273.0, 4) - Math.pow(tr + 273.0, 4));
        const hl6 = fcl * v * (tcl - ta);
        const hl = hl1 + hl2 + hl3 + hl4 + hl5 + hl6;
        const alfa = 0.0043 * v + 0.029;
        const hc = 1.0 / (1.0 / (alfa * fcl) + 0.00015);
        const taa = ta + 273.0;
        const tra = tr + 273.0;
        const tcla = tcl + 273.0;
        const p1 = icl * hc * (tcla - taa);
        const p2 = hc * (tra - taa);
        const xn = ts - (p1 + hl) / p2;
        const xf = xn * p2 + p1;
        const pmv = 0.303 * Math.exp(-0.036 * m) + 0.028 - xf / 100.0;
        return pmv;
    }



    function findCloForZeroPMV(met, ta, tr, v, rh) {
        let lowerBound = 0;
        let upperBound = 1.5;
        let mid = parseFloat(((lowerBound + upperBound) / 2).toFixed(3));
        let pmv = calculatePMV(met, mid, ta, tr, v, rh);
        let iterationCount = 0;

        while (Math.abs(pmv) > 0.001 && iterationCount < 100) {
            if (pmv > 0) {
                upperBound = mid;
            } else {
                lowerBound = mid;
            }
            mid = parseFloat(((lowerBound + upperBound) / 2).toFixed(3));
            pmv = calculatePMV(met, mid, ta, tr, v, rh);
            iterationCount++;
        }

        return mid;
    }

    const clothing = {
        0: 'ブラウス・半袖Tシャツ、スカート・ハーフパンツ、サンダル・スニーカー',
        0.1: '半袖シャツ、ショートパンツ、サンダル・スニーカー',
        0.2: '半袖ポロシャツ、ショートパンツ、サンダル・スニーカー',
        0.3: '半袖ニット・カットソー、長めのショートパンツ、サンダル・スニーカー',
        0.4: '薄手の半袖シャツ・カットソー、ジーンズ・スラックス、サンダル・スニーカー',
        0.5: '半袖セーター・シャツ、ジーンズ・スラックス、サンダル・スニーカー',
        0.6: '薄手の長袖シャツ・カットソー、ジーンズ・スラックス、サンダル・スニーカー',
        0.7: '長袖シャツ、ジーンズ・スラックス、ローファー・サンダル',
        0.8: '長袖セーター・シャツ、ジーンズ・スラックス、ローファー・サンダル',
        0.9: 'スーツ・ジャケット、薄手のニット・シャツ、革靴',
        1.0: 'スーツ・ジャケット、長袖シャツ、革靴',
        1.1: 'スーツ・ジャケット、セーター・ニット、革靴',
        1.2: 'スーツ・ジャケット、厚手の長袖シャツ・ニット、革靴',
        1.3: 'コート、厚手の長袖シャツ・ニット、ブーツ・革靴',
        1.4: 'コート、厚手のセーター・ニット、ブーツ・革靴',
        1.5: 'コート、スーツ'
      };

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const met = queryParams.get('met');
    const ta = queryParams.get('ta');
    const tr = queryParams.get('tr');
    const v = queryParams.get('v');
    const rh = queryParams.get('rh');
    const clo = findCloForZeroPMV(met, ta, tr, v, rh);
    console.log(clo); // 0に近い値が出力されるはずです







    const calculatePmv = () => {
        // PMV calculation code
    };

    return (
        <>
            <Navbar />
            <DIV>
                <H1>あなたにあった服装は、、、</H1>
                <H2>コーディネイト：{clothing[clo.toFixed(1)]}</H2>
                <H2>気温：１９度<br />
                    風量：３m<br />
                    天気：晴れ<br />
                    場所：東京<br />
                    {/* {clo} */}
                </H2>


                <H3>再度計測をする場合は開始を押してね！</H3>
                <Button variant="primary" type="submit" href="/">
                    開始！
                </Button>
            </DIV>
        </>
    );
}

export default Result;


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
    padding: 40px

`