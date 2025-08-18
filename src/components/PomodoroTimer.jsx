import { useState, useEffect, useRef } from 'react';
import './PomodoroTimer.css';

function PomodoroTimer({ taskName, onComplete, onClose }) {
  const [focusTime, setFocusTime] = useState(25); // 기본 25분
  const [shortBreakTime, setShortBreakTime] = useState(5); // 기본 5분
  const [longBreakTime, setLongBreakTime] = useState(15); // 기본 15분
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25분
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [cycle, setCycle] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleTimerComplete = () => {
    setIsRunning(false);
    
    if (!isBreak) {
      // 작업 완료, 휴식 시작
      setIsBreak(true);
      setTimeLeft(cycle % 4 === 0 ? longBreakTime * 60 : shortBreakTime * 60);
      showNotification('작업 완료! 휴식 시간입니다.');
    } else {
      // 휴식 완료, 다음 사이클
      setIsBreak(false);
      setTimeLeft(focusTime * 60);
      setCycle(prev => prev + 1);
      showNotification('휴식 완료! 다음 작업을 시작하세요.');
      
      if (cycle >= 4) {
        onComplete();
      }
    }
  };

  const showNotification = (message) => {
    if (Notification.permission === 'granted') {
      new Notification('Pomodoro Timer', { body: message });
    }
  };

  const requestNotificationPermission = () => {
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }
  };

  const toggleTimer = () => {
    if (!isRunning) {
      requestNotificationPermission();
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(isBreak ? (cycle % 4 === 0 ? longBreakTime * 60 : shortBreakTime * 60) : focusTime * 60);
  };

  const updateFocusTime = (newTime) => {
    setFocusTime(newTime);
    if (!isBreak && !isRunning) {
      setTimeLeft(newTime * 60);
    }
  };

  const updateBreakTimes = (shortBreak, longBreak) => {
    setShortBreakTime(shortBreak);
    setLongBreakTime(longBreak);
    if (isBreak && !isRunning) {
      setTimeLeft(cycle % 4 === 0 ? longBreak * 60 : shortBreak * 60);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const totalTime = isBreak 
    ? (cycle % 4 === 0 ? longBreakTime * 60 : shortBreakTime * 60)
    : focusTime * 60;
  const progressPercent = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className="pomodoro-overlay">
      <div className="pomodoro-modal">
        <div className="pomodoro-header">
          <h3>{isBreak ? '휴식 시간' : '집중 시간'}</h3>
          <div className="header-buttons">
            <button 
              onClick={() => setShowSettings(!showSettings)} 
              className="settings-button"
              title="설정"
            >
              ⚙️
            </button>
            <button onClick={onClose} className="close-button">×</button>
          </div>
        </div>

        {showSettings && (
          <div className="pomodoro-settings">
            <h4>시간 설정</h4>
            <div className="settings-grid">
              <div className="setting-item">
                <label>집중 시간 (분)</label>
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={focusTime}
                  onChange={(e) => updateFocusTime(parseInt(e.target.value))}
                  className="time-input"
                />
              </div>
              <div className="setting-item">
                <label>짧은 휴식 (분)</label>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={shortBreakTime}
                  onChange={(e) => updateBreakTimes(parseInt(e.target.value), longBreakTime)}
                  className="time-input"
                />
              </div>
              <div className="setting-item">
                <label>긴 휴식 (분)</label>
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={longBreakTime}
                  onChange={(e) => updateBreakTimes(shortBreakTime, parseInt(e.target.value))}
                  className="time-input"
                />
              </div>
            </div>
          </div>
        )}
        
        <div className="task-info">
          <span className="task-label">현재 작업:</span>
          <span className="task-name">{taskName}</span>
        </div>

        <div className="timer-display">
          <div className="timer-circle">
            <svg width="200" height="200" className="progress-ring">
              <circle
                cx="100"
                cy="100"
                r="90"
                stroke="var(--border-color)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                stroke={isBreak ? "var(--color-accent)" : "var(--color-primary)"}
                strokeWidth="8"
                fill="none"
                strokeDasharray={565.48}
                strokeDashoffset={565.48 * (1 - progressPercent / 100)}
                className="progress-circle"
              />
            </svg>
            <div className="timer-text">
              <div className="time">{formatTime(timeLeft)}</div>
              <div className="cycle">사이클 {cycle}/4</div>
            </div>
          </div>
        </div>

        <div className="timer-controls">
          <button onClick={toggleTimer} className={`control-button ${isRunning ? 'pause' : 'play'}`}>
            {isRunning ? '⏸️ 일시정지' : '▶️ 시작'}
          </button>
          <button onClick={resetTimer} className="control-button reset">
            🔄 초기화
          </button>
        </div>

        <div className="pomodoro-info">
          <p>🍅 뽀모도로 기법: 25분 집중 + 5분 휴식</p>
          <p>4사이클 완료 후 15분 긴 휴식</p>
        </div>
      </div>
    </div>
  );
}

export default PomodoroTimer;