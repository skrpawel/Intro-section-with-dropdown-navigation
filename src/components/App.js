import Button from "./Button";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <Navbar />
          <div className="nav-account">
            <Button context="Login" />
            <Button context="Register" />
          </div>
        </nav>
      </header>
      <main>
        <div className="left-main">
          <h1>Make <br />remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivy soar.</p>
          <Button context="Learn more" />
          <Footer />
        </div>
        <div className="right-main"></div>
      </main>
    </>
  );
};

export default App;
