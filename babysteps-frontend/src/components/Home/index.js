import { Link } from "react-router-dom";

import "./index.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to BabySteps</h1>
        <p>Book your prenatal appointments with ease and care.</p>
        <Link to="/appointment" className="book-btn">
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}

export default Home;
