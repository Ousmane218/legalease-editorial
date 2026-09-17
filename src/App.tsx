import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Approche } from './pages/Approche';
import { Expertises } from './pages/Expertises';
import { ExpertiseDetail } from './pages/ExpertiseDetail';
import { Secteurs } from './pages/Secteurs';
import { Equipe } from './pages/Equipe';
import { PartnerDetail } from './pages/PartnerDetail';
import { Publications } from './pages/Publications';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/approche" element={<Approche />} />
        <Route path="/cabinet" element={<Navigate to="/approche" replace />} />
        <Route path="/expertises" element={<Expertises />} />
        <Route path="/expertises/:slug" element={<ExpertiseDetail />} />
        <Route path="/secteurs" element={<Secteurs />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/equipe/:slug" element={<PartnerDetail />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
