import { useState } from 'react';
import { X, Send } from 'lucide-react';
import './RightActionRail.css';

const suggestedQuestions = [
  "Why is CAC increasing?",
  "Show me top performing campaigns",
  "What's affecting delivery rate?",
  "Explain current risk score",
  "Forecast next month's revenue"
];

const RightActionRail = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('ask');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <aside className="right-action-rail">
      <div className="rail-header">
        <div className="rail-tabs">
          <button
            className={`rail-tab ${activeTab === 'ask' ? 'active' : ''}`}
            onClick={() => setActiveTab('ask')}
          >
            Ask Lumineera
          </button>
          <button
            className={`rail-tab ${activeTab === 'fixes' ? 'active' : ''}`}
            onClick={() => setActiveTab('fixes')}
          >
            Quick Fixes
          </button>
          <button
            className={`rail-tab ${activeTab === 'saved' ? 'active' : ''}`}
            onClick={() => setActiveTab('saved')}
          >
            Saved Scenarios
          </button>
        </div>
        <button className="rail-close" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <div className="rail-content">
        {activeTab === 'ask' && (
          <div className="ask-content">
            <div className="suggested-questions">
              <p className="section-label">Suggested Questions</p>
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="suggested-question"
                  onClick={() => setMessage(question)}
                >
                  {question}
                </button>
              ))}
            </div>

            <div className="chat-input-container">
              <textarea
                className="chat-input"
                placeholder="Ask Lumineera anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                rows={3}
              />
              <button className="send-button" onClick={handleSend}>
                <Send size={20} />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'fixes' && (
          <div className="quick-fixes">
            <p className="section-label">Context-Sensitive Actions</p>
            <div className="fix-item">
              <span className="fix-title">Reorder Vendor X stock</span>
              <button className="fix-action">Apply</button>
            </div>
            <div className="fix-item">
              <span className="fix-title">Increase ad spend by 5%</span>
              <button className="fix-action">Simulate</button>
            </div>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="saved-scenarios">
            <p className="section-label">Your Saved Scenarios</p>
            <p className="empty-state">No saved scenarios yet</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default RightActionRail;
