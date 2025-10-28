import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import ProfileCard from "./components/profile/ProfileCard";

function App() {
  return (
    <>
      <Navbar />
      <div className="card-container">
        <Card
          title="Beachside Resort"
          description="Enjoy your vacation at a beautiful beach resort with all amenities and activities."
          image="https://images.pexels.com/photos/261204/pexels-photo-261204.jpeg"
          buttonText="Explore"
        />
        <Card
          title="Sports Club Management"
          description="Book grounds, manage tournaments, and handle memberships seamlessly."
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          buttonText="Explore"
        />
        <Card
          title="Health Club Management"
          description="Book grounds, manage tournaments, and handle memberships seamlessly."
          image="https://images.pexels.com/photos/7195369/pexels-photo-7195369.jpeg"
          buttonText="Explore"
        />
        <Card
          title="Luxury Hotel Booking"
          description="Book your stay at top-rated hotels with exclusive offers and easy cancellations."
          image="https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=80"
          buttonText="Book Now"
        />
      </div>
        <ProfileCard />
    </>
  );
}
export default App;
