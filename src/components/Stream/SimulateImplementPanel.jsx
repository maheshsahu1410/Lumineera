import { useState } from 'react';
import { Play, Check, X, Loader2 } from 'lucide-react';
import './SimulateImplementPanel.css';

const SimulateImplementPanel = ({ proposal, onClose }) => {
  const [mode, setMode] = useState('simulate'); // 'simulate' or 'implement'
  const [status, setStatus] = useState('idle'); // 'idle', 'running', 'completed'

  const handleSimulate = () => {
    setMode('simulate');
    setStatus('running');
    setTimeout(() => setStatus('completed'), 2000);
  };

  const handleImplement = () => {
    setMode('implement');
    setStatus('running');
    setTimeout(() => setStatus('completed'), 3000);
  };

  return (
    <div className="simulate-implement-panel">
      <div className="panel-header">
        <h3>{proposal.title}</h3>
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <div className="panel-content">
        <div className="panel-tabs">
          <button
            className={`tab ${mode === 'simulate' ? 'active' : ''}`}
            onClick={() => setMode('simulate')}
          >
            <Play size={16} />
            Simulate
          </button>
          <button
            className={`tab ${mode === 'implement' ? 'active' : ''}`}
            onClick={() => setMode('implement')}
          >
            <Check size={16} />
            Implement
          </button>
        </div>

        {mode === 'simulate' && (
          <div className="simulate-section">
            <h4>Prediction Model</h4>
            {proposal.simulation && (
              <div className="prediction-details">
                {Object.entries(proposal.simulation).map(([key, value]) => (
                  <div key={key} className="prediction-row">
                    <span className="prediction-label">{key}:</span>
                    <span className="prediction-value">{value}</span>
                  </div>
                ))}
              </div>
            )}
            {status === 'idle' && (
              <button className="action-btn primary" onClick={handleSimulate}>
                <Play size={16} />
                Run Simulation
              </button>
            )}
            {status === 'running' && (
              <div className="status-indicator">
                <Loader2 size={20} className="spinner" />
                <span>Running simulation...</span>
              </div>
            )}
            {status === 'completed' && (
              <div className="status-indicator success">
                <Check size={20} />
                <span>Simulation completed</span>
              </div>
            )}
          </div>
        )}

        {mode === 'implement' && (
          <div className="implement-section">
            <h4>Actual Execution</h4>
            {proposal.execution && (
              <div className="execution-details">
                {Object.entries(proposal.execution).map(([key, value]) => (
                  <div key={key} className="execution-row">
                    <span className="execution-label">{key}:</span>
                    <span className="execution-value">{value}</span>
                  </div>
                ))}
              </div>
            )}
            {status === 'idle' && (
              <button className="action-btn success" onClick={handleImplement}>
                <Check size={16} />
                Execute Action
              </button>
            )}
            {status === 'running' && (
              <div className="status-indicator">
                <Loader2 size={20} className="spinner" />
                <span>Executing action...</span>
              </div>
            )}
            {status === 'completed' && (
              <div className="status-indicator success">
                <Check size={20} />
                <span>Action executed successfully</span>
              </div>
            )}
          </div>
        )}

        {proposal.feedback && status === 'completed' && mode === 'implement' && (
          <div className="feedback-section">
            <h4>Cross-Stream Feedback</h4>
            <div className="feedback-list">
              {proposal.feedback.map((fb, index) => (
                <div key={index} className="feedback-item">
                  <span className="feedback-stream">{fb.stream}</span>
                  <span className="feedback-text">{fb.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimulateImplementPanel;