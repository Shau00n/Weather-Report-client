// import { Link } from "react-router-dom";
// import styled from 'styled-components'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function Home() {
//     return (

//           //テキストボックスの数値を変数に格納する
//           var m = eval(document.js.txtm.value)
//           var w = eval(document.js.txtw.value)
//           var ta = eval(document.js.txtta.value)
//           var tr = eval(document.js.txttr.value)
//           var rh = eval(document.js.txtrh.value)
//           var lcl = eval(document.js.txtcl.value)
//           var va = eval(document.js.txtva.value)
      
//           const eps = 0.00001
//           mw = m - w;
      
//           //アントワーヌの式による蒸気圧計算
//           ppk = 673.4 - 1.8 * ta;
//           ppa = 3.2437814 + 0.00326014 * ppk + 2.00658 * 0.000000001 * ppk * ppk * ppk;
//           ppb = (1165.09 - ppk) * (1 + 0.00121547 * ppk);
//           pa = rh / 100 * 22105.8416 / Math.exp(2.302585 * ppk * ppa / ppb) * 1000.0;
      
//           //fcl=着衣表面積/裸体表面積の比の計算
//           if (lcl > 0.5) {
//             fcl = 1.05 + 0.1 * lcl;
//           } else {
//             fcl = 1.0 + 0.2 * lcl;
//           }
      
//           //衣服表面温度tclの初期値
//           tcl = ta;
//           tcla = tcl + 1.0;
      
//           //着衣表面温度の算出
//           while (Math.abs(tcla - tcl) > eps) {
//             tcla = 0.8 * tcla + 0.2 * tcl;
//             hc = 12.1 * Math.sqrt(va);
//             if (2.38 * Math.sqrt(Math.sqrt(Math.abs(tcl - ta))) > hc) {
//               hc = 2.38 * Math.sqrt(Math.sqrt(Math.abs(tcl - ta)));
//             }
//             tcl = 35.7 - 0.028 * mw - 0.155 * lcl * (3.96 * 0.00000001 * fcl * (Math.pow((tcla + 273.15), 4) - Math.pow((tr + 273.15), 4)) + fcl * hc * (tcla - ta));
//           }
      
//           //PMVの計算
//           pm1 = 3.96 * 0.00000001 * fcl * (Math.pow((tcl + 273.15),4) - Math.pow((tr + 273.15),4));
//           pm2 = fcl * hc * (tcl - ta);
//           pm3 = 0.303 * Math.exp(-0.036 * m) + 0.028;
//           if (mw > 58.15) {
//             pm4 = 0.42 * (mw - 58.15);
//           } else {
//             pm4 = 0;
//           }
//           pmv = pm3 * (mw - 3.05 * 0.001 * (5733.0 - 6.99 * mw - pa) - pm4 - 1.7 * 0.00001 * m * (5867.0 - pa) - 0.0014 * m * (34.0 - ta) - pm1 - pm2);
//           ppd = 100.0 - 95.0 * Math.exp(-0.0335 * Math.pow(pmv,4) - 0.2179 * pmv * pmv);
      
//           //小数点以下2桁に直す
//           pmv = pmv * 100;
//           pmv = Math.round(pmv);
//           pmv = pmv / 100;
      
//           ppd = ppd * 100;
//           ppd = Math.round(ppd);
//           ppd = ppd / 100;
      
//           //結果表示
//           alert("PMV: "+pmv+"   PPD: "+ppd + " [%]");
       




//         < >
//       <Form name="js">
//   代謝量 Metabolic rate: <input name="txtm" defaultValue="58.2" type="text" /> [W/m2]<br />
//   外部仕事 External work: <input name="txtw" defaultValue={0.0} type="text" /> [W/m2]<br />
//   気温 Air temperature: <input name="txtta" defaultValue={20.0} type="text" /> [degree Celsius]<br />
//   放射温度 Radiant temperature: <input name="txttr" defaultValue={20.0} type="text" /> [degree Celsius]<br />
//   相対湿度 Relative humidity: <input name="txtrh" defaultValue={50.0} type="text" /> [%]<br />
//   衣服の熱抵抗 Clothing: <input name="txtcl" defaultValue={1.0} type="text" /> [clo]<br />
//   気流速 Air velocity: <input name="txtva" defaultValue="0.2" type="text" /> [m/s]<br />
//   <input defaultValue="Calc." onclick={pmvcalc()} type="button" /><br />
//   <DropdownButton id="dropdown-basic-button" title="Dropdown button">
//       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//     </DropdownButton>
//     <DropdownButton id="dropdown-basic-button" title="Dropdown button">
//       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//     </DropdownButton>
// </Form>

        
//         </>
//     );
// }

// export default Home;


// const H1 = styled.h1`
//     text-align: center;
//     font-size:  ${props => props.theme.x};
//     font-weight: ${props => props.theme.bold};
//     margin-bottom: 50px;
// `