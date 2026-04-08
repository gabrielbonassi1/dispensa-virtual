import { useState } from 'react';
import { Home } from './components/Home';
import { AddItem } from './components/AddItem';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'add'>('home');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md h-[812px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col relative">
        {currentScreen === 'home' ? (
          <Home onNavigate={() => setCurrentScreen('add')} />
        ) : (
          <AddItem onNavigate={() => setCurrentScreen('home')} />
        )}
      </div>
    </div>
  );
}
