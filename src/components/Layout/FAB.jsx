import { Plus } from 'lucide-react';
import './FAB.css';

const FAB = () => {
  const handleClick = () => {
    console.log('Opening New Scenario modal');
    // TODO: Open modal for creating new scenario
  };

  return (
    <button className="fab" onClick={handleClick} title="New Scenario">
      <Plus size={28} />
    </button>
  );
};

export default FAB;
