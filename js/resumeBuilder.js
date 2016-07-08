
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
    "biopic": "images/chris_farley.jpg",
    "display": bio,
};




bio.display = function() {
    var arrayLengthBio = bio.contacts.length;

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    }

    //var formattedContacts = HTMLcontactGeneric.replace("%data%", bio.contacts.mobile);
    var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedHTMLlocation);
    $("#footerContacts").append(formattedHTMLgithub);
    $("#footerContacts").append(formattedHTMLtwitter);
    $("#footerContacts").append(formattedHTMLemail);
    //$("#footerContacts").append(formattedContacts);
    $("#footerContacts").append(formattedHTMLmobile);
    //$("#topContacts").append(formattedContacts);
    $("#topContacts").append(formattedHTMLtwitter);
    $("#topContacts").append(formattedHTMLmobile);
    $("#topContacts").append(formattedHTMLemail);
    $("#topContacts").append(formattedHTMLgithub);
    $("#topContacts").append(formattedHTMLlocation);


    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);



        //var formattedWelcomemessage =


    }


};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedHTMLbioPic);



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
        "url": "miami.edu"
    }, {
        "name": "Washington University in St. Louis",
        "location": "St. Louis, Misouri",
        "degree": "MBA",
        "majors": ["MBA"],
        "dates": "2014-2016",
        "url": "wustl.edu"
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
        "images": ["https:placehold.it/150x150", "https://placehold.it/150x150"]
    }]
};


// var newEmail =
// email.replace("westin.wendt2@gmail.com", "bwendt@wustl.edu");


//$("#main").append(funThoughts);




//$("#education").append
//$("#main").append(skills);
//$("#main").append(bio.welcomeMessage);
//$("#main").append(bio.education);
//$("#main").append(bio.work);



work.display = function() {

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs.location);
    $(".work-entry:last").append(formattedLocation);

    work.jobs.forEach(function(val) {
        console.log('val: ', val);

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", val.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", val.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", val.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", val.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();

projects.display = function() {
    projects.projects.forEach(function(val) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", val.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", val.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", val.description);
        $(".project-entry:last").append(formattedDescription);

        if (val.images.length > 0) {
            for (var i = 0; i < val.images.length; i++) {
                var formattedImage = HTMLprojectImage.replace("%data%", val.images[i]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    });

};

projects.display();

education.display = function() {
    $('#education').append(HTMLschoolStart);

    education.schools.forEach(function(val) {


        var formattedSchool = HTMLschoolName.replace("%data%", val.name);
        $(".education-entry").append(formattedSchool);

        var formattedDegree = HTMLschoolDegree.replace("%data", val.degree);
        $('.education-entry').append(formattedDegree);

        var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", val.dates);
        $('.education-entry').append(formattedHTMLschoolDates);

        var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", val.location);
        $('.education-entry').append(formattedHTMLschoolLocation);

        for (var i = 0; i < val.majors.length; i++) {
            var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", val.majors[i]);
            $('.education-entry').append(formattedHTMLschoolMajor);
        }


    });

    education.onlineCourses.forEach(function(val) {
        var formattedHTMLonlineClasses = HTMLonlineClasses.replace("%data%", val.title);
        $('.education-entry').append(formattedHTMLonlineClasses);
        var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", val.title);
        $('.education-entry').append(formattedHTMLonlineTitle);
        var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", val.school);
        $('.education-entry').append(formattedHTMLonlineSchool);
        var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", val.date);
        $('.education-entry').append(formattedHTMLonlineDates);
        var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", val.url);
        $('.education-entry').append(formattedHTMLonlineURL);
    });
};

education.display();


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

$("#mapDiv").append(googleMap);
//$("#education").append



 //console.log(email);
 //console.log(newEmail);

 
 //console.log(awesomeThoughts);