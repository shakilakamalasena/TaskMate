import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            From Fixes to Finishes, We&apos;ve Got You Covered
          </h1>
          <p>
            At TaskMate, we connect you with skilled professionals for all your
            home service needs. From carpentry and plumbing to electrical work
            and repairs, our experts ensure top-quality service every time.
            Reliable help is just a click away. Let TaskMate be your go-to
            partner for home maintenance and improvement.
          </p>

          <Link to="/list" className="all-link">
            <span>Browse all <i className='bx bx-chevrons-right'></i></span>
          </Link>

          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>5+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Service Providers</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Customers</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/background.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
