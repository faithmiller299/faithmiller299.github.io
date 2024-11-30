// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#591F0A, #F2F2F2, #A67458, #9b59b6, #2E4D59, #BFA98E",
  firstName: "Faith",
  middleName: "",
  lastName: "Miller",
  message: " Vocalist . Actress ",
  icons: [
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/faith.miller.315080",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/faithmller/",
    },
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/@faithmiller9876",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/headshot.jpeg"),
  imageSize: 500,
  message:
    'Faith Miller is a Vocalist and Actress from Columbia, South Carolina. She is currently receiving ' +
    'a Bachelor of Arts with a concertation of vocal performance at Clemson University. She was ' +
    'originally getting her BFA in Musical Theatre at Anderson University but decided to change her ' +
    'college and career journey. She has been drawn to music and its qualities for as long as she can ' +
    'remember. As a Voice Major, she is dedicated to mastering the craft of music and exploring ' +
    'various operettic, foreign language, and musical theatre pieces, as well as techniques in weekly ' +
    'voice lessons. Throughout high school, she was involved in various musical productions. These ' +
    'include "The Addams Family" and "High School Musical: On Stage." She had the opportunity to play ' +
    'the lead in both productions. Though she is particularly drawn to the musical side of theatre and ' +
    'performing, she has also been involved in a few plays, such as Twelfth Night and Backstage. ' +
    'Faith was also a part of the concert choir in her senior year of high school and received the title ' +
    'of Vocal Student of The Year. This opened her up to the world of choral and more classical ' +
    'genres of music. This past summer, she did an internship where she was assistant music director ' +
    'at Bluffton Youth Theatre in Bluffton, South Carolina. This semester she is in Clemson ' +
    'University Singers and has performed the soprano solo in "Mozart\'s Coronation Mass" at the ' +
    'fall concert 2024. Upon Graduation, Faith aims to pursue a career in vocal performance whether ' +
    'that be on Broadway, in teaching high school choir, or any other avenue she can share her love of ' +
    'performing and music with others.',
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Gallery",
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Watch",
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact",
  phone: "(585)-626-7732",
  email: "faithmiller299@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
