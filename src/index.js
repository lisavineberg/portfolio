import ReactDOM from 'react-dom/client';
import './styles/base.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import Career from './routes/career';
import Education from './routes/education';
import Projects from './routes/projects';
import Volunteer from './routes/volunteer';
import TechStack from './routes/tech-stack';
import Blog from './routes/blog';
import BlogPost from './routes/blog/[post]';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/career" element={<Career />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/tech-stack" element={<TechStack />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
