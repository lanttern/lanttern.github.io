
//$("#main").append(HTMLskillsStart)
var skills = ["Python (pandas scikit-learn numpy)", "R (ggplot)", "Java", "SQL", "MongoDB", "Machine Learning","HTML&CSS", "Javascript", "D3.js"];
//$("#header").append(formattedSkills);
var bio = {
	"name": "Zhihui XIE",
	"role": "Becoming a Data Scientist",
	"contacts": {
	  "Email:": "xiewisdom@gmail.com",
	  "Github:": "https://github.com/lanttern/",
	  "Data science portfolio:": "http://lanttern.github.io/projects/",
	  "FreeCodeCamp portfolio:": "https://www.freecodecamp.com/lanttern",
	  "Udacity courses:": "https://profiles.udacity.com/u/zhihuixie",
	  "Coursera courses:": "https://www.coursera.org/user/i/62d4a5f2f42d082ad17c306a4bb211eb",
	  "Kaggle profile:": "https://www.kaggle.com/zhihui",
	  "Location:": "Los Angeles, California"
	},
	"picture":"images/picture.jpg",
	"welcomeMg": "Welcome to my website",
	"skills": skills
};

var work = {
	"jobs": [
	{
		"employer": "Udacity",
	    "title": "Code Reviewer",
	    "location": "Los Angeles, California",
	    "dates": "February 2015 - present",
	    "description": "I am one of the very first Udacity Code Reviewers, where I review student project submissions. For each submission, I do both a thorough code review and project evaluation. I strive to give actionable and helpful feedback to students while also improving my code reviewing skills at the same time."
	},

	{
		"employer": "Children's Hospital Los Angeles",
	    "title": "Postdoctoral Research Fellow",
	    "location": "Los Angeles, California",
	    "dates": "July 2013 - present",
	    "description": "My projects use python and R programming tools to - 1) extract and analyze RNAseq data from brainspan, 2) analyze mass spectrometry data and map protein-protein interaction network, 3) visualize gene expression heatmap and perform statistical analyses."
	},

	
	{
		"employer": "University of Southern California",
	    "title": "Postdoctoral Research Associate",
	    "location": "Los Angeles, California",
	    "dates": "April 2012 - July 2013",
	    "description": "Perform mass spectrometry experiment to identify protein-protein interaction networks"
	}
	]	
};

var education = {
	"schools":[
	{
		"name": "Coursera (University of California, San Diego)",
		"location": "Los Angeles, California",
		"degree": "Specialization  ",
		"major": "Java Programming: Object-Oriented Design of Data Structures ",
		"dates": "February 2016 - present",
		"url": "https://www.coursera.org/specializations/java-object-oriented"
	},
	{
		"name": "Coursera (University of Washington)",
		"location": "Los Angeles, California",
		"degree": "Specialization  ",
		"major": "Machine Learning: Build Intelligent Applications ",
		"dates": "January 2016 - present",
		"url": "https://www.coursera.org/specializations/machine-learning"
	},
	{
		"name": "Coursera (Johns Hopkins University)",
		"location": "Los Angeles, California",
		"degree": "Specialization  ",
		"major": "Genomic Data Science ",
		"dates": "August 2015 - January 2016",
		"url": "https://www.coursera.org/user/i/62d4a5f2f42d082ad17c306a4bb211eb"
	},
	{
		"name": "Udacity",
		"location": "Los Angeles, California",
		"degree": "Nanodegree",
		"major": "Data Analyst",
		"dates": "November 2014 - April 2015",
		"url": "https://profiles.udacity.com/u/zhihuixie"
	},
    {
		"name": "Chinese Academy of Sciences",
		"location": "Shanghai, China",
		"degree": "Ph.D.",
		"major": "Developmental Biology",
		"dates": "September 2004 - January 2012",
		"url": "http://english.sibs.cas.cn/"
	},
	{
		"name": "Nanjing University",
		"location": "Nanjing, China",
		"degree": "B.S.",
		"major": "Biotechnology",
		"dates": "September 2000 - June 2004",
		"url": "http://www.nju.edu.cn/english/"
	}],
  "onlineCourses":[
  {
  	"title": ["Object Oriented Programming in Java","Intro to HTML and CSS (Udacity)","JavaScript Basics (Udacity)", "Data Analysis with R (Udacity)", 
  	          "Algorithmic Thinking (Coursera - Rice University)", "Principles of Computing (Coursera - Rice University)", 
  	          "Intro to Computer Science (Udacity)", "Algorithms: Design and Analysis, Part 2 (Coursera - Stanford University)", 
  	          "Algorithms: Design and Analysis, Part 1 (Coursera - Stanford University)",
  	          "An Introduction to Interactive Programming in Python (Coursera - Rice University)"],
  	"school": "Computer Science (Python, R, Java, HTML and CSS, JavaScript, Algorithms)",
  	"dates": ["April 2016","March 2015", "March 2015", "February 2015","November 2014", "August 2014", "February 2014", "November 2013", "September 2013", "July 2013"],
  	"url": ""
  },
   {
  	"title": ["Machine Learning: Classification (Coursera - University of Washington)","Machine Learning: Regression (Coursera - University of Washington)","Introduction to Recommender Systems (Coursera - University of Minnesota)","Mining Massive Datasets (Coursera - Stanford University)",
  	          "Machine Learning (Coursera - Stanford University)","Data Visualization (Udacity)","Intro to Machine Learning (Udacity)", 
  	          "Data Analysis with R (Udacity)", "Data Wrangling with MongoDB (Udacity)", "Intro to Data Science (Udacity)"],
  	"school": "Data Science (Data wrangle, Data exploration, Machine learning, Data visualization)",
  	"dates": ["April 2016","February 2016","February 2016","November 2015", "May 2015", "April 2015", "March 2015", "February 2015", "December 2014", "December 2014"],
  	"url": ""
  },
  {
  	"title": ["Using Databases with Python (Coursera - University of Michigan)","Managing Big Data with MySQL (Coursera - Duke University)", "Statistics for Genomic Data Science (Coursera - Johns Hopkins University)", 
  	          "Probability (Coursera - University of Pennsylvania)", 
  	          "Intro to Relational Databases (Udacity)", "Intro to Inferential Statistics (Udacity)", "Intro to Statistics (Udacity)"],
  	"school": "Database and Statistics",
  	"dates": ["February 2016","January 2016", "January 2016", "November 2015", "June 2015", "November 2014", "October 2014"],
  	"url": ""
  },
  {
  	"title": ["Statistics for Genomic Data Science (Coursera - Johns Hopkins University)",
  	          "Bioconductor for Genomic Data Science (Coursera - Johns Hopkins University)",
  	          "Algorithms for DNA Sequencing (Coursera - Johns Hopkins University)",
  	          "Command Line Tools for Genomic Data Science (Coursera - Johns Hopkins University)",
  	          "Python for Genomic Data Science (Coursera - Johns Hopkins University)",
  	          "Genomic Data Science with Galaxy (Coursera - Johns Hopkins University)",
  	          "Introduction to Genomic Technologies (Coursera - Johns Hopkins University)", 
  	          "Bioinformatics Algorithms (Part 1) (University of California, San Diego)"],
  	"school": "Genomic Data Science",
  	"dates": ["January 2016","November 2015","October 2015","September 2015","September 2015","August 2015","August 2015","February 2014"],
  	"url": ""
  }
  ]
};

var projects = {
	"projects": [
	{
	    "title": "Kaggle Competitions",
	    "dates": "Active working on different competitions",
	    "description": "Python and related packages (numpy, pandas, sklearn, plt) were used to process the data, train the data and predict the results.",
	    "images": ["images/kaggle.jpg"]
	},
	{
	    "title": "Make Effective Data Visualization: Trends for Ten Hot Startup Industries: 1990 to 2013",
	    "dates": "April 2015",
	    "description": "To discover the changes for ten startup industries from 1990 to 2013 each year, a time-series chart (left) was applied. In this chart, the percentages of startups by industry presented dynamic changes, but in general, two dominant industries - software and biotechnology, tend to shrink, and some startups in new industries increased. These changes seem to start from 2000. To explore if these trends are more obvious between two time periods - from 1990 to 1999 and from 2000 to 2013, the second chart (right) was applied to compare mean of percentages of startups by industry. Compared with 90s, the percentages of startups in software, biotechnology and consulting decrease obviously. While, the percentages of startups in new emeraged industries including social media, mobile and e-commerce incline to increase.",
	    "images": ["images/d3_final2.png"]
	},
	
	{
	    "title": "Identifying Fraud from Enron Email",
	    "dates": "February 2015",
	    "description": "Enron Corporation, which was one of the largest companies in the United States in 2000, was an American energy, commodities, and Services Company. In 2002, Enron had filed for bankruptcy because of accounting fraud. In the following federal investigation, a large database of over 600,000 emails generated by 158 employees of Enron was acquired. Subsequently, a copy of the database was purchased and released to public by Andrew McCallum. The dataset was used widely for machine learning studies. In this project, I built a machine learning model using “scikit-learn” built-in algorithm to predict a “person of interest” (“poi”), who may be involved in fraud in Enron. ",
	    "images": ["images/Enron_Complex.jpg", "images/machine learning.jpg"]
	},
	{
	    "title": "Explore and Summarize Data: Insight into Startups",
	    "dates": "January 2015",
	    "description": "The startups, generally newly created, are in a phase of development and research for markets.It’s important for both investors and entrepreneurs to understand characteristics of startups such as what are hot markets, where are hot regions and when are hot seasons for investments. To explore that, data of startups from 1990 to 2014 in US were used and analyzed in this project (collected by CruchBase (https://info.crunchbase.com/about/crunchbase-data-exports/)).",
	    "images": ["images/startups2.png", "images/startup3.png"]
	},
	{
	    "title": "Data Wrangle OpenStreetMaps: Improve OpenStreetMaps in Las Vegas",
	    "dates": "December 2014",
	    "description": "OpenStreetMap, an open project to create a free map around the world, is a powerful tool for viewing maps and humanitarian aid. The initial data of the map were collected using a handheld GPS and a notebook, digital camera, or a voice recorder. These data heavily rely on the human input, which may cause inconsistent input, misspellings or error (e.g. inconsistent input of Street, street, st., St.). This project is going to focus on map of Las Vegas, Nevada, USA and wrangling the data: 1) overview data (code: mapparser.py); 2) check the “k” value for each “<tag>” (code: tags.py); 3) find out number of unique users contributed to the map (code: users.py); 4) fix unexpected street types (e.g. street, st., St. to be Street) (code: audit.py); 5) transform the shape of data and insert data into mongodb (code: data.py and mongodb.py); 6) use MongoDB queries to find number and names of hotels, and shopping malls (code: query.by). ",
	    "images": ["images/Las Vegas2.png", "images/Las Vegas1.png"]
	},
	{
	    "title": "Analyzing the NYC Subway Dataset: Predict Ridership in Rainy and Non-rainy Days",
	    "dates": "November 2014",
	    "description": "In this analysis, I used ridership data generated in May 2011 New York city (NYC) MTA Subway and weather data generated at the same time and the same region to test the hypothesis that whether rainy days impacts ridership of NYC subway.",
	    "images": ["images/NYC_subway_map.gif", "images/NYC subway.jpg"]
	},
	{
	    "title": "Web Scraping: Extract and Analyze Human BrainSpan Transcriptome Dataset",
	    "dates": "August 2014",
	    "description": "In this analysis, I used Python program (correlation.py and down_correlative_data_brainspan.py) to scrape data from human BrainSpan (brainspan.org) website. The data were analyzed and visualized by using R programming language.",
	    "images": ["images/brainspan1.jpg", "images/brainspan2.jpg"]
	}
	]	

};
bio.display = function(){
	$("#header").append(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").append(HTMLbioPic.replace("%data%", bio.picture));
    $("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMg));
    for (index in bio.contacts){
        $("#header").append(HTMLcontactGeneric.replace("%contact%", index).replace("%data%", bio.contacts[index]));
    };

    if (bio.skills.length != 0) {
	    $("#header").append(HTMLskillsStart);
	    for (i = 0; i < bio.skills.length; i++){
		    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	    };
    };
};


function displayWork(){
	for (job in work.jobs) {
	//console.log(job);
	    $("#workExperience").append(HTMLworkStart);
	    $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]) 
		    + HTMLworkTitle.replace("%data%", work.jobs[job].title));
	    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates)); 
	    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    };
};

projects.display = function() {
		for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]));
	    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates)); 
	    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
	    for (image in projects.projects[project].images) {
	    	$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
	    };
	    
	};
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
	    $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school]["name"])
	       + HTMLschoolDegree.replace("%data%", education.schools[school]["degree"])); 
	    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]));
	    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]));
	    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["major"]));   
	};
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
	    $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[course]["school"])
	    	+ HTMLonlineURL.replace("%data%", education.onlineCourses[course]["url"])); 
        for (index in education.onlineCourses[course].title){

        	$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title[index])
        		+HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates[index]));  
        };
	    
	};
};

displayWork();
projects.display();
education.display();
bio.display();

$("#mapDiv").append(googleMap);
