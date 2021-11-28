/* eslint-disable max-len */
// import
import './home.scss';
import { Link } from 'react-router-dom';
import { CodeSlash, FileEarmarkPdf, Flag, Heart, Laptop, Youtube } from 'react-bootstrap-icons';
import photo from 'src/assets/img/photo1.jpg';
import home1 from 'src/assets/img/home1.jpg';
import home2 from 'src/assets/img/home2.jpg';
import home3 from 'src/assets/img/home3.jpg';
import arrow from 'src/assets/img/arrow-down.svg';
import cv from 'src/assets/files/cv clara.pdf';

const Home = () => (
  <div className="container">
    <section id="home" className="container-home">
      <h1 className="title">Clara Molina</h1>
      <div className="box">
        <div className="content">
          <p className="home-description">Développeuse Web Front-end</p>
        </div>
      </div>
      <div className="home-arrow">
        <img src={arrow} alt="arrow" className="arrow bounce" />
      </div>
    </section>

    <div id="cv" className="home-cv">
      <img src={photo} alt="clara" className="home-photo" />
      <Link to={cv} target="_blank" className="home-upload" download><img src="" alt="" /><FileEarmarkPdf className="iconPdf" />Télécharger mon Cv</Link>
    </div>

    <section id="one" className="container-one">
      <div className="home-one">
        <h1 className="title-section">Mon parcours</h1>
        <p className="container-description">On retourne jusqu'en 2009. <br /><br />De nature autonome j'ai rapidement souhaité être indépendante, j'ai donc arrêté le lycée pour travailler, à 16 ans j'obtiens mon premier CDI dans le domaine de la vente et rapidement j'ai des responsabilités. <br /><br /> Plus tard, une possibilité d'être formé en tant qu'assistante dentaire s'ouvre à moi, pourquoi pas ?! <br />C'est partis pour 18 mois de formation. <br /><br /> 7 années plus tard le praticien prends sa retraite, un choix s'offre à moi, continuer sur cette carrière ou bien, me reconvertir dans un domaine qui me permet d'apprendre tous les jours de nouvelles choses ... Le dev!  </p>
      </div>
      <div className="home-img">
        <img src={home1} alt="" className="home-img" />
      </div>
    </section>

    <section id="two" className="container-two">
      <div className="home-one">
        <h1 className="title-section">Ma reconversion</h1>
        <p className="container-description">Juin 2021 débute ma formation intense chez
          <a rel="noopener noreferrer" className="link-projet" href="https://oclock.io/?gclid=Cj0KCQiAhf2MBhDNARIsAKXU5GSy_JK9lYPFKzaYcQdlFTyN17dUElgQSYVR5bvf113eUmgjJNYQwxcaAjlhEALw_wcB" target="_blank"> O'clock
          </a>, 6 mois plus tard me voici développeuse web avec une petite préférence pour le front puisque j'ai choisi de me spécialiser en React. La formation c'est achevée en Apothéose avec la présentation en direct sur Youtube de nos projets de fin d'étude réaliser de A à Z en 1 mois. <br /><br />Pour voir ma présentation c'est par ici, à 22:27 minutes.
        </p>
        <button type="button" className="button-projet">
          <a rel="noopener noreferrer" className="link-projet" href="https://www.youtube.com/watch?v=kHnBAk1Bwrg" target="_blank"><Youtube className="icon-youtube" /> Projet Spinning Squid
          </a>
        </button>
      </div>
      <div className="home-img">
        <img src={home2} alt="" className="home-img" />
      </div>
    </section>

    <section id="three" className="container-one-list">
      <h1 className="title-section">Mes compétences</h1>
      <div className="container-description">
        <ul className="container-list">
          <li className="container-items">
            <CodeSlash className="icon" />
            <h2 className="title-list">HTML & CSS</h2>
            <p>Langage de base maîtrisés, je continue bien sûr d'améliorer mes connaissances</p>
          </li>
          <li className="container-items">
            <CodeSlash className="icon" />
            <h2 className="title-list">JAVA SCRIPT</h2>
            <p>Avec Java Script j'ai acquis une préférence pour le Front, j'aime découvrir toutes les possibilités avec ce langage, notamment manipuler des API avec <strong>Ajax</strong>.</p>
          </li>
          <li className="container-items">
            <CodeSlash className="icon" />
            <h2 className="title-list">PHP & MYSQL</h2>
            <p>J'apprécie aussi le back, PHP était une partie majeur de la formation, avec des méthodes telles que <strong>POO</strong>, <strong>MVC</strong> ou <strong>Agile</strong>.</p>
          </li>
          <li className="container-items">
            <Flag className="icon" />
            <h2 className="title-list">CMS</h2>
            <p><strong>WordPress</strong>, le back-end de mon projet de fin d'étude à été réaliser avec.</p>
          </li>
          <li className="container-items">
            <Heart className="icon" />
            <h2 className="title-list">FRAMEWORK</h2>
            <p><strong>React</strong> à été mon choix de spé au cours de la formation, ayant une préference pour le front je me régal de plus en plus avec ce Framwork.<br /> J'utilise aussi <strong>Sass</strong> constament dans mes projets. <br /> Parfois j'utilise aussi <strong>Bootstrap</strong> pour certains élements.</p>
          </li>
          <li className="container-items">
            <Laptop className="icon" />
            <h2 className="title-list">OUTILS</h2>
            <p>Au cours de la formation j'ai développé sur un environnement <strong>GNU Linux</strong>, aujourd'hui je suis sur <strong>OS</strong>. <br /> J'ai appris à utiliser <strong>Git</strong> ainsi que <strong>GitHub</strong>, ils font maintenant partit de ma routine.</p>
          </li>
        </ul>
      </div>
    </section>

    <section id="four" className="container-two">
      <div className="home-img">
        <img src={home3} alt="" className="home-img" />
      </div>
      <div className="home-one">
        <h1 className="title-section">Et maintenant ?</h1>
        <p className="container-description">Actuellement je prépars mon dossier pour passer le <strong>Titre Professionnel</strong> de développeuse Web en Janvier sur Paris, en parallèle j'étudie pour passer la certification <strong>Opquast</strong> et je développe aussi des projets personnels afin d'améliorer mes compétences</p>
      </div>
    </section>
  </div>
);

export default Home;
