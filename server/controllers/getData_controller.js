'use strict';
const express = require('express');
const router = express.Router();

let GlobalDataEN = {
  dataMenus: [
    {name: 'Main', title: 'Main page', id: 'mainPage', yakor:"yakor_main"},
    {name: 'About', title: 'About me', id: 'aboutPage', yakor:"yakor_about"},
    {name: 'Skills', title: 'My Skills', id: 'skillsPage', yakor:"yakor_skills"},
    {name: 'Blog', title: 'My Blog', id: 'blogPage', yakor:"yakor_block"},
    {name: 'Projects', title: 'My Projects', id: 'projectsPage', yakor:"yakor_projects"},
    {name: 'Contacts', title: 'Call of me', id: 'callPage', yakor:"yakor_call"}
  ],
  socials: {
    vk: 'https://vk.com/id203064133',
    insta: 'https://www.instagram.com/xx_kalinka_malinka_xx/',
    fb: 'https://www.facebook.com/igor.kalinuk.3',
    in: 'https://www.linkedin.com/in/ihor-kalenyuk-601613153/',
    git: 'https://github.com/KilloBITS'
  },
  contacts: {
    number: '+38(066)427-31-60',
    email: 'mr.kalinuk@gmail.com',
    country: 'Ukraine',
    city: 'Lviv city'
  },
  aboutText:`I welcome you on my page, I am very glad to see you and I want to tell you a little about myself.

    And so let's start from the very beginning, my name is Kalenyuk Igor Vladimirovich, I was born on June 26, 1997 in a town called Ivanichi in western Ukraine. In high school, I became interested in programming and began to study it intensively starting with Delphi and moving on to more "complex" and interesting programming languages ​​such as C #. In the first year of college, I discovered web development and realized that it was mine. From now on, I completely devote all my free time only web technology and everything connected with them. I started making the first simple websites almost immediately and after a while it became interesting to make them alive and beautiful. Now I am professionally fluent in the language "Javascript" and its various "frameworks". Although “frameworks” is such a topic that can be discussed for a very long time, I will clarify some of my favorites, despite their difficulties and differences, I believe that they all have their pros and cons ... The first will be React since it is one of the most popular and popular in the world (this is my personal opinion), jQuery will go second since we all started with it and many continue to work with it, it is an indispensable part of what you see on the Internet. There are also many other classes with which I work, you can see them below in the block where my skills are described.

    You probably have a lot of questions? And how am I different from others?
    I will answer you:
    - I am a simple developer and do not differ much from others.
    But I have the advantage that others just do their job and for me web development is also a hobby / hobby, and most of my life is dedicated to her!

    Now the only thing I want to say is thanks for reading this article. More detailed information you will get by reading my site, believe me, everything is written there)`,
  blog: [
    {
      title: 'Created this site',
      date: '017.05.2019',
      image: 'myphoto.png',
      text: 'Good day, about a month ago, I decided to create my portfolio, but my hands did not reach, and it happened! I am glad to welcome everyone on my page, I hope you appreciate my efforts))'
    },
    {
      title: 'The birth of an idea',
      date: '03.06.2019',
      image: 'myphoto.png',
      text: 'Today came one idea that can make the life of many much more convenient. What an idea, I still will not say but believe it will be cool.'
    }
  ],
  projects: [
    {
      status: true,
      title: 'Radioclub "Azimuth"',
      desc: 'Site from radio club "Azimuth"',
      link: 'http://ur4wwr.org',
      git: 'https://github.com/KilloBITS/azimut',
      date: '01.04.2019',
      image: 'ur4wwr.png',
      tech: ["jQuery","Node.js","Express"]
    },
    {
      status: true,
      title: 'My Portfolio',
      desc: 'My web portfolio and resume',
      link: 'http://kaleniuk.top/',
      git: 'https://github.com/KilloBITS/resume',
      date: '10.06.2019',
      image: 'portfolio.png',
      tech: ["React","Node.js","Express"]
    },
    {
      status: true,
      title: 'Lady&Man Clothing store',
      desc: 'Online store for lady & man clothing',
      link: 'http://ladyman.club',
      git: 'https://github.com/KilloBITS/L-M_shop',
      date: '24.02.2019',
      image: 'ladyman.png',
      tech: ["jQuery","Node.js","Express"]
    },
    {
      status: true,
      title: 'My Job Project',
      desc: 'My Job Project from navigation maps',
      link: 'https://maps.micro-gis.com/',
      git: null,
      date: 'current',
      image: 'microgismaps.png',
      tech: ["jQuery","JAVA","Spring","OpenLayers"]
    },
    {
      status: false,
      title: 'FaceMAP',
      desc: 'Social network and map.',
      link: '#',
      git: null,
      date: 'current',
      image: null,
      tech: ["jQuery","Node.js","MapBOX"]
    },
    {
      status: true,
      title: 'Vernissage shop',
      desc: 'Online shop',
      link: 'http://vernissage-shop.com/',
      git: 'https://github.com/KilloBITS/vernissage',
      date: 'current',
      image: null,
      tech: ["jQuery","Node.js","Font Awesome"]
    }
  ],
  startModalText: `Greetings, visitor!

  If you came here it means you are interested in looking at my works, but I want to say something before you start looking.

  This is only a BETA version of my portfolio and I have not had time to add much information yet.

  I will be very grateful if you do not strictly judge the errors and shortcomings in a short time I will correct them.

  Thanks for attention!`
}

var getdata = (req, res, next) => {
  res.send({code: 500, data: GlobalDataEN});
};

router.post('/getData', getdata);


module.exports = router;
