const mongoose = require('mongoose');

// MongoDB 연결 문자열 (실제 환경에 맞게 수정해야 합니다.)
// 예시: 환경 변수를 사용하는 것이 가장 안전합니다.
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/smartRiderDB'; 

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('✅ MongoDB 연결 성공.');
    } catch (err) {
        console.error('❌ MongoDB 연결 실패:', err.message);
        // 연결 실패 시 프로세스 종료
        process.exit(1); 
    }
};

module.exports = connectDB;