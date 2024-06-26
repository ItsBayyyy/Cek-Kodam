const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

let data = [
    "Martabak Cokelat",
    "Naga Sakti",
    "Ratu Pantai Selatan",
    "Harimau Putih",
    "Raja Jin",
    "Dewi Bulan",
    "Penjaga Hutan",
    "Singa Emas",
    "Banteng Sakti",
    "Elang Perkasa",
    "Laba-laba Sunda",
    "Buaya Hitam",
    "Katak Sigma",
    "Skibidi Sigma",
    "Ikan Lohan Tidak Gyat",
    "Burung Puyuh Warna Bjir",
    "Monyet Hutan",
    "Gajah Ngawi",
    "Kursi Mewing",
    "Balon Ku Sigma",
    "Di Hina Tetap Sigma",
    "Kue Keju",
    "Mobil Bekas Toyota Gyat",
    "Rehan Toyota",
    "Ikbal Hotwil",
    "Kuda Pake Sendal",
    "Sendal ",
    "Jaket Bapak",
    "Kambing Hitam",
    "Pintu Gerbang",
    "Kayu Jati ",
    "Jati Diri",
    "Ayam Tidak Punya KTP",
    "Dino Sok Inggris",
    "Bibir Jontor Badag",
    "Teh Sari Wangi",
    "Indomi Kecap Asin",
    "Burung Elang Dari Jawa",
    "Tidak Ada/Kosong !",
    "Nokia Bapak",
    "Telur Gulung",
    "Sayur Asem Kecap Manis",
    "Baju Terbang",
    "Sendal Jepit",
    "Nasi Padang",
    "Pizza Mewah",
    "Jus Alpukat",
    "Sate Ayam",
    "Gado-Gado",
    "Kambing Guling",
    "Tahu Bulat",
    "Lontong Balap",
    "Soto Ayam",
    "Bakso Gepeng",
    "Cilok Kenyal",
    "Mie Ayam Lezat",
    "Es Cendol Manis",
    "Kopi Hitam Mantap",
    "Brownies Lumer",
    "Kerak Telor",
    "Tempe Mendoan",
    "Jajanan Pasar",
    "Pecel Lele",
    "Ayam Geprek",
    "Roti Bakar",
    "Pisang Goreng",
    "Bubur Ayam",
    "Nasi Goreng Spesial",
    "Sop Buntut",
    "Gule Kambing",
    "Rawon Hitam",
    "Ikan Bakar",
    "Sate Kambing",
    "Kue Cubit",
    "Cakwe",
    "Tahu Gejrot",
    "Kacang Polong",
    "Sayur Bayam",
    "Sambal Terasi",
    "Es Dawet",
    "Teh Tarik",
    "Es Teler",
    "Kerupuk Kulit",
    "Rengginang",
    "Emping Melinjo",
    "Mie Goreng",
    "Risoles",
    "Lumpia Semarang",
    "Pempek Palembang",
    "Asinan Betawi",
    "Lemper Ayam",
    "Bika Ambon",
    "Klepon",
    "Kue Lumpur",
    "Putu Ayu",
    "Onde-Onde",
    "Pukis",
    "Serabi",
    "Martabak Telur",
    "Sempol Ayam",
    "Bubur Ketan Hitam",
    "Kai Cenat",
    "Ibu Kai Cenat",
    "Bapak Kai Cenat",
    "Adek Kai Cenat",
    "Kakak Kai Cenat",
    "Nenek Kai Cenat",
    "Kakek Kai Cenat",
    "Bibi Kai Cenat",
    "Paman Kai Cenat",
    "Istri Kai Cenat",
    "Keponakan Kai Cenat",
    "Bapak Nya Istri Kai Cenat",
    "Istri nya Bapak nya Istri Kai Cenat",
    "Es Dawet Ketan Hitam Pekat Oli Bekas",
    "Kai Cenat Mode Sigma",
    "Bocil Mewing",
    "[Rare,Misterius,Cool,Sigma,Mewing,Made in ohio] Akbar Motor Mio Gas Elpiji Wibu Sejati Kasur Bekas Motor Supra Blukutuk-Blukutuk",
    "Kapten Bajak Laut Ngawi",
    "Mio Mirza",
    "Kak Gem Mode Mewing",
    "Kak Gem",
    "Uni Bakwan",
    "Sambal Goreng Kecap Hitam",
    "Kamu Bukan User Khodam !",
    "Kosong",
    "Ambatron Type 555 - y 9 UZ",
    "Ambatukam Mewing",
    "Mas Rusdi Tidak G4Y",
    "Suki Liar",
    "Suki Type G4",
    "The World",
    "Star Platinum",
    "Pak Slapur"
]

let spasi = [
    ' ',
    ' asli '
]

app.get('/', async (req, res) => {
    res.render('index')
})

app.post('/search-kodam', async (req, res) => {
    const name = req.body.name;
    const hewanUrl = 'https://raw.githubusercontent.com/ItsBayyyy/database/main/bahan-kodam/hewan.json';
    const kabupatenUrl = 'https://raw.githubusercontent.com/ItsBayyyy/database/main/bahan-kodam/kabupaten.json';
    const hewanData = await axios.get(hewanUrl);
    const kabupatenData = await axios.get(kabupatenUrl);
    const hewan = hewanData.data.hewan
    const kabupaten = kabupatenData.data.kabupaten
    const randomHewan = hewan[Math.floor(Math.random() * hewan.length)];
    const randomKabupaten = kabupaten[Math.floor(Math.random() * kabupaten.length)];
    const hasil = data[Math.floor(Math.random() * data.length)];
    const asli = spasi[Math.floor(Math.random() * spasi.length)]
    const hasil2 = await `${randomHewan}${asli}${randomKabupaten}.`;
    let hasil3 = [
        hasil,
        hasil2
    ]
    const hasil4 = hasil3[Math.floor(Math.random() * hasil3.length)]
    res.redirect(`/hasil?name=${name}&hasil=${hasil4}`);
});

app.get('/hasil', (req, res) => {
    const { name, hasil } = req.query;
    res.render('hasil', { name, hasil });
});

app.listen('8080', (req, res) => {
    console.log('Ready!')
})