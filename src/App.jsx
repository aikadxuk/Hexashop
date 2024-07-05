import Global from "./components/Global/Global";
import Header from "./components/Header/Header";
import Categories from "./components/CategoriesItems/Categories";
import MenSlide from "./components/MenSlide/MenSlide";
import WomenSlide from "./components/WomenSlide/WomeSlide";
import KidsSlide from "./components/KidsSlide/KidsSlide";
import Explore from "./components/ExploreText/Explore";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import FormNewsletter from "./components/FormNewsletter/FormNewsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Global />
      <Header />
      <Categories />
      <MenSlide />
      <WomenSlide />
      <KidsSlide />
      <Explore />
      <SocialMedia />
      <FormNewsletter />
      <Footer />
    </>
  );
}

export default App;
