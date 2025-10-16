// src/App.tsx
import type { JSX } from 'react';
import RCPSection from './RCP';

function App(): JSX.Element {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <RCPSection />
    </main>
  );
}

export default App;
