import React from 'react';
import { Activity } from '@/types';

function getHeatmapData(weeks = 14) {
  // 오늘 기준 최근 weeks주(weeks*7일) 데이터 생성
  const today = new Date();
  const days = weeks * 7;
  const data: { date: string; count: number }[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    // 항상 랜덤하게 0~4회로 채움
    const count = Math.random() < 0.2 ? Math.floor(Math.random() * 5) : 0;
    data.push({ date: dateStr, count });
  }
  return data;
}

// 진한 보라색 계열(hex)
const colorScale = [
  '#ede9fe', // 0회 (아주 연한 보라)
  '#c4b5fd', // 1회
  '#a78bfa', // 2회
  '#7c3aed', // 3회
  '#5b21b6', // 4회 이상
];

export default function ActivityHeatmap() {
  const weeks = 7;
  const data = getHeatmapData(weeks);
  // 7x14 배열로 변환 (요일: 0=일~6=토)
  const grid: { date: string; count: number }[][] = Array.from({ length: 7 }, (_, day) =>
    Array.from({ length: weeks }, (_, w) => data[w * 7 + day])
  );
  const dayLabels = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className="flex flex-col items-start">
      <div className="flex gap-0.5 mb-1 ml-7">
        {Array.from({ length: weeks }).map((_, w) => (
          <span key={w} className="text-xs text-gray-400 block w-4 text-center">{w + 1}</span>
        ))}
      </div>
      <div className="flex">
        <div className="flex flex-col gap-0.5 mr-1">
          {dayLabels.map((d, i) => (
            <span key={i} className="text-xs text-gray-400 w-6 text-right">{d}</span>
          ))}
        </div>
        <div className="flex gap-0.5">
          {grid[0].map((_, w) => (
            <div key={w} className="flex flex-col gap-0.5">
              {grid.map((row, d) => {
                const cell = row[w];
                const color = colorScale[Math.min(cell.count, colorScale.length - 1)];
                return (
                  <div
                    key={d}
                    className={`w-4 h-4 rounded border border-gray-400 relative group flex items-center justify-center`}
                    style={{ backgroundColor: color }}
                  >
                    {/* 숫자 항상 표시 */}
                    <span className="text-[10px] text-gray-800 font-bold select-none">
                      {cell.count}
                    </span>
                    {cell.count > 0 && (
                      <span className="absolute left-1/2 -translate-x-1/2 -top-7 z-10 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded shadow">
                        {cell.date} <br /> {cell.count}회 운동
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-2 ml-7">
        <span className="text-xs text-gray-400">적음</span>
        {colorScale.map((c, i) => (
          <div key={i} className="w-4 h-4 rounded border border-gray-400" style={{ backgroundColor: c }} />
        ))}
        <span className="text-xs text-gray-400">많음</span>
      </div>
    </div>
  );
} 