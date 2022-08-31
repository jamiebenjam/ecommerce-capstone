import './App.css';
import HomePageFooter from './HomePageFooter';
import HomePageArticles from './HomePageArticles';
import HomePageReviews from './HomePageReviews';
import HomePageDescription from './HomePageDescription';
import HomePageHeadingMenu from './HomePageHeadingMenu';

function App() {
  return (
    <div className="App">
      <HomePageHeadingMenu />
      <HomePageDescription />
      <HomePageReviews />
      <HomePageArticles />
      <HomePageFooter />
    </div>
  );
}

export default App;
