

 



 
 var bio = {
 	"name": "Wes Wendt",
 	"role": "Web Developer",
 	"contacts": {
 		"mobile": "650-666-666",
 		"email": "john@example.com"
 	},
 	"welcomeMessage": "blah blah",
 	"skills": [
 	"front end development", "awesomeness"
 	],
 	"bioPic": "images/chris_farley.jpg"
 }

var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";


var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bioPic);


 //bio["city"] = "St. Louis";
 //bio["welcomeMessage"] = "Welcome to my resume page";
 //bio["email"] = "westin.wendt2@gmail.com";
 //bio["education"] = "Washington University in St. Louis";
 //bio["work"] = "tech sales";

var education = {
	"schools": [
		{
			"name": "University of Miami",
			"location": "Miami, Florida",
			"major": ["Finance", "Marketing"]
		},
		{
			"name": "Washington University in St. Louis",
			"location": "St. Louis, Misouri",
			"degree": "MBA"
		}

	]
}

var work = {
	"jobs": [
		{
			"employer": "IBM",
			"title": "Intern",
			"dates": "January 3000 - Future",
			"description": "blah blah"
		},
		{
			"employer": "Panucci's Pizza",
			"title": "Delivery Boy",
			"dates": "1998 - December 31, 1999",
			"description": "blah blah"
		}

	]
}

var projects = {
	"map": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Blah",
			"images": ["https://lh3.ggpht.com/"]
		}
	]
}


// var newEmail =
 //	email.replace("westin.wendt2@gmail.com", "bwendt@wustl.edu");


 //$("#main").append(funThoughts);



 	$("#header").prepend(formattedName);
 	$("#header").append(formattedRole);
 	$("#header").append(formattedHTMLbioPic);

 	//$("#education").append
 	//$("#main").append(skills);
 	//$("#main").append(bio.welcomeMessage);
 	//$("#main").append(bio.education);
 	//$("#main").append(bio.work);

 	if(bio.skills.length > 0) {
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
 		$(".work-entry:last").append(formattedDescription)
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

 }



 $(document).click(function(loc) {
 	var x = loc.pageX;
 	var y = loc.pageY;
 	logClicks(x,y);
 });

 $("#mapDiv").append(googleMap);
 //$("#education").append


 	



 //console.log(email);
 //console.log(newEmail);

 console.log(firstName);
 //console.log(awesomeThoughts);