import Navbar from "/components/Navbar";
import Hero from "/components/Hero";
import WorkshopDetails from "/components/WorkshopDetails";
import LearningOutcomes from "/components/LearningOutcomes";
import FAQ from "/components/FAQ";
import RegistrationForm from "/components/RegistrationForm";
import footer from "/components/footer";
import Footer from "/components/footer";

const WorkshopPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkshopDetails />
      <LearningOutcomes />
      <RegistrationForm />
      <FAQ />
      <Footer/>
    </>
  );
};

export default WorkshopPage;