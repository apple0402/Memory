const express = require('express');
const router = express.Router();

// 모델 불러오기
const Ride = require('../models/rideModel'); 

// Ride 관련 라우트 정의 (향후 구현 예정)
router.get('/', (req, res) => {
    res.send('Ride Routes initialized.');
});

// 예시: 특정 라이딩 데이터 조회
router.get('/rides', async (req, res) => {
    try {
        const rides = await Ride.find();
        res.json(rides);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch rides', error: err.message });
    }
});

module.exports = router;


// Ride 관련 라우트 정의 (향후 구현 예정)
router.get('/', (req, res) => {
    res.send('Ride Routes initialized.');
});

// 예시: 특정 라이딩 데이터 조회
router.get('/rides', (req, res) => {
    res.json({ message: 'Listing all rides' });
});

module.exports = router;