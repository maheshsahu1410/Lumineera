import Layout from '../components/Layout/Layout';
import BusinessPulse from '../components/Home/BusinessPulse';
import RippleMap from '../components/Home/RippleMap';
import InsightFeed from '../components/Home/InsightFeed';
import './Home.css';

const Home = () => {
  return (
    <Layout currentModule="home">
      <div className="home-page">
        <header className="page-header">
          <h1>Command Center</h1>
          <p className="page-subtitle">Your complete business overview at a glance</p>
        </header>

        <BusinessPulse />
        <RippleMap />
        <InsightFeed />
      </div>
    </Layout>
  );
};

export default Home;
