// index.js

// express 모듈 추가
const express = require('express');
// cors 모듈 추가
const cors = require('cors');
const app = express();
const pokemons = require('./data.js');
// console.log( pokemons );

// cors 설정: 다 허용 (옵션 설정 가능 받을수있는 홈페이지 지정 등)
app.use(cors())




// get 요청 응답
app.get('/', function(req, res) {
    res.send('홈페이지') 
});

// API 요청
app.get('/api/:id', function(req, res){
    // res.send('API를 응답하는 서비스')
    const id = req.params.id;

    // 요청한 변수(params.id)의 포켓몬 데이터 보내기
    if(id == 'all') {
        res.json(pokemons)
    } else {
        res.json(pokemons[0])
    }

    // 요청한 변수(params.id)의 포켓몬 데이터 보내기
    // send 랑 똑같이 요청하는 문법
    // res.json(pokemons);
    // res.json(pokemons[id]);
    // console.log(pokemons[id]);
    
});





  

// 서버 오픈
app.listen(3001, function(){
    console.log(`서버가 열림`);
});


