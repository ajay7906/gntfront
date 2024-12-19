import { motion } from 'framer-motion';
import JobList from '../components/careers/JobList';
import HeroBanner from '../components/careers/HeroBanner';
import WhyJoinUs from '../components/careers/WhyJoinUs';
//import CompanyValues from '../components/careers/CompanyValues';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroBanner />
      <WhyJoinUs />
      {/* <CompanyValues /> */}
      <JobList />
    </div>
  );
}