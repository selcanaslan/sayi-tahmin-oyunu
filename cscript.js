

// let rastgele = Math.round(Math.random() * 10)
// console.log(rastgele);

// tahmin = Number(prompt('Bir tamin giriniz'))

// if(tahmin == rastgele){
//     console.log('Tebrikler kazandınız');
// }
// else if(tahmin > rastgele){
//     console.log('Daha büyük bir sayı giriniz')
// }
// else{
//     console.log('Daha büyük bir sayı giriniz');
// }



const btn = document.getElementById('btn');
const inp = document.getElementById('tahmin');
const sonuc = document.getElementById('sonuc');
const zorluk = document.getElementById('select');
const badge = document.getElementById('zorluk');



inp.disabled = true
btn.disabled = true

let rastgele
let hak = 3
badge.textContent = hak
console.log(zorluk.value);

zorluk.addEventListener('change', rastgeleGetir)

function rastgeleGetir() {
    inp.disabled = false
    btn.disabled = false
    rastgele = Math.round(Math.random() * zorluk.value)
    console.log(rastgele)
}

btn.addEventListener('click', oyun)
inp.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        oyun()
    }
})


function oyun() {
    if (isNaN(inp.value)) {
        sonuc.textContent = ' Sadece sayı girebilirsiniz'
        hak++
    }
    hak--
    badge.textContent = hak
    tahmin = Number(inp.value)
    console.log(tahmin);
    if (tahmin == rastgele) {
        sonuc.textContent = 'Tebrikler oyunu kazandın'
        sonuc.classList.remove('text-primary', 'text-danger')
        sonuc.classList.add('text-succes')
        btn.disabled = true
    }
    else if (tahmin > rastgele) {
        sonuc.textContent = ' Daha küçük bir sayı giriniz'
        sonuc.classList.remove('text-primary')
        sonuc.classList.add('text-danger')
    }
    else if (tahmin < rastgele) {
        sonuc.textContent = 'Daha büyük bir sayı giriniz'
        sonuc.classList.remove('text-primary')
        sonuc.classList.add('text-danger')
    }

    if (hak == 0 && rastgele != tahmin) {
        sonuc.textContent = 'Katbettiniz'
    }
}