import { useState, useEffect } from 'react';
import './GameStats.css';

function GameStats({ points, level, onPointsChange, badges }) {
  const [showLevelUp, setShowLevelUp] = useState(false);
  
  const pointsToNextLevel = (level + 1) * 100;
  const progressPercent = (points % 100) / 100 * 100;

  useEffect(() => {
    const currentLevel = Math.floor(points / 100) + 1;
    if (currentLevel > level) {
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 3000);
    }
  }, [points, level]);

  const getLevelTitle = (level) => {
    if (level <= 5) return '초보자';
    if (level <= 10) return '견습생';
    if (level <= 20) return '숙련자';
    if (level <= 30) return '전문가';
    return '마스터';
  };

  return (
    <div className="game-stats">
      <div className="level-section">
        <div className="level-info">
          <span className="level-number">Lv. {level}</span>
          <span className="level-title">{getLevelTitle(level)}</span>
        </div>
        <div className="xp-bar">
          <div className="xp-progress" style={{ width: `${progressPercent}%` }}></div>
          <span className="xp-text">{points % 100} / 100 XP</span>
        </div>
      </div>
      
      <div className="points-section">
        <span className="points-label">총 포인트</span>
        <span className="points-value">{points}</span>
      </div>

      <div className="badges-section">
        <span className="badges-label">획득 뱃지: {badges.length}</span>
        <div className="badges-list">
          {badges.slice(-3).map((badge, index) => (
            <span key={index} className="badge-item" title={badge.description}>
              {badge.icon}
            </span>
          ))}
        </div>
      </div>

      {showLevelUp && (
        <div className="level-up-notification bounce-enter">
          🎉 레벨 업! Lv. {level} 달성!
        </div>
      )}
    </div>
  );
}

export default GameStats;