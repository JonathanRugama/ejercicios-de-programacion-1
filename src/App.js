
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './components/assets/css/layout.css'
import MainContainerLayout from './components/layout/main-container.layout';
import HeaderLayout from './components/layout/header.layout';
import MainContentLayout from './components/layout/main-content.layout';
import Aside from './components/layout/aside.layout';
import FooterLayout from './components/layout/footer.layout';
import QuestionOne from './components/pages/question-one';
import QuestionTwo from './components/pages/question-two';
import QuestionThree from './components/pages/question-three';
import QuestionFour from './components/pages/question-four';
import QuestionFive from './components/pages/question-five';
import QuestionSix from './components/pages/question-six';
import QuestionSeven from './components/pages/question-seven';
import QuestionEight from './components/pages/question-eight';
import QuestionNine from './components/pages/question-nine';
import QuestionTen from './components/pages/question-ten';


function App() {
  return (
    <MainContainerLayout>
      <BrowserRouter>
      <HeaderLayout/>
      <Aside/>
      <MainContentLayout>
      
          <Switch>
            <Route exact path="/question-1" component={QuestionOne}/>
            <Route exact path="/question-2" component={QuestionTwo}/>
            <Route exact path="/question-3" component={QuestionThree}/>
            <Route exact path="/question-4" component={QuestionFour}/>
            <Route exact path="/question-5" component={QuestionFive}/>
            <Route exact path="/question-6" component={QuestionSix}/>
            <Route exact path="/question-7" component={QuestionSeven}/>
            <Route exact path="/question-8" component={QuestionEight}/>
            <Route exact path="/question-9" component={QuestionNine}/>
            <Route exact path="/question-10" component={QuestionTen}/>
          </Switch>
          
      </MainContentLayout>
      
      <FooterLayout/>
      </BrowserRouter>
    </MainContainerLayout>
  );
}

export default App;
