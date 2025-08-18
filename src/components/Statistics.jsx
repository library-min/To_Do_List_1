import { useState, useEffect, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import './Statistics.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Statistics({ todos, archivedTodos }) {
  const [timeRange, setTimeRange] = useState('week'); // 'day', 'week', 'month'
  const [selectedMetric, setSelectedMetric] = useState('completion'); // 'completion', 'priority', 'category'

  const allTodos = [...todos, ...archivedTodos];

  const getDateRange = () => {
    const now = new Date();
    const ranges = {
      day: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
      week: new Date(now.getTime() - 4 * 7 * 24 * 60 * 60 * 1000),
      month: new Date(now.getTime() - 12 * 30 * 24 * 60 * 60 * 1000)
    };
    return ranges[timeRange];
  };

  const filteredTodos = useMemo(() => {
    const startDate = getDateRange();
    return allTodos.filter(todo => {
      const todoDate = new Date(todo.createdAt || Date.now());
      return todoDate >= startDate;
    });
  }, [allTodos, timeRange]);

  const completionStats = useMemo(() => {
    const getLabels = () => {
      const now = new Date();
      const labels = [];
      
      if (timeRange === 'day') {
        for (let i = 6; i >= 0; i--) {
          const date = new Date(now);
          date.setDate(date.getDate() - i);
          labels.push(date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' }));
        }
      } else if (timeRange === 'week') {
        for (let i = 3; i >= 0; i--) {
          const date = new Date(now);
          date.setDate(date.getDate() - i * 7);
          labels.push(`${date.getMonth() + 1}월 ${Math.ceil(date.getDate() / 7)}주차`);
        }
      } else {
        for (let i = 11; i >= 0; i--) {
          const date = new Date(now);
          date.setMonth(date.getMonth() - i);
          labels.push(date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'short' }));
        }
      }
      return labels;
    };

    const labels = getLabels();
    const completed = new Array(labels.length).fill(0);
    const total = new Array(labels.length).fill(0);

    filteredTodos.forEach(todo => {
      const todoDate = new Date(todo.createdAt || Date.now());
      let index;

      if (timeRange === 'day') {
        const daysDiff = Math.floor((new Date() - todoDate) / (1000 * 60 * 60 * 24));
        index = 6 - Math.min(daysDiff, 6);
      } else if (timeRange === 'week') {
        const weeksDiff = Math.floor((new Date() - todoDate) / (1000 * 60 * 60 * 24 * 7));
        index = 3 - Math.min(weeksDiff, 3);
      } else {
        const monthsDiff = (new Date().getFullYear() - todoDate.getFullYear()) * 12 + 
                          (new Date().getMonth() - todoDate.getMonth());
        index = 11 - Math.min(monthsDiff, 11);
      }

      if (index >= 0 && index < labels.length) {
        total[index]++;
        if (todo.completed) {
          completed[index]++;
        }
      }
    });

    return { labels, completed, total };
  }, [filteredTodos, timeRange]);

  const priorityStats = useMemo(() => {
    const priorities = { '높음': 0, '보통': 0, '낮음': 0 };
    const completedPriorities = { '높음': 0, '보통': 0, '낮음': 0 };

    filteredTodos.forEach(todo => {
      const priority = todo.priority || '보통';
      priorities[priority]++;
      if (todo.completed) {
        completedPriorities[priority]++;
      }
    });

    return { priorities, completedPriorities };
  }, [filteredTodos]);

  const completionChartData = {
    labels: completionStats.labels,
    datasets: [
      {
        label: '완료된 할 일',
        data: completionStats.completed,
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1,
      },
      {
        label: '전체 할 일',
        data: completionStats.total,
        backgroundColor: 'rgba(156, 163, 175, 0.8)',
        borderColor: 'rgba(156, 163, 175, 1)',
        borderWidth: 1,
      }
    ],
  };

  const priorityChartData = {
    labels: ['높음', '보통', '낮음'],
    datasets: [{
      label: '우선순위별 완료율',
      data: [
        priorityStats.priorities['높음'] > 0 ? 
          (priorityStats.completedPriorities['높음'] / priorityStats.priorities['높음'] * 100) : 0,
        priorityStats.priorities['보통'] > 0 ? 
          (priorityStats.completedPriorities['보통'] / priorityStats.priorities['보통'] * 100) : 0,
        priorityStats.priorities['낮음'] > 0 ? 
          (priorityStats.completedPriorities['낮음'] / priorityStats.priorities['낮음'] * 100) : 0,
      ],
      backgroundColor: [
        'rgba(239, 68, 68, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(34, 197, 94, 0.8)',
      ],
      borderColor: [
        'rgba(239, 68, 68, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(34, 197, 94, 1)',
      ],
      borderWidth: 1,
    }],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: selectedMetric === 'completion' ? '할 일 완료 통계' : '우선순위별 완료율',
      },
    },
    scales: selectedMetric === 'completion' ? {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    } : {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        }
      }
    },
  };

  const overallStats = useMemo(() => {
    const totalTodos = allTodos.length;
    const completedTodos = allTodos.filter(todo => todo.completed).length;
    const completionRate = totalTodos > 0 ? (completedTodos / totalTodos * 100) : 0;
    
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayTodos = allTodos.filter(todo => {
      const todoDate = new Date(todo.createdAt || Date.now());
      return todoDate >= todayStart;
    });
    const todayCompleted = todayTodos.filter(todo => todo.completed).length;

    const thisWeekStart = new Date();
    thisWeekStart.setDate(thisWeekStart.getDate() - thisWeekStart.getDay());
    thisWeekStart.setHours(0, 0, 0, 0);
    const weekTodos = allTodos.filter(todo => {
      const todoDate = new Date(todo.createdAt || Date.now());
      return todoDate >= thisWeekStart;
    });
    const weekCompleted = weekTodos.filter(todo => todo.completed).length;

    return {
      totalTodos,
      completedTodos,
      completionRate,
      todayTodos: todayTodos.length,
      todayCompleted,
      weekTodos: weekTodos.length,
      weekCompleted
    };
  }, [allTodos]);

  return (
    <div className="statistics-container">
      <div className="stats-header">
        <h2>📊 통계 및 분석</h2>
        <div className="stats-controls">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="time-range-select"
          >
            <option value="day">최근 7일</option>
            <option value="week">최근 4주</option>
            <option value="month">최근 12개월</option>
          </select>
          <select 
            value={selectedMetric} 
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="metric-select"
          >
            <option value="completion">완료 통계</option>
            <option value="priority">우선순위 분석</option>
          </select>
        </div>
      </div>

      <div className="stats-overview">
        <div className="stat-card">
          <div className="stat-number">{overallStats.totalTodos}</div>
          <div className="stat-label">전체 할 일</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{overallStats.completedTodos}</div>
          <div className="stat-label">완료된 할 일</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{overallStats.completionRate.toFixed(1)}%</div>
          <div className="stat-label">전체 완료율</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{overallStats.todayCompleted}/{overallStats.todayTodos}</div>
          <div className="stat-label">오늘 완료</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{overallStats.weekCompleted}/{overallStats.weekTodos}</div>
          <div className="stat-label">이번 주 완료</div>
        </div>
      </div>

      <div className="chart-container">
        {selectedMetric === 'completion' ? (
          <Bar data={completionChartData} options={chartOptions} />
        ) : (
          <Bar data={priorityChartData} options={chartOptions} />
        )}
      </div>

      <div className="additional-stats">
        <div className="priority-breakdown">
          <h3>우선순위별 현황</h3>
          <div className="priority-stats">
            <div className="priority-stat high">
              <span className="priority-label">🔴 높음</span>
              <span className="priority-count">
                {priorityStats.completedPriorities['높음']}/{priorityStats.priorities['높음']}
              </span>
            </div>
            <div className="priority-stat medium">
              <span className="priority-label">🟡 보통</span>
              <span className="priority-count">
                {priorityStats.completedPriorities['보통']}/{priorityStats.priorities['보통']}
              </span>
            </div>
            <div className="priority-stat low">
              <span className="priority-label">🟢 낮음</span>
              <span className="priority-count">
                {priorityStats.completedPriorities['낮음']}/{priorityStats.priorities['낮음']}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;