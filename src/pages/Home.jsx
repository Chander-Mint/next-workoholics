import { lazy, Suspense } from 'react';

const Banner = lazy(() => import('../components/Banner'));
const Experience = lazy(() => import('../components/Experience'));
const FormSection = lazy(() => import('../components/FormSection'));
const CardSection = lazy(() => import('../components/CardSection'));
const ServiceSection = lazy(() => import('../components/ServiceSection'));
const LocationSection = lazy(() => import('../components/LocationSection'));
const MembershipSection = lazy(() => import('../components/MembershipSection'));
const BookingSection = lazy(() => import('../components/BookingSection'));
const Footer = lazy(() => import('../components/Footer'));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Banner id="home" />
      <Experience id="experience" />
      <FormSection id="form" />
      <CardSection id="card" />
      <ServiceSection id="services" />
      <LocationSection id="location" />
      <MembershipSection id="membership" />
      <BookingSection id="booking" />
      <Footer id="footer" />
    </Suspense>
  );
};

export default Home;
