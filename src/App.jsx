import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Resume from './components/Resume'
import Email from './components/Email'
import {Routes, Route} from 'react-router-dom'



 function App() {
  return (
        <div>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/email" element={<Email />} />
            </Routes>
        </div>
      

  )
}
export default App