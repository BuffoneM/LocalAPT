// function parseAptJSON() {
//     const filePath = './package-lock.json';

//     // get { name, verison, resolved }
//     const jsonData = require(filePath)['dependencies'];
//     const jsonDataArray = Object.keys(jsonData).map(key => {
//         return {
//             name: key,
//             version: jsonData[key].version,
//             resolved: jsonData[key].resolved   
//         }
//     });

//     return jsonDataArray;
// }

// export async function parseAptJSON() {
//     console.log('starting...')
//     fetch('http://ip.jsontest.com/')
//     .then(response => response.json())
//     .then(data => console.log(data));
// }

export function parseAptJSON() {
    console.log('starting...')
    fetch('https://bf4cr.com/bufftest/package-lock.json', {mode: "no-cors"})
    .then(response => response.json())
    .then(data => console.log(data));
}
// export function parseAptJSON() {
//     console.log('starting...')
//     fetch('https://www.reddit.com/r/popular.json')
//     .then(response => response.json())
//     .then(data => console.log(data));
// }

// export async function parseAptJSON() {
//     console.log('Starting...')
//     fetch('https://bf4cr.com/bufftest/package-lock.json')
//     .then(response => response.json())
//     .then(data => {
//         const jsonDataArray = Object.keys(jsonData['dependencies']).map(key => {
//                     return {
//                         name: key,
//                         version: jsonData[key].version,
//                         resolved: jsonData[key].resolved   
//                     }
//                 });
            
//                 return jsonDataArray;
//     });
// }

// const fs = require('fs')