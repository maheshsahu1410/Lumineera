import Layout from '../components/Layout/Layout';
import { Settings, Users, Bell, Lock, Database, Zap } from 'lucide-react';
import './Dashboard.css';
import './Admin.css';

const Admin = () => {
  return (
    <Layout currentModule="admin">
      <div className="dashboard-page">
        <header className="page-header">
          <h1>Admin Settings</h1>
          <p className="page-subtitle">Manage system configuration and preferences</p>
        </header>

        <section className="dashboard-section">
          <h2>System Configuration</h2>
          <div className="admin-grid">
            <div className="admin-card">
              <div className="admin-card-header">
                <div className="admin-icon">
                  <Users size={24} />
                </div>
                <h3>User Management</h3>
              </div>
              <p>Manage user accounts, roles, and permissions</p>
              <button className="admin-action-btn">Configure</button>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <div className="admin-icon">
                  <Bell size={24} />
                </div>
                <h3>Notifications</h3>
              </div>
              <p>Configure alert thresholds and notification preferences</p>
              <button className="admin-action-btn">Configure</button>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <div className="admin-icon">
                  <Lock size={24} />
                </div>
                <h3>Security</h3>
              </div>
              <p>Manage security settings, authentication, and access control</p>
              <button className="admin-action-btn">Configure</button>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <div className="admin-icon">
                  <Database size={24} />
                </div>
                <h3>Data Management</h3>
              </div>
              <p>Configure data retention, backups, and export settings</p>
              <button className="admin-action-btn">Configure</button>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <div className="admin-icon">
                  <Zap size={24} />
                </div>
                <h3>Integrations</h3>
              </div>
              <p>Connect external services and manage API integrations</p>
              <button className="admin-action-btn">Configure</button>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <div className="admin-icon">
                  <Settings size={24} />
                </div>
                <h3>System Settings</h3>
              </div>
              <p>General system preferences and display options</p>
              <button className="admin-action-btn">Configure</button>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Quick Settings</h2>
          <div className="settings-list">
            <div className="setting-item">
              <div className="setting-info">
                <h4>Email Notifications</h4>
                <p>Receive email alerts for critical events</p>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Auto-refresh Dashboard</h4>
                <p>Automatically refresh data every 5 minutes</p>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Advanced Analytics</h4>
                <p>Enable detailed analytics and reporting features</p>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Admin;
