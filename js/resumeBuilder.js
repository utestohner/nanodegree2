

var bio = {
"name" : "Ute",
"contact": "415 568 6351",
"role": "Product Manager",
"contacts": {
	"mobile":"415-568-6251",
	"email":"ustohner@gmail.com",
	"twitter":"etuute",
	"location":"San Francisco"
 
},
"skills":["aweseomeness", "programming", "teaching", "JS"],
"welcome":"Willkommen",
//"skills": skills,
"bioPic":"images/fry.jpg"
};


var work = {
    "jobs":[
    {
"employer" : "employer1",
"title" : "Senior Product Manager",
"date": "2 years",
"location": "Menlo Park"
},
    {
"employer" : "employer2",
"title" : "Product Manager",
"date": "4 years",
"location": "San Jose"
}

]
};

var education = {
    "schools": [
        {
            "name": "Universitaet Siegen",
            "city": "Siegen",
            "degree": "Diplom",
            "major": "Business Administration"
        },
        {
            "name": "Universitaet Anhalt",
            "city": "Koethen",
            "degree": "Diplom (FH)",
            "major": "Computer Science"
        }
    ]
};



var formattedRole = HTMLheaderRole.replace("%data%",(bio.role));
var formattedName = HTMLheaderName.replace("%data%",(bio.name));
var formattedMobile = HTMLmobile.replace("%data%",(bio.contacts.mobile));
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",(bio.welcome));

for (job in work.jobs)
{

$("#workExperience").append(HTMLworkStart);

 var formattedEmployer = var HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 var formattedTitle = var HTMLworkTitle.replace("%data%", work.jobs[job].title);
 
 var formattedEmployerTitle = formattedEmployer + formattedTitle;
 
 $(".work-entry:last").append(formattedEmployerTitle);
 };
 


$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);
$("#main").append(formattedMobile);
$("#main").append(formattedWelcome);
//$("#main").append(education["location"]);
$("#main").append(work.employer);
//$("#main").append(education.years);
//$("#main").append(education.city);
//$("#main").append(bio.skills);
//$("#main").append(education.name);

if (bio.skills.length>0) 
//if length of skills array is longer then 0

{
$("#header").append(HTMLskillsStart);
//append HTMLskillstart

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);

formattedSkill=HTMLskills.replace("%data%", bio.skills[1]);

$("#skills").append(formattedSkill);
//var formattedSkill is created by taking HTMLSkills and calling .replace. Replace data placehoder with the second in the list.
//Append that list to the page
formattedSkill=HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill=HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
}


//$("#main").append("Charlie Chaplin");

//var awesomeThoughts = "I am AWESOME";
//var funThoughts = awesomeThoughts.replace ("AWESOME", "FUN");
//$("#main").append(funThoughts);


//var name = "Ute";
//var role = "Front End Developer";
//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%",role);
//$("#main").prepend(formattedRole);

//$("#main").prepend(formattedName);

//var skills = ["aweseomeness", "programming", "teaching", "JS"];
//if (var skills == true) {
//  $("#main").append(skills);
//}
//$("#main").append(skills);


//var education =
//{
//"schools":[
//{
//"name":  "Universitaet Siegen",
//"city": "Siegen",
//"degree": "Diplom"
//"major":  ["Business Administration"]
//},
//{
//"name": "Hochschule Anhalt";
//"city": "Koethen",
//"degree": "Diplom FH",
//"major": ["Computer Science"]
//},
//]
//};

//var education = {};
//education["school"] ="Universitaet Siegen";
//education["location"]= "Siegen";

//$("#main").append(bio.name);
//$("#main").append(bio.contact);
//$("#main").append(bio.role);
//$("#main").append(bio.contact);

//$("#main").append(work.position);
//$("#main").append(education.name);
