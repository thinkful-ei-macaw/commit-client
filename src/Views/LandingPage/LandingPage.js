import React from 'react';
import Nav from '../../components/Nav/Nav';
import './LandingPage.css';
import Footer from '../../components/Footer/Footer';
import {Link} from 'react-router-dom';

class LandingPage extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    getStarted: false
  }
}

  render() {
   
    return (
     <>
       <Nav/>
       <main>
         <section className="landing_page">
           <div className="hero">
            <h1>Create better coding&nbsp;habits</h1>
            <p>Elit enim Lorem pariatr pariatur esse culpa enim ad ex consequat dolore.
               Elit enim Lorem pariatr pElit enim Lorem pariatr pElit enim Lorem pariatr p
            </p>
            <div className="button_container">
             <Link to={'/get-started'}>
            <button>Get started</button>
             </Link>
            </div>
           
             </div>
            <div className="features_section">
            <h1>Focus on what&nbsp;matters</h1>
            <p>Elit enim Lorem pariatr pariatur esse culpa enim ad ex consequat dolore.
               Elit enim Lorem pariatr pElit enim Lorem pariatr pElit enim Lorem pariatr p
            </p>
            <div className="image_container">
              <div>
                {/* <img className="product_image"/> */}
              </div>
            </div>
            </div>
            
            <div className="features_section">
            <h1>Keep track of your breaks&nbsp;</h1>
            <p>Elit enim Lorem pariatr pariatur esse culpa enim ad ex consequat dolore.
               Elit enim Lorem pariatr pElit enim Lorem pariatr pElit enim Lorem pariatr p
            </p>
            <div className="image_container">
              <div>
                {/* <img className="product_image"/> */}
              </div>
            </div>
            </div>
            <div className="features_section">
            <h1>Stay motivated with&nbsp;streaks</h1>
            <p>Elit enim Lorem pariatr pariatur esse culpa enim ad ex consequat dolore.
               Elit enim Lorem pariatr pElit enim Lorem pariatr pElit enim Lorem pariatr p
            </p>
            <div className="image_container">
              <div>
                {/* <img src="className="product_image" alt='this is an image'/> */}
              </div>
            </div>
            </div>
           <Footer/>
         </section>
       </main>
     </>
    );
  }
}

export default LandingPage;