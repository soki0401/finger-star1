
import React, { useState } from 'react';
import { View } from './types';
import Layout from './components/Layout';
import Home from './components/Home';
import Story from './components/Story';
import Characters from './components/Characters';
import Quiz from './components/Quiz';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        return <Home onNavigate={handleNavigate} />;
      case View.STORY:
        return <Story />;
      case View.CHARACTERS:
        return <Characters />;
      case View.QUIZ:
        return <Quiz />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={handleNavigate}>
      {renderContent()}
    </Layout>
  );
};

export default App;
