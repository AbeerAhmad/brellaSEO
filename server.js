const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 8000;

const app = express();

const META_TAGS_DATA = {
  HOME: {
    title: "Brella Productions | Engagement Strategy & Production Experts",
    description:
      "Digital production and strategic services focused on audience engagement in support of your business objectives.",
    image: "https://brella.com/Brella_Web-refresh_PREVIEW-CARD.jpg",
    type: "website",
    url: "https://brella.com",
  },
  EVENTS: {
    title: "Brella Productions | Corporate Event Production Company",
    description:
      "Corporate event production company offering creative design and management solutions for in-person, virtual, and hybrid events.",
    image:
      "https://brella.com/static/media/events-page-splash.e45305ee349d651dcde6.jpg",
    type: "website",
    url: "https://brella.com/events",
  },
  ABOUT: {
    title: "Brella Productions | Who We Are",
    description:
      "WBE-certified communications and digital learning company with more than three decades of experience serving global clients in pharma, manufacturing and other heavily regulated industries.",
    image:
      "https://brella.com/static/media/Brella_Web-refresh_header-image-About_v3.5cfec8e1333c2916de71.jpg",
    type: "website",
    url: "https://brella.com/about",
  },
  BLOG: {
    title: "Brella Productions | Insights and Inspiration",
    description:
      "Digital production and strategic services focused on audience engagement in support of your business objectives.",
    image: "https://brella.com/Brella_Web-refresh_PREVIEW-CARD.jpg",
    type: "website",
    url: "https://brella.com/blog",
  },
  HOME: {
    title: "Video Production, Events and Digital Strategy | Brella",
    description:
      "Brella is a full-spectrum digital production company, providing communications, learning, event and staffing solutions for healthcare and wellness organizations.",
    image: "https://brella.com/Brella_Web-refresh_PREVIEW-CARD.jpg",
    type: "website",
    url: "https://brella.com/",
  },
  CAREER: {
    title: "Brella Productions | Your Next Great Job",
    description:
      "Brella offers a rewarding work experience in a team-centric environment with opportunities for creative and professional growth.",
    image:
      "https://brella.com/static/media/careers-header@2x.246397617aeb1309076f",
    type: "website",
    url: "https://brella.com/careers",
  },
  CONTACT: {
    title: "Brella Productions | Contact",
    description:
      "Reach out to learn how Brella can help with your toughest communications, events, and eLearning production challenges.",
    image: "https://brella.com/Brella_Web-refresh_PREVIEW-CARD.jpg",
    type: "website",
    url: "https://brella.com/contact",
  },
  CORPORATE: {
    title: "Brella Productions | Engagement Strategy & Production Experts",
    description:
      "Strategies and solutions for internal and external communications in support of your organization’s values and objectives.",
    image:
      "https://brella.com/static/media/Brella_Web-refresh_CORPORATE-COMMUNICATIONS_header-gradient.243d19317a7a79326726.jpg",
    type: "website",
    url: "https://brella.com/corporate",
  },
  CUSTOMER: {
    title: "Brella Productions | Customer Education & Engagement Experts",
    description:
      "Creative design and production to help you forge meaningful customer relationships and build enduring customer communities.",
    image:
      "https://brella.com/static/media/brellaprod_CustomerEducation_splash_v3.d7bad9bc5e241a679b3e.jpg",
    type: "website",
    url: "https://brella.com/customer",
  },
  DESIGN: {
    title: "Brella Productions | Engagement & Digital Design Company",
    description:
      "Comprehensive creative design services to inspire and engage your target audience.",
    image:
      "https://brella.com/static/media/DesignHero_v7-2.21d26adf44d8dd381ace.jpg",
    type: "website",
    url: "https://brella.com/design",
  },
  ELEARNING: {
    title: "Brella Productions | eLearning Design & Development Company",
    description:
      "Engaging and scalable custom eLearning production, ranging from training videos and simulations to Articulate course development and leadership training.",
    image:
      "https://brella.com/static/media/Brella_Web-refresh_eLEARNING_SPLASH.e2fc493e4ec3715266c9.jpg",
    type: "website",
    url: "https://brella.com/elearning",
  },
  EVENTS: {
    title: "Brella Productions | Corporate Event Production Company",
    description:
      "Corporate event production company offering creative design and management solutions for in-person, virtual, and hybrid events.",
    image:
      "https://brella.com/static/media/events-page-splash.e45305ee349d651dcde6.jpg",
    type: "website",
    url: "https://brella.com/events",
  },
  INTERNAL: {
    title: "Brella Productions | Chicago Internal Agency Support Experts",
    description:
      "Dependable creative production partner offering strategic support and staffing solutions to realize your organization’s business goals.",
    image:
      "https://brella.com/static/media/Brella_Web-refresh_IN-HOUSE-AGENCY_header-image-gradient_v2-1.42c17d88f75c9b71acd6.jpg",
    type: "website",
    url: "https://brella.com/internal",
  },
  LEARNING: {
    title: "Brella Productions | Digital Learning & Engagement Specialists",
    description:
      "Brella devises and implements digital learning strategies rooted in tested instructional design and UX principles to optimize your organization’s training and development initiatives.",
    image:
      "https://brella.com/static/media/Brella_Web-refresh_STRATEGIC-LEARNING_splash.0fd3aa03d95c268ba577.jpg",
    type: "website",
    url: "https://brella.com/learning",
  },
  MEETINGSEVENTS: {
    title: "Brella Productions | Corporate Events Engagement Specialists",
    description:
      "Customized in-person and virtual event production tailored to your business goals and your audience’s needs.",
    image:
      "https://brella.com/static/media/Brella_Web-refresh_header-image-gradient.eda345f4972d2918e4ff.jpg",
    type: "website",
    url: "https://brella.com/meetingsevents",
  },
  PORTFOLIO: {
    title: "Brella Productions | Our Work",
    description:
      "Browse case studies and examples of Brella’s creative approach and problem-solving capabilities in communications, events, and eLearning.",
    image:
      "https://brella.com/static/media/Brella_Web-refresh_header-image-Portfolio_v2.2f5e0c9f0e2d1b6b7c2f.jpg",
    type: "website",
    url: "https://brella.com/portfolio",
  },
  VIDEO: {
    title: "Brella Productions | Chicago Video Production Company",
    description:
      "Chicago video production company offering studio and location shoots, post-production services, live stream video production, and more.",
    image:
      "https://brella.com/static/media/Brella_Web-refresh_VIDEO_page-splash.bea9c187aceda5694905.jpg",
    type: "website",
    url: "https://brella.com/video",
  },
};

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.HOME.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.HOME.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.HOME.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.HOME.type)
      .replace(/__URL__/g, META_TAGS_DATA.HOME.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.HOME.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.HOME.title)
      .replace(/__TWITTER_DESCRIPTION__/g, META_TAGS_DATA.HOME.description)
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.HOME.image);

    res.send(data);
  });
});

app.get("/events", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.EVENTS.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.EVENTS.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.EVENTS.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.EVENTS.type)
      .replace(/__URL__/g, META_TAGS_DATA.EVENTS.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.EVENTS.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.EVENTS.title)
      .replace(/__TWITTER_DESCRIPTION__/g, META_TAGS_DATA.EVENTS.description)
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.EVENTS.image);

    res.send(data);
  });
});

app.get("/about", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.ABOUT.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.ABOUT.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.ABOUT.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.ABOUT.type)
      .replace(/__URL__/g, META_TAGS_DATA.ABOUT.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.ABOUT.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.ABOUT.title)
      .replace(/__TWITTER_DESCRIPTION__/g, META_TAGS_DATA.ABOUT.description)
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.ABOUT.image);

    res.send(data);
  });
});

app.get("/blog", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.BLOG.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.BLOG.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.BLOG.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.BLOG.type)
      .replace(/__URL__/g, META_TAGS_DATA.BLOG.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.BLOG.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.BLOG.title)
      .replace(/__TWITTER_DESCRIPTION__/g, META_TAGS_DATA.BLOG.description)
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.BLOG.image);

    res.send(data);
  });
});

app.get("/careers", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.CAREER.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.CAREER.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.CAREER.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.CAREER.type)
      .replace(/__URL__/g, META_TAGS_DATA.CAREER.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.CAREER.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.CAREER.title)
      .replace(/__TWITTER_DESCRIPTION__/g, META_TAGS_DATA.CAREER.description)
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.CAREER.image);

    res.send(data);
  });
});

app.get("/contact", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.CONTACT.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.CONTACT.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.CONTACT.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.CONTACT.type)
      .replace(/__URL__/g, META_TAGS_DATA.CONTACT.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.CONTACT.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.CONTACT.title)
      .replace(/__TWITTER_DESCRIPTION__/g, META_TAGS_DATA.CONTACT.description)
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.CONTACT.image);

    res.send(data);
  });
});

app.get("/corporate", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.CORPORATE.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.CORPORATE.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.CORPORATE.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.CORPORATE.type)
      .replace(/__URL__/g, META_TAGS_DATA.CORPORATE.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.CORPORATE.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.CORPORATE.title)
      .replace(/__TWITTER_DESCRIPTION__/g, META_TAGS_DATA.CORPORATE.description)
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.CORPORATE.image);

    res.send(data);
  });
});

app.get("/customer", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    console.log(err);
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.CUSTOMER.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.CUSTOMER.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.CUSTOMER.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.CUSTOMER.type)
      .replace(/__URL__/g, META_TAGS_DATA.CUSTOMER.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.CUSTOMER.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.CUSTOMER.title)
      .replace(/__TWITTER_DESCRIPTION__/g, META_TAGS_DATA.CUSTOMER.description)
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.CUSTOMER.image);

    res.send(data);
  });
});

app.get("/design", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  console.log(filePath);
  fs.readFile(filePath, "utf8", (err, data) => {
    console.log(err);
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.DESIGN.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.DESIGN.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.DESIGN.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.DESIGN.type)
      .replace(/__URL__/g, META_TAGS_DATA.DESIGN.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.DESIGN.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.DESIGN.title)
      .replace(/__TWITTER_DESCRIPTION__/g, META_TAGS_DATA.DESIGN.description)
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.DESIGN.image);

    res.send(data);
  });
});

app.get("/elearning", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  console.log(filePath);
  fs.readFile(filePath, "utf8", (err, data) => {
    console.log(err);
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.ELEARNING.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.ELEARNING.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.ELEARNING.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.ELEARNING.type)
      .replace(/__URL__/g, META_TAGS_DATA.ELEARNING.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.ELEARNING.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.ELEARNING.title)
      .replace(/__TWITTER_DESCRIPTION__/g, META_TAGS_DATA.ELEARNING.description)
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.ELEARNING.image);

    res.send(data);
  });
});

app.get("/internal", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  console.log(filePath);
  fs.readFile(filePath, "utf8", (err, data) => {
    console.log(err);
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.INTERNAL.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.INTERNAL.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.INTERNAL.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.INTERNAL.type)
      .replace(/__URL__/g, META_TAGS_DATA.INTERNAL.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.INTERNAL.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.INTERNAL.title)
      .replace(/__TWITTER_DESCRIPTION__/g, META_TAGS_DATA.INTERNAL.description)
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.INTERNAL.image);

    res.send(data);
  });
});

app.get("/learning", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  console.log(filePath);
  fs.readFile(filePath, "utf8", (err, data) => {
    console.log(err);
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.LEARNING.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.LEARNING.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.LEARNING.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.LEARNING.type)
      .replace(/__URL__/g, META_TAGS_DATA.LEARNING.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.LEARNING.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.LEARNING.title)
      .replace(/__TWITTER_DESCRIPTION__/g, META_TAGS_DATA.LEARNING.description)
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.LEARNING.image);

    res.send(data);
  });
});

app.get("/meetingsevents", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  console.log(filePath);
  fs.readFile(filePath, "utf8", (err, data) => {
    console.log(err);
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.MEETINGSEVENTS.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.MEETINGSEVENTS.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.MEETINGSEVENTS.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.MEETINGSEVENTS.type)
      .replace(/__URL__/g, META_TAGS_DATA.MEETINGSEVENTS.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.MEETINGSEVENTS.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.MEETINGSEVENTS.title)
      .replace(
        /__TWITTER_DESCRIPTION__/g,
        META_TAGS_DATA.MEETINGSEVENTS.description
      )
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.MEETINGSEVENTS.image);

    res.send(data);
  });
});

app.get("/portfolio", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  console.log(filePath);
  fs.readFile(filePath, "utf8", (err, data) => {
    console.log(err);
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.PORTFOLIO.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.PORTFOLIO.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.PORTFOLIO.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.PORTFOLIO.type)
      .replace(/__URL__/g, META_TAGS_DATA.PORTFOLIO.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.PORTFOLIO.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.PORTFOLIO.title)
      .replace(/__TWITTER_DESCRIPTION__/g, META_TAGS_DATA.PORTFOLIO.description)
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.PORTFOLIO.image);

    res.send(data);
  });
});

app.get("/video", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  console.log(filePath);
  fs.readFile(filePath, "utf8", (err, data) => {
    console.log(err);
    if (err) {
      return console.log(err);
    }
    data = data
      .replace(/__TITLE__/g, META_TAGS_DATA.VIDEO.title)
      .replace(/__DESCRIPTION__/g, META_TAGS_DATA.VIDEO.description)
      .replace(/__IMAGE__/g, META_TAGS_DATA.VIDEO.image)
      .replace(/__TYPE__/g, META_TAGS_DATA.VIDEO.type)
      .replace(/__URL__/g, META_TAGS_DATA.VIDEO.url)
      .replace(/__TWITTER_URL__/g, META_TAGS_DATA.VIDEO.url)
      .replace(/__TWITTER_TITLE__/g, META_TAGS_DATA.VIDEO.title)
      .replace(/__TWITTER_DESCRIPTION__/g, META_TAGS_DATA.VIDEO.description)
      .replace(/__TWITTER_IMAGE__/g, META_TAGS_DATA.VIDEO.image);

    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
