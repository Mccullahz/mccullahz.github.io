import React from 'react';
import './styles/App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
return (
<div className="App">
		<Navbar />
		<Header />
		<Home />
		<Footer />
</div>
  )}

export default App;
