import { DeskOverView } from 'pages/DeskOverView/DeskOverView';
import { Error404View } from 'pages/Error404View/Error404View';
import { TicketsView } from 'pages/TicketsView/TicketsView';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<DeskOverView />}>
          <Route path="/tickets" element={<TicketsView />} />
        </Route>
        <Route path="*" element={<Error404View />} />
      </Routes>
    </div>
  );
}

export default App;
