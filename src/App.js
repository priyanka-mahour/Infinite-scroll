import './App.css';
import Images from './components';

function App() {
  return (
    <div className="App">
      {/* <GridView/> */}
      <div id="root">
        <div className="hero is-fullheight is-bold is-info">
          <div className="hero-body">
            <div className="container">
              <div className="header content">
                <h2 className="subtitle is-6">Code Challenge #16</h2>
                <h1 className="title is-1">
                  Infinite Scroll Unsplash Code Challenge
                </h1>
              </div>

              {/* <!--         Loading placeholder for images --> */}
              <img src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif" alt="loading" />

              {/* <!--         Display images here --> */}
              <Images/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
