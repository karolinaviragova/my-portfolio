import { AboutCourses } from '../../components/AboutCourses/AboutCourses';
import { AboutIntro } from '../../components/AboutIntro/AboutIntro';
import { AboutProjects } from '../../components/AboutProjects/AboutProjects';
import { AboutSkills } from '../../components/AboutSkills/AboutSkills';

export const AboutPage = () => {
  return (
    <>
      <AboutIntro />
      <AboutSkills />
      <AboutCourses />
      <AboutProjects />
    </>
  );
};
