import mainBg from './assets/main_bg.jpeg';
import lastBg from './assets/last_bg.jpeg';
import FullPageScrollManager from './components/layout/FullPageScrollManager/FullPageScrollManager';
import FullPageContainer from './components/layout/FullPageContainer/FullPageContainer';
import MainPage from './components/pages/MainPage/MainPage';
import LastPage from './components/pages/LastPage/LastPage';
import ProjectPage from './components/pages/ProjectPage/ProjectPage';
import projects from './data/timeline.json';
import './App.css'

function App() {
  console.log(projects)
  return (
    <FullPageScrollManager>
      <FullPageContainer background={mainBg} style={{ 
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: 'black'
        }}>
        <MainPage />
      </FullPageContainer>
      {...projects.map(project => (
        <FullPageContainer key={project.title}>
          <ProjectPage project={project} />
        </FullPageContainer>
      ))}
      <FullPageContainer background={lastBg}>
        <LastPage />
      </FullPageContainer>
    </FullPageScrollManager>
  )
}

export default App
