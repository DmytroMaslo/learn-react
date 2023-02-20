import './App.css';
import logo from './img/logo.png';
import contentHeader from './img/contentHeader.png';
const App = () => {
  return (
    <div className="app-wrapper">
       <header className="flexbox">social network</header>
       <nav className="flexbox">ASIDE</nav>
       <article className="article">
        <div className='headerImg'>
          <img src={contentHeader}/>
        </div>
        <p>ARTICLE</p>
        <div>ava+description</div>
        <div>
          My posts
          <div>
            New Post
          </div>
          <div>
            <div>
              Post 1
            </div>
          </div>
        </div>
        </article>
       <footer className="flexbox">FOOTER</footer>
    </div>
  );
}



export default App;
