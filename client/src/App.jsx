import Nav from './components/navbar/Nav.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Blogs from './components/blogs/Blogs.jsx';
import Resume from './components/resume/Resume.jsx';

function App() {
  return (
		
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/resume" element={<Resume />} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
