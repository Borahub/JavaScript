

let ivestaSuma = parseInt(prompt('Jūsų mokėtina suma yra:'))

let arbatpinigiai = 0;
let galutinesuma;

if (ivestaSuma <= 20) {
    arbatpinigiai = ivestaSuma * 0.1;
} else if (20 < ivestaSuma && ivestaSuma <= 50) {
    arbatpinigiai = ivestaSuma * 0.075;
} else {
    arbatpinigiai = ivestaSuma * 0.05
}
galutinesuma = `Visa sumoketa suma ${ivestaSuma + arbatpinigiai}
arbatpinigiai yra ${arbatpinigiai} saskaita buvo ${ivestaSuma}`

console.log(galutinesuma)

const baldai = ['lempa', 'lentynos', 'sofa', 'stalas'];
baldai.push('kedes' , 'suolas');


console.log(baldai)

const saldytuvas = {
    morkos: 3,
    kiausiniai: 12,
    sviestas: 0.5,
    vynuoges: 'nemazai',
    darzoves: ['morka', 'agurkas']
}

const manoMasyvas = [saldytuvas, {}, {}]


for (let i =20; i >= 0; i = i - 4) {
    console.log(i)
}