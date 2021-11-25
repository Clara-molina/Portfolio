// import
import './home.scss';
import { Link } from 'react-router-dom';
import photo from 'src/assets/img/photo1.jpg';
import home1 from 'src/assets/img/home1.jpg';
import home2 from 'src/assets/img/home2.jpg';
import arrow from 'src/assets/img/arrow-down.svg';
import cv from 'src/assets/files/cv.pdf';

const Home = () => (
  <div className="container">
    <section id="home" className="container-home">
      <h1 className="title">Clara Molina</h1>
      <p className="home-description">Développeuse Web et mobile Front-end</p>
      <div>
        <img src={arrow} alt="arrow" className="home-arrow" />
      </div>
      <div className="home-cv">
        <img src={photo} alt="clara" className="home-photo" />
        <p className="home-Mo"><Link to={cv} target="_blank" className="home-upload" download>Télécharger mon Cv</Link><br />3.1 Mo</p>
      </div>
    </section>

    <section id="one" className="container-one">
      <h1 className="title-section">Mon parcours</h1>
      <p className="home-description">On rembobine en 2009. <br /><br />De nature autonome j'ai rapidement souhaiter être indépendante, j'ai donc arrêter le lycée pour travailler, à 16 ans j'obtient mon premier cdi dans le domaine de la vente et rapidement j'ai des responsabilitées. <br /><br /> Plus tard, une opportunité d'être formé en tant qu'assistante dentaire s'ouvre à moi, pourquoi pas ?! <br />C'est partis pour 18 mois de formation. <br /><br /> 7 années plus tard le praticien prends sa retraite, un choix s'offre à moi, continuer sur cette carrière ou bien, me reconvertir dans un domaine qui me permet d'en apprendre tout les jours ... Le dev!  </p>
    </section>

    <div className="home-img">
      <img src={home1} alt="" className="home-img" />
    </div>

    <section id="tow" className="container-two">
      <h1 className="title-section">Ma reconversion</h1>
      <p className="home-description">Juin 2021 débute ma formation intense chez <a href="https://oclock.io/?gclid=Cj0KCQiAhf2MBhDNARIsAKXU5GSy_JK9lYPFKzaYcQdlFTyN17dUElgQSYVR5bvf113eUmgjJNYQwxcaAjlhEALw_wcB" target="_blank">O'clock</a>, 6 mois plus tard me voici développeuse web avec une petite préference pour le front puisque j'ai choisi de me spécialiser en React. La formation c'est achevée en Apothéose avec la présentation en live sur Youtube de nos projets de fin d'étude réaliser de A à Z en 1 mois. <br /><br />Pour voir ma présentation c'est par ici: <a href="https://www.youtube.com/watch?v=kHnBAk1Bwrg" target="_blank">Projet Spinning Squid</a> à 22:27 minutes</p>
    </section>

    <div className="home-img">
      <img src={home2} alt="" className="home-img" />
    </div>
  </div>
);

export default Home;
