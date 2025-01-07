import './index.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			{/* 다른 라우트 추가 가능 */}
		</Routes>
	);
}

export default App;
