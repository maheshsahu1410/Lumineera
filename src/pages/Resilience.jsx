import Layout from '../components/Layout/Layout';
import MetricCard from '../components/Dashboard/MetricCard';
import { Activity, Server, HardDrive, Zap } from 'lucide-react';
import './Dashboard.css';

const Resilience = () => {
  return (
    <Layout currentModule="resilience">
      <div className="dashboard-page">
        <header className="page-header">
          <h1>Lumi-Resilience</h1>
          <p className="page-subtitle">System resilience & business continuity</p>
        </header>

        <section className="dashboard-section">
          <h2>Current Metrics</h2>
          <div className="metrics-grid">
            <MetricCard
              label="System Uptime"
              value="99.7%"
              tooltip="Past 24 hours"
              trend={0.2}
              icon={Server}
            />
            <MetricCard
              label="Error Rates"
              value="0.5%"
              tooltip="Failed transactions or system errors"
              trend={-10}
              icon={Activity}
            />
            <MetricCard
              label="Backup Health"
              value="100%"
              tooltip="Last backup successful"
              trend={0}
              icon={HardDrive}
            />
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Trends & Alerts</h2>
          <div className="trends-container">
            <div className="trend-card">
              <div className="trend-header">
                <span className="trend-badge warning">Maintenance</span>
                <span className="trend-impact">2hrs Downtime</span>
              </div>
              <h3>Scheduled maintenance</h3>
              <p className="trend-description">Potential downtime 2hrs</p>
              <button className="trend-action">View Schedule</button>
            </div>

            <div className="trend-card">
              <div className="trend-header">
                <span className="trend-badge">Performance</span>
                <span className="trend-impact">CPU Load 70%</span>
              </div>
              <h3>Backend Server 1</h3>
              <p className="trend-description">CPU load ↑ 70%, Backup ok</p>
              <button className="trend-action">Monitor</button>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Simulation & Testing</h2>
          <div className="actions-list">
            <div className="action-item severity-warning">
              <div className="action-content">
                <h3>Test server overload scenario</h3>
                <p>Simulate high-traffic conditions</p>
                <div className="action-simulation">
                  <strong>Test:</strong> Multi-stream effect on system performance
                </div>
              </div>
              <div className="action-buttons">
                <button className="action-btn simulate">Run Test</button>
                <button className="action-btn ask">Ask Lumineera</button>
              </div>
            </div>

            <div className="action-item severity-success">
              <div className="action-content">
                <h3>Scale backup server</h3>
                <p>Reduces potential downtime from 2hrs → 0.3hrs</p>
                <div className="action-simulation">
                  <strong>Impact:</strong> System resilience ↑ 15%
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
          <h2>Actions & Review</h2>
          <div className="history-timeline">
            <div className="timeline-item">
              <div className="timeline-date">9 May 2025</div>
              <div className="timeline-content">
                <h4>Backup server scaled</h4>
                <p>Downtime reduced from 2hrs to 0.3hrs</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">6 May 2025</div>
              <div className="timeline-content">
                <h4>System overload test</h4>
                <p>Performance within acceptable limits</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resilience;
