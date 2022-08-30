const express = require('express')
const app = express()
const PORT = 8000

const artists = {
    'nanon': {
        'age': 22,
        'birthName': 'Korapat Kirdpan',
        'birthNameInThai': 'กรภัทร์ เกิดพันธุ์',
        'birthLocation': 'Bangkok, Thailand'
    },
    'the toys': {
        'age': 27,
        'birthName': 'Thanwa Boonsoongnern',
        'birthNameInThai': 'ธันวา บุญสูงเนิน',
        'birthLocation': 'Nakhon Ratchasima Province, Thailand'
    },
    'bank': {
        'age': 26,
        'birthName': 'Bank',
        'birthNameInThai': 'Bank',
        'birthLocation': 'Bangkok, Thailand'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:artistName', (request, response) => {
    const artistsName = request.params.artistName.toLowerCase()

    if(artists[artistsName]) {
        response.json(artists[artistsName])
    } else {
        response.json(artists['bank'])
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})