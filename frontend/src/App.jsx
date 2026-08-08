import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeHero from './components/HomeHero';
import ChooseYourFocus from './components/ChooseYourFocus';
import HowItWorks from './components/HowItWorks';
import FocusPlaceholder from './components/FocusPlaceholder';

function Landing() {
  return (
    <>
      <HomeHero />
      <ChooseYourFocus />
      <HowItWorks />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        {/* Placeholders for all 3 focus areas until full workspaces are attached */}
        <Route
          path="/workouts/strength"
          element={
            <FocusPlaceholder
              title="Strength & Conditioning"
              description="Weight room programming and workout tracking."
            />
          }
        />
        <Route
          path="/workouts/sports"
          element={
            <FocusPlaceholder
              title="Sports Performance"
              description="Speed, agility, and on-field metric tracking is on the way."
            />
          }
        />
        <Route
          path="/workouts/team"
          element={
            <FocusPlaceholder
              title="Team Management"
              description="Roster management, program assignment, and coaching tools are on the way."
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}