// src/components/Result.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Result = ({ score, onReset }) => {
  useEffect(() => {
    onReset();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white w-96 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Kết quả</h2>
        <p className="text-lg text-gray-700 mb-6">Chúc mừng bạn đã hoàn thành bài kiểm tra</p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Làm lại
        </Link>
      </div>
    </div>
  );
};

export default Result;
