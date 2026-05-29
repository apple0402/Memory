const express = require('express');
const router = express.Router();

// Ride 관련 라우트 정의 (향후 구현 예정)
router.get('/', (req, res) => {
    res.send('Ride Routes initialized.');
});

// 예시: 특정 라이딩 데이터 조회
router.get('/rides', (req, res) => {
    res.json({ message: 'Listing all rides' });
});

module.exports = router;