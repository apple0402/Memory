import React, { useState, useEffect } from 'react';
import axios from 'axios';

// API 기본 URL 설정 (서버가 실행 중인 주소)
const API_URL = 'http://localhost:3000/api'; 

function App() {
    const [rides, setRides] = useState([]);
    const [safetyReports, setSafetyReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // --- 라이딩 데이터 불러오기 ---
    const fetchRides = async () => {
        try {
            const response = await axios.get(`${API_URL}/rides`);
            setRides(response.data);
        } catch (err) {
            console.error("라이딩 데이터 불러오기 실패:", err);
            setError("라이딩 데이터를 불러오는 데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    };

    // --- 안전 데이터 불러오기 ---
    const fetchSafetyReports = async () => {
        try {
            const response = await axios.get(`${API_URL}/safety`);
            setSafetyReports(response.data);
        } catch (err) {
            console.error("안전 데이터 불러오기 실패:", err);
            setError("안전 데이터를 불러오는 데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    };

    // 컴포넌트가 마운트될 때 데이터 불러오기 실행
    useEffect(() => {
        fetchRides();
        fetchSafetyReports();
    }, []);


    if (loading) {
        return <div className="p-4 text-center">데이터를 로딩 중입니다...</div>;
    }

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-indigo-700 border-b pb-2">
                Smart Rider Dashboard
            </h1>

            {error && <p className="text-red-500 p-4 bg-red-100 border border-red-400 rounded">{error}</p>}

            {/* 라이딩 목록 섹션 */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-green-700">🚴 라이딩 기록</h2>
                {rides.length === 0 ? (
                    <p>저장된 라이딩 기록이 없습니다.</p>
                ) : (
                    <div className="space-y-3">
                        {rides.map((ride, index) => (
                            <div key={index} className="bg-white p-4 shadow rounded-lg border border-green-200">
                                <h3 className="text-xl font-bold text-green-600">{ride.riderName}</h3>
                                <p><strong>거리:</strong> {ride.distanceKm} km</p>
                                <p><strong>시간:</strong> {ride.durationMinutes} 분</p>
                                <p><strong>안전 보고 여부:</strong> {ride.safetyReported ? 'O' : 'X'}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* 안전 보고서 목록 섹션 */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-red-700">🚨 안전 보고서</h2>
                {safetyReports.length === 0 ? (
                    <p>저장된 안전 보고서가 없습니다.</p>
                ) : (
                    <div className="space-y-3">
                        {safetyReports.map((report, index) => (
                            <div key={index} className="bg-white p-4 shadow rounded-lg border border-red-200">
                                <h3 className="text-xl font-bold text-red-600">{report.incidentType}</h3>
                                <p><strong>내용:</strong> {report.description}</p>
                                <p><strong>위치:</strong> {report.location}</p>
                                <p><strong>안전 점수:</strong> {report.safetyScore}/10</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
}

export default App;