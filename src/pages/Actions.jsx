import Layout from '../components/Layout/Layout';
import { CheckCircle, Clock, AlertCircle, Circle } from 'lucide-react';
import './Dashboard.css';
import './Actions.css';

const Actions = () => {
  const tasks = [
    {
      id: 1,
      title: 'Reorder Vendor X stock',
      status: 'urgent',
      stream: 'Lumi-Orchestrate',
      dueDate: '1 day',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Increase Instagram ad spend',
      status: 'pending',
      stream: 'Lumi-Engage',
      dueDate: '2 days',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Investigate Vendor X compliance',
      status: 'in-progress',
      stream: 'Lumi-Shield',
      dueDate: 'Today',
      priority: 'high'
    },
    {
      id: 4,
      title: 'Budget reallocation review',
      status: 'completed',
      stream: 'Lumi-Insight',
      dueDate: 'Completed',
      priority: 'medium'
    },
    {
      id: 5,
      title: 'Scale backup server',
      status: 'pending',
      stream: 'Lumi-Resilience',
      dueDate: '3 days',
      priority: 'low'
    }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle size={20} />;
      case 'in-progress': return <Clock size={20} />;
      case 'urgent': return <AlertCircle size={20} />;
      default: return <Circle size={20} />;
    }
  };

  const getStatusClass = (status) => {
    switch(status) {
      case 'completed': return 'status-completed';
      case 'in-progress': return 'status-in-progress';
      case 'urgent': return 'status-urgent';
      default: return 'status-pending';
    }
  };

  const getPriorityBadge = (priority) => {
    const classes = {
      high: 'priority-high',
      medium: 'priority-medium',
      low: 'priority-low'
    };
    return classes[priority] || '';
  };

  return (
    <Layout currentModule="actions">
      <div className="dashboard-page">
        <header className="page-header">
          <h1>Actions & Tasks</h1>
          <p className="page-subtitle">Track and manage all recommended actions</p>
        </header>

        <section className="dashboard-section">
          <div className="tasks-header">
            <h2>All Tasks</h2>
            <div className="task-filters">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Urgent</button>
              <button className="filter-btn">In Progress</button>
              <button className="filter-btn">Completed</button>
            </div>
          </div>

          <div className="tasks-list">
            {tasks.map(task => (
              <div key={task.id} className={`task-item ${getStatusClass(task.status)}`}>
                <div className="task-status-icon">
                  {getStatusIcon(task.status)}
                </div>
                
                <div className="task-content">
                  <h3>{task.title}</h3>
                  <div className="task-meta">
                    <span className="task-stream">{task.stream}</span>
                    <span className="task-due">Due: {task.dueDate}</span>
                  </div>
                </div>

                <div className="task-actions">
                  <span className={`priority-badge ${getPriorityBadge(task.priority)}`}>
                    {task.priority}
                  </span>
                  {task.status !== 'completed' && (
                    <button className="task-action-btn">View Details</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Actions;
