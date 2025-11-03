import { CheckCircle, Clock, XCircle } from 'lucide-react';
import './ActionsQueue.css';

const ActionsQueue = ({ actions = [] }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} className="status-icon-completed" />;
      case 'pending':
        return <Clock size={16} className="status-icon-pending" />;
      case 'failed':
        return <XCircle size={16} className="status-icon-failed" />;
      default:
        return <Clock size={16} className="status-icon-pending" />;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return 'action-completed';
      case 'pending':
        return 'action-pending';
      case 'failed':
        return 'action-failed';
      default:
        return 'action-pending';
    }
  };

  return (
    <div className="actions-queue">
      <div className="queue-header">
        <h3>Actions Queue</h3>
        <div className="queue-stats">
          <span className="stat-item">
            <CheckCircle size={14} />
            {actions.filter(a => a.status === 'completed').length}
          </span>
          <span className="stat-item">
            <Clock size={14} />
            {actions.filter(a => a.status === 'pending').length}
          </span>
        </div>
      </div>
      
      <div className="actions-list">
        {actions.map((action, index) => (
          <div key={index} className={`action-item ${getStatusClass(action.status)}`}>
            <div className="action-status">
              {getStatusIcon(action.status)}
            </div>
            
            <div className="action-content">
              <div className="action-header">
                <h4 className="action-title">{action.title}</h4>
                <span className="action-time">{action.time}</span>
              </div>
              
              <p className="action-description">{action.description}</p>
              
              {action.result && (
                <div className="action-result">
                  <span className="result-label">Result:</span>
                  <span className="result-value">{action.result}</span>
                </div>
              )}
              
              {action.feedback && (
                <div className="action-feedback">
                  {action.feedback.map((feedback, i) => (
                    <div key={i} className="feedback-item">
                      <span className="feedback-stream">{feedback.stream}:</span>
                      <span className="feedback-text">{feedback.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionsQueue;
