// src/utils/chartUtils.ts
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    BarController,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    BarController
);

export const createCompetitorChart = (ctx: CanvasRenderingContext2D, chartInstanceRef: React.MutableRefObject<ChartJS | null>) => {
    if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Destroy previous instance if it exists
    }

    chartInstanceRef.current = new ChartJS(ctx, {
        type: 'bar',
        data: {
            labels: ['커뮤니티 활성화', '이색 스포츠 다양성', '초보자 접근성', '정보의 깊이'],
            datasets: [{
                type: 'bar',
                label: 'SPIN',
                data: [9, 8, 9, 8.5],
                backgroundColor: 'rgba(234, 88, 12, 0.8)', // Tailwind default orange-600 RGBA
                borderColor: 'rgba(234, 88, 12, 1)',
                borderWidth: 1
            }, {
                type: 'bar',
                label: '경쟁사 평균',
                data: [5, 7, 6, 5],
                backgroundColor: 'rgba(156, 163, 175, 0.6)', // Tailwind gray-500 similar
                borderColor: 'rgba(156, 163, 175, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 10,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        color: '#374151'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    bodyColor: '#fff',
                    titleColor: '#fff',
                    bodyFont: { size: 14 },
                    titleFont: { size: 16, weight: 'bold' },
                    padding: 10,
                    cornerRadius: 6
                }
            }
        }
    });
};