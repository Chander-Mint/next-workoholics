import Banner from '../components/Banner';
import Experience from '../components/Experience';
import CardSection from '../components/CardSection';
import ServiceSection from '../components/ServiceSection';
import LocationSection from '../components/LocationSection';
import MembershipSection from '../components/MembershipSection';
import BookingSection from '../components/BookingSection';
import Footer from '../components/Footer';
import FormSection from '../components/FormSection';

const Home = () => {
  return (
    <>
      <Banner id="home" />
      <Experience id="experience" />
      <FormSection id="form" />
      <CardSection id="card" />
      <ServiceSection id="services" />
      <LocationSection id="location" />
      <MembershipSection id="membership" />
      <BookingSection id="booking" />
      <Footer id="footer" />
    </>
  );
};

export default Home;