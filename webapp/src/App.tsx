import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Search from "./components/Search";
import Releases from "./components/Releases";
import UserMenu from "./components/Header/UserMenu";

function App() {
  return (
    <>
      <UserMenu />
      <Header />
      <Releases />
      <Search />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
