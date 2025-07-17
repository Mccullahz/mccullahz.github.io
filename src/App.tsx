import React from 'react';
import './styles/App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArticleView from './components/ArticleView';
import Projects from './pages/Projects';
import Templates from './pages/Templates';

function App() {
return (
<div className="App">
	<Router>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/templates" element={<Templates />} />
			<Route path="/articles/:slug" element={<ArticleView />} />
		</Routes>
		<Footer />
	</Router>
</div>
  )}

export default App;
