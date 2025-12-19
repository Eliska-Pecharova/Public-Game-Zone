import "./PublicGamePage.css";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Categories from "../components/Categories";
import GameBanner from "../components/GameBanner";

const PublicGamePage = () => {
  return (
    <div>
      <div className="page-container">
        <NavBar />
        <Header />
        <Categories />
        <GameBanner />
      </div>
    </div>
  );
};

export default PublicGamePage;
