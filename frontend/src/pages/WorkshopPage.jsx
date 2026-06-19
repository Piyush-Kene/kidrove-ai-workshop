import Navbar from "/components/Navbar";
import Hero from "/components/Hero";
import WorkshopDetails from "/components/WorkshopDetails";
import LearningOutcomes from "/components/LearningOutcomes";
import FAQ from "/components/FAQ";
import RegistrationForm from "/components/RegistrationForm";

const WorkshopPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkshopDetails />
      <LearningOutcomes />
      <FAQ />
      <RegistrationForm />
    </>
  );
};

export default WorkshopPage;