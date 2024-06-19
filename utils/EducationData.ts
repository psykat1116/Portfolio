export interface EducationDataType {
  institute: string;
  time: string;
  info: string;
  location: string;
  instituteLink: string;
  locationLink: string;
}

export const EducationData: EducationDataType[] = [
  {
    institute: "Jalpaiguri Government Engineering College",
    time: "June 2021 - June 2025",
    info: "Bachelor of Technology in Information Technology CGPA: 9.27",
    location: "Jalpaiguri, West Bengal",
    instituteLink: "https://jgec.ac.in/#/",
    locationLink: "https://maps.app.goo.gl/zhr5tzDFfu3S33aw8",
  },
  {
    institute: "Ghoshpur High School",
    time: "2018 - 2020",
    info: "Completed Higher Secondary Education with 95.4% marks",
    location: "Haur, West Bengal",
    instituteLink:
      "https://schools.org.in/purba-medinipur/19190313802/ghoshpur-high-school.html",
    locationLink: "https://maps.app.goo.gl/KNX29ERtfpySCqC97",
  },
];
