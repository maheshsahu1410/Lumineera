import './HarmonyHeader.css';

const HarmonyHeader = ({ userName = "User", harmonyIndex = 86, activeStreams = 5 }) => {
  const getHarmonyStatus = (index) => {
    if (index >= 80) return 'excellent';
    if (index >= 60) return 'good';
    if (index >= 40) return 'fair';
    return 'critical';
  };

  const status = getHarmonyStatus(harmonyIndex);

  return (
    <div className="harmony-header">
      <div className="harmony-welcome">
        <h1>Welcome back, {userName}</h1>
        <div className="harmony-stats">
          <div className={`harmony-index harmony-${status}`}>
            <span className="harmony-label">Harmony Index:</span>
            <span className="harmony-value">{harmonyIndex}%</span>
            <div className="harmony-pulse" />
          </div>
          <div className="streams-active">
            <span className="streams-count">{activeStreams}</span>
            <span className="streams-label">Lumi Streams active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarmonyHeader;
