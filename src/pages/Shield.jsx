import Layout from '../components/Layout/Layout';
import MetricCard from '../components/Dashboard/MetricCard';
import { Shield, AlertTriangle, Lock, Activity } from 'lucide-react';
import './Dashboard.css';

const ShieldPage = () => {
  return (
    <Layout currentModule="shield">
      <div className="dashboard-page">
        <header className="page-header">
          <h1>Lumi-Shield</h1>
          <p className="page-subtitle">Risk management & fraud detection</p>
        </header>

        <section className="dashboard-section">
          <h2>Current Metrics</h2>
          <div className="metrics-grid">
            <MetricCard
              label="Risk Score"
              value="42"
              tooltip="Current combined risk exposure"
              trend={15}
              icon={AlertTriangle}
            />
            <MetricCard
              label="Fraud Attempts"
              value="3"
              tooltip="Detected in last 24 hours"
              trend={-20}
              icon={Shield}
            />
            <MetricCard
              label="Suspicious Activity"
              value="5"
              tooltip="Suspicious login attempts & vendor anomalies"
              trend={10}
              icon={Activity}
            />
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Trends & Alerts</h2>
          <div className="trends-container">
            <div className="trend-card">
              <div className="trend-header">
                <span className="trend-badge warning">Vendor Alert</span>
                <span className="trend-impact negative">+18% Risk</span>
              </div>
              <h3>Vendor X failed compliance check</h3>
              <p className="trend-description">Pause future orders → reduce risk score by 18%</p>
              <button className="trend-action">Simulate Impact</button>
            </div>

            <div className="trend-card">
              <div className="trend-header">
                <span className="trend-badge warning">External Threat</span>
                <span className="trend-impact">Medium Priority</span>
              </div>
              <h3>Phishing email detected</h3>
              <p className="trend-description">Affected department: Finance → Recommended block</p>
              <button className="trend-action">Take Action</button>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Actions & Recommendations</h2>
          <div className="actions-list">
            <div className="action-item severity-critical">
              <div className="action-content">
                <h3>Investigate Vendor X</h3>
                <p>Risk score +18%, severity: High</p>
                <div className="action-simulation">
                  <strong>Recommendation:</strong> Pause future orders and conduct compliance audit
                </div>
              </div>
              <div className="action-buttons">
                <button className="action-btn simulate">Simulate</button>
                <button className="action-btn implement">Implement</button>
                <button className="action-btn ask">Ask Lumineera</button>
              </div>
            </div>

            <div className="action-item severity-warning">
              <div className="action-content">
                <h3>Add approval workflow</h3>
                <p>Mitigation option for suspicious transactions</p>
                <div className="action-simulation">
                  <strong>Simulation:</strong> Risk node impact reduction by 12%
                </div>
              </div>
              <div className="action-buttons">
                <button className="action-btn simulate">Simulate</button>
                <button className="action-btn implement">Implement</button>
                <button className="action-btn ask">Ask Lumineera</button>
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Review & Logs</h2>
          <div className="history-timeline">
            <div className="timeline-item">
              <div className="timeline-date">7 May 2025</div>
              <div className="timeline-content">
                <h4>Vendor compliance check</h4>
                <p>Vendor X flagged for review</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">5 May 2025</div>
              <div className="timeline-content">
                <h4>Phishing attempt blocked</h4>
                <p>Security measures effective</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ShieldPage;
