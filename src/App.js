import ImageHighlight from './ImageHighlight';
import './ImageHighlight.css';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ backgroundColor: 'yellow', fontWeight: 'bold', marginBottom: '30px' }}>
        Image with Highlight
      </h1>
      <ImageHighlight />
    </div>
  );
}

export default App;
