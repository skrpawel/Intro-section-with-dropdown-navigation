import Button from "./Button";
import Navbar from "./Navbar";


const App = () => {
  return (
    <header>
      <nav>
        <Navbar />
        <div className="nav-account">
          <Button context="Login" />
          <Button context="Register" />
        </div>
      </nav>
    </header>
  );
};

export default App;
