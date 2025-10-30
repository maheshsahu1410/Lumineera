import Layout from '../components/Layout/Layout';
import { FileText, Download, Calendar } from 'lucide-react';
import './Dashboard.css';
import './Reports.css';

const Reports = () => {
  const reports = [
    {
      id: 1,
      title: 'Monthly Business Performance',
      type: 'Performance Report',
      date: 'May 2025',
      streams: ['All Streams'],
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Marketing Campaign Analysis',
      type: 'Lumi-Engage Report',
      date: 'Week of May 1-7',
      streams: ['Lumi-Engage'],
      size: '1.8 MB'
    },
    {
      id: 3,
      title: 'Supply Chain Health Report',
      type: 'Lumi-Orchestrate Report',
      date: 'April 2025',
      streams: ['Lumi-Orchestrate'],
      size: '1.2 MB'
    },
    {
      id: 4,
      title: 'Security & Risk Assessment',
      type: 'Lumi-Shield Report',
      date: 'Q1 2025',
      streams: ['Lumi-Shield'],
      size: '3.1 MB'
    },
    {
      id: 5,
      title: 'Financial Intelligence Report',
      type: 'Lumi-Insight Report',
      date: 'April 2025',
      streams: ['Lumi-Insight'],
      size: '2.7 MB'
    }
  ];

  return (
    <Layout currentModule="reports">
      <div className="dashboard-page">
        <header className="page-header">
          <h1>Reports</h1>
          <p className="page-subtitle">Generate and download comprehensive business reports</p>
        </header>

        <section className="dashboard-section">
          <div className="reports-header">
            <h2>Available Reports</h2>
            <button className="generate-report-btn">
              <FileText size={18} />
              Generate New Report
            </button>
          </div>

          <div className="reports-grid">
            {reports.map(report => (
              <div key={report.id} className="report-card">
                <div className="report-icon">
                  <FileText size={32} />
                </div>

                <div className="report-content">
                  <h3>{report.title}</h3>
                  <span className="report-type">{report.type}</span>
                  
                  <div className="report-meta">
                    <div className="meta-item">
                      <Calendar size={14} />
                      <span>{report.date}</span>
                    </div>
                    <div className="meta-item">
                      <span className="report-size">{report.size}</span>
                    </div>
                  </div>

                  <div className="report-streams">
                    {report.streams.map((stream, idx) => (
                      <span key={idx} className="stream-tag">{stream}</span>
                    ))}
                  </div>
                </div>

                <div className="report-actions">
                  <button className="report-action-btn view">View</button>
                  <button className="report-action-btn download">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Reports;
