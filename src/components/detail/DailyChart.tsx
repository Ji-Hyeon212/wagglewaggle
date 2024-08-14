import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Chart.js 모듈 및 플러그인 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

interface DailyChartProps {}

const DailyChart: React.FC<DailyChartProps> = () => {
  const data = {
    labels: ["8/7", "8/8", "8/9", "8/10", "8/11", "8/12", "8/13"],
    datasets: [
      {
        label: "일일 조회수",
        data: [60, 75, 70, 65, 80, 55, 50],
        borderColor: "rgba(246, 158, 77, 1)", // 선 색상
        backgroundColor: "rgba(246, 158, 77, 0.5)", // 데이터 포인트 색상
        fill: false, // 선 아래 채우기 비활성화
        borderWidth: 2, // 선 두께
        pointRadius: 5, // 데이터 포인트 크기
        tension: 0.3, // 선의 곡률 (0은 직선)
      },
      {
        label: "일일 연락 횟수",
        data: [3, 4, 5, 2, 5, 3, 1],
        borderColor: "#bad0d5", // 선 색상
        backgroundColor: "#bad0d5", // 데이터 포인트 색상
        fill: false, // 선 아래 채우기 비활성화
        borderWidth: 2, // 선 두께
        pointRadius: 5, // 데이터 포인트 크기
        tension: 0.3, // 선의 곡률 (0은 직선)
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 18, // 범례 폰트 크기
            weight: "bold",
          },
          padding: 30, // 범례와 그래프 사이의 간격
        },
      },
      title: {
        display: true,
        text: "일별 조회수 및 컨택 횟수",
        font: {
          size: 36, // 타이틀의 폰트 크기
          weight: "bold",
        },
        padding: {
          top: 20,
          bottom: 40,
        },
      },
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: Math.round,
        font: {
          size: 16, // 데이터 레이블 폰트 크기
          weight: "bold",
        },
        color: "#444", // 데이터 레이블 색상
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 16, // X축 폰트 크기
          },
          color: "#555", // X축 폰트 색상
        },
        title: {
          display: true,
          text: "날짜",
          font: {
            size: 20,
            weight: "bold",
          },
        },
        grid: {
          display: false, // X축 그리드 라인 비활성화
        },
      },
      y: {
        beginAtZero: true,
        max: 80,
        ticks: {
          font: {
            size: 16, // Y축 폰트 크기
          },
          color: "#555", // Y축 폰트 색상
        },
        title: {
          display: true,
          text: "값",
          font: {
            size: 20,
            weight: "bold",
          },
        },
        grid: {
          color: "rgba(200, 200, 200, 0.3)", // Y축 그리드 라인 색상
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default DailyChart;
