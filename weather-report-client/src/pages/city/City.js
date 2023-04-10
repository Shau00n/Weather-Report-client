// // Initialize variables
// let taa = 25;
// let tr = 25;
// let vel = 0.1;
// let rh = 50;
// let met = 1.0;
// let clo = 0.5;
// let wme = 0;
// let pa = 101325;


// const epsilon = 0.01; // define the desired precision

// const fcl = 1.0 + 0.15 * clo; // calculate the clothing insulation
// const tcl = 33 - ((33 - tr) / 2.0 + 0.36 * (taa - 33) + fcl * 0.25) / fcl; // calculate the clothing surface temperature

// function calculatePMV(met, clo, ta, tr, v, rh) {
//     const pa = rh * 10 * Math.exp(16.6536 - 4030.183 / (ta + 235.0));
//     const icl = 0.155 * clo;
//     const m = met * 58.15;
//     const w = m - 58.15;
//     const mw = m - w;
//     const ts = 35.7 - 0.028 * mw;
//     const fcl = 1.0 + 0.15 * icl;
//     const tcl = 0.303 * Math.exp(-0.036 * m) + 0.028;
//     const hl1 = 3.05 * 0.001 * (5733.0 - 6.99 * mw - pa);
//     const hl2 = 0.42 * (mw - 58.15);
//     const hl3 = 1.7 * 0.00001 * m * (5867.0 - pa);
//     const hl4 = 0.0014 * m * (34.0 - ta);
//     const hl5 = 3.96 * 0.00000001 * fcl * (Math.pow(tcl + 273.0, 4) - Math.pow(tr + 273.0, 4));
//     const hl6 = fcl * v * (tcl - ta);
//     const hl = hl1 + hl2 + hl3 + hl4 + hl5 + hl6;
//     const alfa = 0.0043 * v + 0.029;
//     const hc = 1.0 / (1.0 / (alfa * fcl) + 0.00015);
//     const taa = ta + 273.0;
//     const tra = tr + 273.0;
//     const tcla = tcl + 273.0;
//     const p1 = icl * hc * (tcla - taa);
//     const p2 = hc * (tra - taa);
//     const xn = ts - (p1 + hl) / p2;
//     const xf = xn * p2 + p1;
//     const pmv = 0.303 * Math.exp(-0.036 * m) + 0.028 - xf / 100.0;
//     return pmv;
// }

// let pmv1 = calculatePMV(taa, tr, vel, rh, met, clo, wme);

// // Define the clothing coordinates
// let coordinates = [
//   { value: 0.0, outfit: ['Blouse/T-shirt', 'Skirt/Shorts', 'Sandals/Sneakers'] },
//   { value: 0.1, outfit: ['Short-sleeve shirt', 'Shorts', 'Sandals/Sneakers'] },
//   { value: 0.2, outfit: ['Short-sleeve polo shirt', 'Shorts', 'Sandals/Sneakers'] },
//   { value: 0.3, outfit: ['Short-sleeve knit shirt', 'Longer shorts', 'Sandals/Sneakers'] },
//   { value: 0.4, outfit: ['Thin short-sleeve shirt/knit shirt', 'Jeans/Slacks', 'Sandals/Sneakers'] },
//   { value: 0.5, outfit: ['Short-sleeve sweater/shirt', 'Jeans/Slacks', 'Sandals/Sneakers'] },
//   { value: 0.6, outfit: ['Thin long-sleeve shirt/knit shirt', 'Jeans/Slacks', 'Sandals/Sneakers'] },
//   { value: 0.7, outfit: ['Long-sleeve shirt', 'Jeans/Slacks', 'Loafers/Sandals'] },
//   { value: 0.8, outfit: ['Long-sleeve sweater/shirt', 'Jeans/Slacks', 'Loafers/Sandals'] },
//   { value: 0.9, outfit: ['Suit/jacket', 'Thin knit shirt', 'Leather shoes'] },
//   { value: 1.0, outfit: ['Suit/jacket', 'Long-sleeve shirt', 'Leather shoes'] },
//   { value: 1.1, outfit: ['Suit/jacket', 'Sweater/knit', 'Leather shoes'] },
//   { value: 1.2, outfit: ['Suit/jacket', 'Thick long-sleeve shirt/knit', 'Leather shoes'] },
//   { value: 1.3, outfit: ['Coat', 'Thick long-sleeve shirt/knit', 'Boots/Leather shoes'] },
//   { value: 1.4, outfit: ['Coat', 'Thick sweater/knit', 'Boots/Leather shoes'] },
// ]
// const cloList = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0];

// // cloListを小数第一位に変換
// const roundedCloList = cloList.map(clo => parseFloat(clo.toFixed(1)));

// let b = 2.0; // initialize upper limit for binary search
// let a = 0.0; // initialize lower limit for binary search
// let eps = 0.00015; // set epsilon for binary search
// let lcl = (a + b) / 2; // set initial value for lcl



// while (Math.abs(pmv1) > eps) {
//   if (pmv1 > 0) {
//     b = lcl;
//   } else {
//     a = lcl;
//   }
//   lcl = (a + b) / 2;
//   pmv1 = calculatePMV(taa, tr, vel, rh, met, clo, wme);
// }

// // 小数第一位に変換したcloListと比較
// const index = roundedCloList.indexOf(parseFloat(lcl.toFixed(1)));

// // 該当するコーディネイトを取得
// const coordinate = coordinates[index];

// console.log(`The recommended coordinate for clo=${lcl.toFixed(1)} is: ${coordinate}`);