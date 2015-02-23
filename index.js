var express = require("express");
var app =express();
//var sampleJson={"nmon":"2"};
var profile = {
  "skills": {
    "values": [
      {
        "id": 29,
        "skill": {"name": "Java"},
                "proficiency": {"years": 8, "proficiency": "Expert"}
      },
      {
        "id": 30,
        "skill": {"name": "Grails"},
        "proficiency": {"years": 2, "proficiency": "Intermediate"}
      },
      {
        "id": 31,
        "skill": {"name": "HTML"},
        "proficiency": {"years": 10, "proficiency": "Expert"}
      },
      {
        "id": 32,
        "skill": {"name": "CSS"},
        "proficiency": {"years": 6, "proficiency": "Intermediate"}
      },
      {
        "id": 33,
        "skill": {"name": "JavaScript"},
        "proficiency": {"years": 8, "proficiency": "Expert"}
      }
    ],
    "_total": 25
  },
  "headline": "Principal Software Engineer at LinkedIn",
  "summary": "Software engineer with 8+ years of experience working in a variety of industries, including social networking, travel, VoIP, financial trading platforms, and education. Very creative problem solver with strong interpersonal skills, known for consistently coming up with original ideas and being able to clearly communicate them.",
  "lastName": "Brikman",
  "honors": "* 2011: Winner of LinkedIn's first \"Innovator Challenge\"\n* 2011: Winner of 1 LinkedIn Hackday competition\n* 2010: Winner of 4 LinkedIn Hackday competitions\n* 2008: Filed a patent for the \"CFT\"\n* 2007: Cisco Achievement Program (CAP) award\n* 2006: Cisco Team Achievement Award\n* 2006: Cisco Achievement Program (CAP) award\n* 2002 - 2005: McMullen Dean's Scholarship\n* 2002 - 2005: Cornell Tradition Fellowship\n* 2002: Book Award from Saint Michael's College\n* 2002: William F. Hathaway Scholarship\n* 2002: Honor Scholar Award from North Shore Chamber of Commerce",
  "sitePublicProfileRequest": {"url": "http://www.linkedin.com/in/jbrikman"},
  "location": {
    "postalCode": "94305",
    "name": "San Francisco Bay Area",
    "country": {"code": "us"}
  },
  "interests": "",
  "siteStandardProfileRequest": {"url": "http://www.linkedin.com/profile?viewProfile=&key=16226632&authToken=RUHR&authType=name&trk=api*"},
  "memberUrlResources": {
    "values": [
      {
        "name": "Personal Website",
        "url": "http://www.ybrikman.com"
      },
      {
        "name": "Blog",
        "url": "http://brikis98.blogspot.com/"
      }
    ],
    "_total": 2
  },
  "numRecommenders": 0,
  "id": "16226632",
  "publicProfileUrl": "http://www.linkedin.com/in/jbrikman",
  "positions": {
    "values": [
      {
        "summary": "Working on [LinkedIn's Developer Platform](http://developer.linkedin.com), bringing the power of LinkedIn to sites all over the web.",
        "id": 178801877,
        "startDate": {
          "month": 4,
          "year": 2011
        },
        "title": "Principal Software Engineer",
        "company": {
          "id": 1337,
          "name": "LinkedIn",
          "industry": "Internet",
          "type": "Privately Held"
        },
        "isCurrent": true
      },
      {
        "summary": "* Designed and developed features for [LinkedIn Recruiter](http://talent.linkedin.com/), a corporate recruiting solution which includes powerful search, messaging, productivity & collaborative tools to help identify, organize and reach top candidates. LinkedIn Recruiter is built using Groovy on Rails, HTML, CSS and JS (YUI) for the front end, Java and Oracle for the back end, JUnit and Selenium for automated testing, and the Spring Framework for wiring everything together.\n\n* Avid participant in LinkedIn's monthly \"Hackdays\", where employees are allowed to spend a day working on just about anything they want. All Hackday participants present their projects to the company and the best ones are awarded prizes and get turned into real products. I've submitted 7 Hack Day projects thus far and have won 5 times. I also won LinkedIn's first \"Innovator Challenge\".\n\n* Designed and developed the [Resume Builder](http://resume.linkedinlabs.com), a tool that lets you convert your LinkedIn profile into a beautiful resume, using Ruby on Rails, Compass/Sass, jQuery and the LinkedIn API. Originally a Hackday winner (March, 2010), it is now an experimental feature on LinkedIn Labs. Read more about the Resume Builder in my \"Resumes and Hackdays\" post in the [LinkedIn Blog](http://blog.linkedin.com/2011/01/12/linkedin-resumes-hackdays/).",
        "id": 87460345,
        "startDate": {
          "month": 9,
          "year": 2009
        },
        "title": "Senior Software Engineer",
        "company": {
          "id": 1337,
          "name": "LinkedIn",
          "industry": "Internet",
          "type": "Privately Held"
        },
        "endDate": {
          "month": 4,
          "year": 2011
        },
        "isCurrent": false
      },
      {
        "summary": "[TripAdvisor](http://www.tripadvisor.com) is one of the leading travel sites on the web, attracting nearly 50 million visitors per month, 20 million members, and featuring over 30 million reviews and opinions. As part of the Core Site Team, I designed, developed, and deployed numerous features of the site using Java, Velocity, CSS, and JS (Mootools).\n\n* Added a new category of pages for [Business Center](http://www.tripadvisor.com/BusinessCenter) destinations. These pages featured hotels, flights, restaurants and other content specially chosen for business travelers and involved building new SEO friendly servlets, new Google Maps functionality, and new search filters.\n\n* Created a new [Package Holidays](http://www.tripadvisor.de/GeoPackageHolidays) section on TripAdvisor's German site that allows users to book vacation packages. Worked with two German content providers to create a new back-end service to fetch (via XML over HTTP) and cache (in memcached) vacation package data. Integrated this data into new SEO friendly pages that allow users to find, compare and book package holidays.",
        "id": 31868270,
        "startDate": {
          "month": 1,
          "year": 2008
        },
        "title": "Software Engineer",
        "company": {
          "id": 15027,
          "ticker": "EXPE",
          "name": "TripAdvisor",
          "industry": "Internet",
          "type": "Public Company"
        },
        "endDate": {
          "month": 7,
          "year": 2009
        },
        "isCurrent": false
      },
      {
        "summary": "I was part of Cisco's [Customer Voice Portal](http://developer.cisco.com/web/cvp/) team, which develops VoIP contact center software for major clients such as the IRS, American Express, and Home Depot.\n\n* Designed and developed the management software for a video contact center video content management server. The server included media monitoring (multi-threaded Java), multi-lingual metadata management (Java, XML, JAXB), searching & filtering (Apache Lucene), and video streaming (Darwin Streaming Server). Built two web front ends using JSP, JSTL, Struts, HTML, CSS, and JavaScript: one for administrators that behaved as a file manager and one for contact center a gents that behaved similar to YouTube. Both interfaces supported display and search in 16 languages and had to pass government accessibility requirements. Received a CVP Team Achievement Award for this project.\n\n* Individually developed an internal project codenamed \"CFT\" using Java and XML that served as a generic tool to help analyze and visualize log data for virtually any software product. Filed a patent for the CFT's generic approach to log parsing and analysis. Presented the CFT to Cisco's Voice Technology Group (VTG) at a \"tech talk\" and received praise from multiple Cisco VPs, directors, and managers, as well as two Cisco Achievement Program (CAP) Awards for my work. The CFT is now being used across VTG and has helped reduce support costs for multiple business units within Cisco.",
        "id": 23729651,
        "startDate": {
          "month": 7,
          "year": 2006
        },
        "title": "Software Engineer",
        "company": {
          "id": 1063,
          "ticker": "CSCO",
          "name": "Cisco Systems",
          "industry": "Computer Networking",
          "type": "Public Company"
        },
        "endDate": {
          "month": 1,
          "year": 2008
        },
        "isCurrent": false
      },
      {
        "summary": "[CS 211](http://www.cs.cornell.edu/courses/cs211/2006sp/), \"Data Structures and Algorithms,\" is an intermediate programming course with topics including program structure and organization, classes and objects, program development, recursion, data structures and types (lists, stacks, queues, trees), object-oriented and functional programming, and analysis of algorithms.\n\n* Taught a weekly section for 14 students.\n* Held weekly office hours to help students with projects, exams and difficult concepts.\n* Wrote and graded programming assignments and exams.",
        "id": 26076924,
        "startDate": {
          "month": 1,
          "year": 2006
        },
        "title": "CS 211 Teaching Assistant",
        "company": {
          "id": 3523,
          "name": "Cornell University",
          "industry": "Higher Education",
          "type": "Educational Institution"
        },
        "endDate": {
          "month": 5,
          "year": 2006
        },
        "isCurrent": false
      },
      {
        "summary": "[Thomson Financial's Autex](http://thomsonreuters.com/products_services/financial/financial_products/equities_derivatives/americas/autex) provides an online, real-time trade network for trade order indications and executions. As a summer intern, I designed the FIX Replay Tool (FRT), an application to performance test Autex by \"replaying\" real transactions from a transaction database. To produce suitable load, the FRT was developed as a multi-threaded application that could be distributed over multiple computers. Implemented a prototype of the FRT using Java, XML and SQL and presented it to the Autex Group.",
        "id": 23729712,
        "startDate": {
          "month": 6,
          "year": 2005
        },
        "title": "Software Engineer",
        "company": {
          "id": 1172,
          "ticker": "TOC",
          "name": "Thomson Financial",
          "industry": "Financial Services",
          "type": "Public Company"
        },
        "endDate": {
          "month": 8,
          "year": 2005
        },
        "isCurrent": false
      },
      {
        "summary": "* Maintained and updated the [Campus Life Homepage](http://campuslife.cornell.edu).\n* Created the [Residence Hall Pages](http://housing.cornell.edu), including 2d and 3d floor plans.\n* Created the [Residential Initiative Homepage](http://ri.campuslife.cornell.edu).",
        "id": 23729808,
        "startDate": {
          "month": 9,
          "year": 2002
        },
        "title": "Student webmaster",
        "company": {
          "name": "Cornell Campus Life",
          "industry": "Information Technology and Services"
        },
        "endDate": {
          "month": 8,
          "year": 2004
        },
        "isCurrent": false
      }
    ],
    "_total": 7
  },
  "languages": {
    "values": [
      {
        "id": 54,
        "language": {"name": "English"}
      },
      {
        "id": 55,
        "language": {"name": "Russian"}
      },
      {
        "id": 56,
        "language": {"name": "Spanish"}
      }
    ],
    "_total": 3
  },
  "specialties": "Object oriented design & analysis, data structures, software architecture, project deployment, web-based applications, automated testing, debugging, UI development.",
  "pictureUrl": "http://media.linkedin.com/mpr/mprx/0_UciCehr2tWuDOngbMKGge_BptEVG-zSbJrcje_92S7a-DlsFcA1m6iCGyXsjl-uwsq3ybXHcFAtL",
  "apiPublicProfileRequest": {"url": "http://api.linkedin.com/v1/people/url=http%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fin%2Fjbrikman:public"},
  "apiStandardProfileRequest": {
    "headers": {
      "values": [{
        "name": "x-li-auth-token",
        "value": "name:RUHR"
      }],
      "_total": 1
    },
    "url": "http://api.linkedin.com/v1/people/16226632"
  },
  "educations": {
    "values": [
      {
        "id": 12648387,
        "startDate": {"year": 2005},
        "fieldOfStudy": "Computer Science",
        "degree": "Master of Engineering",
        "schoolName": "Cornell University",
        "endDate": {"year": 2006},
        "activities": "",
        "notes": ""
      },
      {
        "id": 12648443,
        "startDate": {"year": 2002},
        "fieldOfStudy": "Computer Science",
        "degree": "BS",
        "schoolName": "Cornell University",
        "endDate": {"year": 2005}
      },
      {
        "id": 16299962,
        "startDate": {"year": 1998},
        "fieldOfStudy": "",
        "degree": "Diploma",
        "schoolName": "Marblehead High School",
        "endDate": {"year": 2002},
        "activities": "",
        "notes": ""
      }
    ],
    "_total": 3
  },
  "connections": {"_total": 265},
  "firstName": "Yevgeniy",
  "industry": "Computer Software"
};




app.use(express.static(__dirname + '/public'));
var options = {
    root: __dirname,
        headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

app.get("/api",function(req,res) {
	res.set("Content-type","application/json");
	res.send(JSON.stringify(profile));
	// body...
}).get("/",function(req,res){
	res.sendFile('index_profile.html',options);
}).listen(3000);