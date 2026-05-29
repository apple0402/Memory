const express = require('express');
const router = express.Router();

// Safety 관련 라우트 정의 (향후 구현 예정)
router.get('/', (req, res) => {
    res.send('Safety Routes initialized.');
});

// 예시: 안전 관련 데이터 조회
router.get('/safety', (req, res) => {
    res.json({ message: 'Listing all safety data' });
});

module.exports = router;