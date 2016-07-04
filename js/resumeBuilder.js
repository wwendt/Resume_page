
 var bio = {
     "name": "Wes Wendt",
     "role": "Web Developer",
     "contacts": {
         "mobile": "650-666-666 ",
         "email": "john@example.com ",
         "github": "https://github.com/wwendt/Resume_page ",
         "twitter": "optional",
         "location": "San Francisco, California"
     },
     "welcomeMessage": "blah blah",
     "skills": [
         "front end development", "awesomeness"
     ],
     "bioPic": "images/chris_farley.jpg",
     "display": bio,
 };



 

    



 bio.display = function() {
     var arrayLengthBio = bio.contacts.length;

     for (var contact in bio.contacts) {
         if (bio.contacts.hasOwnProperty(contact)) {
             var formattedContacts = bio.contacts[contact];
             var formattedName = HTMLheaderName.replace("%data%", bio.name);
 			var role = "Web Developer";
 			var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 			var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
 			//var formattedWelcomemessage =

            $("#footerContacts").append(formattedContacts);
            $("#header").prepend(formattedName);
 			$("#header").append(formattedRole);
 			$("#header").append(formattedHTMLbioPic);
         }
     }

 }

 // $("#footerContacts").append(formattedContacts);	


 bio.display();


 //bio["city"] = "St. Louis";
 //bio["welcomeMessage"] = "Welcome to my resume page";
 //bio["email"] = "westin.wendt2@gmail.com";
 //bio["education"] = "Washington University in St. Louis";
 //bio["work"] = "tech sales";

 var education = {
     "schools": [{
         "name": "University of Miami",
         "location": "Miami, Florida",
         "degree": "BBA",
         "majors": ["Finance", "Marketing"],
         "dates": "2006-2010",
         "url": "string"
     }, {
         "name": "Washington University in St. Louis",
         "location": "St. Louis, Misouri",
         "degree": "MBA",
         "majors": "MBA",
         "dates": "2014-2016",
         "url": "string"
     }, ],
     "onlineCourses": [{
         "title": "Udacity Frontend Nanodegree",
         "school": "Udacity",
         "date": "2015-present",
         "url": "udacity.com"
     }]
 };



 var work = {
     "jobs": [{
             "employer": "IBM",
             "title": "Intern",
             "location": "Denver, Colorado",
             "dates": "January 3000 - Future",
             "description": "blah blah"
         },

     ]
 };

 var projects = {
     "projects": [{
         "title": "Sample Project 1",
         "dates": "2014",
         "description": "Blah",
         "images": ["https://lh3.ggpht.com/"]
     }]
 };


 // var newEmail =
 //	email.replace("westin.wendt2@gmail.com", "bwendt@wustl.edu");


 //$("#main").append(funThoughts);




 //$("#education").append
 //$("#main").append(skills);
 //$("#main").append(bio.welcomeMessage);
 //$("#main").append(bio.education);
 //$("#main").append(bio.work);

 if (bio.skills.length > 0) {
     $("#header").append(HTMLskillsStart);

     var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
     $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
 }

 function displayWork() {

     for (job in work.jobs) {
         $("#workExperience").append(HTMLworkStart);

         var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
         var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
         var formattedEmployerTitle = formattedEmployer + formattedTitle;

         $(".work-entry:last").append(formattedEmployerTitle);

         var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
         $(".work-entry:last").append(formattedDates);

         var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
         $(".work-entry:last").append(formattedDescription);
     }
 }

 displayWork();

 projects.display = function() {
     for (project in projects.projects) {
         $("#projects").append(HTMLprojectStart);

         var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
         $(".project-entry:last").append(formattedTitle);

         var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
         $(".project-entry:last").append(formattedDates);

         var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
         $(".project-entry:last").append(formattedDescription);

         if (projects.projects[project].images.length > 0) {
             for (image in projects.projects[project].images) {
                 var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                 $(".project-entry.last").append(formattedImage);
             }
         }
     }

 };

 projects.display();

 education.display = function() {
     for (school in education.schools) {
         $('#education').append(HTMLschoolStart);

         var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
         $(".education-entry").append(formattedSchool);

         var formattedDegree = HTMLschoolDegree.replace("%data", education.schools[school].degree);
         $('.education-entry').append(formattedDegree);

     }

 };

 education.display();


 $(document).click(function(loc) {
     var x = loc.pageX;
     var y = loc.pageY;
     logClicks(x, y);
 });

 $("#mapDiv").append(googleMap);
 //$("#education").append
 var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
 $(".work-entry:last").append(formattedLocation);

 	



 //console.log(email);
 //console.log(newEmail);

 
 //console.log(awesomeThoughts);