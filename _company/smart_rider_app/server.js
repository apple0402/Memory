// ======================================================
// Smart Rider App Backend - Server Entry Point (Node.js/Express)
// ======================================================

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // CORS 설정 (프론트엔드 연동을 위함)

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware 설정
app.use(bodyParser.json()); // JSON 본문 파싱
app.use(cors()); // 모든 출처 허용 (개발 단계에서 필요)

// --- 데이터베이스 연결 자리 (실제 구현 시 여기에 DB 연결 코드가 들어갑니다.) ---
// const db = require('./db'); 
// ------------------------------------------------------------------------


// 기본 라우트 설정
app.get('/', (req, res) => {
    res.send('Smart Rider App Backend is running.');
});

// [TODO] 데이터베이스 관련 라우트 정의 (향후 구현 예정)
// app.use('/api/rides', require('./routes/rideRoutes'));
// app.use('/api/safety', require('./routes/safetyRoutes'));


// 서버 시작
app.listen(PORT, () => {
    console.log(`✅ Smart Rider Backend Server is running on port ${PORT}`);
    console.log('데이터베이스 연결 준비 완료.');
});

// ======================================================
// 프로젝트 구조 안내
// 폴더 구조:
// smart_rider_app/
// ├── node_modules/
// ├── package.json          <- 의존성 관리 파일 (npm install 필요)
// ├── server.js             <- 메인 서버 파일
// └── routes/               <- API 라우트 파일들 (향후 생성)
// ======================================================