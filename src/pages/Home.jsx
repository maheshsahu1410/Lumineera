import Layout from '../components/Layout/Layout';
import HarmonyHeader from '../components/Home/HarmonyHeader';
import StreamCards from '../components/Home/StreamCards';
import HarmonyGraph from '../components/HarmonyGraph/HarmonyGraph';
import BusinessPulse from '../components/Home/BusinessPulse';
import RippleMap from '../components/Home/RippleMap';
import InsightFeed from '../components/Home/InsightFeed';
import './Home.css';

const Home = () => {
  return (
    <Layout currentModule="home">
      <div className="home-page">
        <HarmonyHeader userName="User" harmonyIndex={86} activeStreams={5} />
        
        <StreamCards />
        
        <HarmonyGraph />
        
        <BusinessPulse />
        <RippleMap />
        <InsightFeed />
      </div>
    </Layout>
  );
};

export default Home;
