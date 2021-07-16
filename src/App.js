import './App.css';
import People from './components/People';

var imgLink = 'https://cdn.vox-cdn.com/thumbor/tim2N4POh-hS2QZ7Fk5W9z9UQnM=/0x0:1400x1050/1200x800/filters:focal(662x361:886x585)/cdn.vox-cdn.com/uploads/chorus_image/image/67194273/avatar_the_last_airbender_image.0.jpeg';

function App() {
  return (
    <div className="App">
      <People imgUrl={imgLink}>phong2198</People>
      <People>chicken</People>
      <People>dogwater</People>
    </div>
  );
}

export default App;
