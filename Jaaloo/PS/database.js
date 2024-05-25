originaldatabase=  {"modules" : [
  {
    "moduleID": "M1",
    "moduleTitle": "User Registration and Profile Management",
    "sortPosition": 1
  },
  {
    "moduleID": "M2",
    "moduleTitle": "Investment and Contribution Tracking",
    "sortPosition": 2
  },
  {
    "moduleID": "M3",
    "moduleTitle": "Workstream Management and Incentivization",
    "sortPosition": 3
  },
  {
    "moduleID": "M4",
    "moduleTitle": "Profit Sharing Calculation",
    "sortPosition": 4
  },
  {
    "moduleID": "M5",
    "moduleTitle": "Financial Management",
    "sortPosition": 5
  },
  {
    "moduleID": "M6",
    "moduleTitle": "Communication, Collaboration, and Marketing",
    "sortPosition": 6
  },
  {
    "moduleID": "M7",
    "moduleTitle": "Educational Resources and Support",
    "sortPosition": 7
  },
  {
    "moduleID": "M8",
    "moduleTitle": "Subscription and Packages Management",
    "sortPosition": 8
  },
  {
    "moduleID": "M9",
    "moduleTitle": "Legal, Tax, and Affiliate Management",
    "sortPosition": 9
  },
  {
    "moduleID": "M10",
    "moduleTitle": "Analytics, R&D, and Document Management",
    "sortPosition": 10
  }
] ,

"features":[
  {
    "featureID": "F1",        
    "moduleID": "M1",
    "featureTitle": "Log in",
    "sortPosition": 1,
    "href": "Log-in.html"
  },
  {
    "featureID": "F2",
    "moduleID": "M1",
    "featureTitle": "Manage User Info",
    "sortPosition": 2,
    "href": "Manage-User-Info.html"
  },
  {
    "featureID": "F3",        
    "moduleID": "M1",
    "featureTitle": "Manage User Permissions",
    "sortPosition": 3,
    "href": "User-Profiles.html"
  },
  {
    "featureID": "F4",        
    "moduleID": "M1",
    "featureTitle": "Account Creation",
    "sortPosition": 4,
    "href": "Account-Creation.html"
  },
  {
    "featureID": "F5",        
    "moduleID": "M1",
    "featureTitle": "Reset Password",
    "sortPosition": 5,
    "href": "Reset-Password.html"
  },
  {
    "featureID": "F6",        
    "moduleID": "M1",
    "featureTitle": "Log out",
    "sortPosition": 6,
    "href": "#",
    "onclick":"logout()"
  },  
] ,

  "roles" : [{"roleID":"R1", roleTitle:"Investor"},{"roleID":"R2", roleTitle:"Programmer"},{"roleID":"R3", roleTitle:"Frelance"},{"roleID":"R4", roleTitle:"Superuser"}]
,
  "rolefeatures" : [{"roleID":"R4", "featureID": "F1"},{"roleID":"R4", "featureID": "F2"},{"roleID":"R4", "featureID": "F13"},{"roleID":"R4", "featureID": "F4", "featureID": "F5"}]
,
  "users" : [
          {"username":"xx@xx.com", "password":"xxx", "fullname":"Joe Bloggs","email":"xx@xx.com","phone":"111","dob":"1970-01-01","occupation":"Teacher","bank":"aaaa","currency":"USD","role":"investor","loggedin":false},
          {"username":"zz@zz.com", "password":"zzz", "fullname":"Fred Flop","email":"zz@zz.com","phone":"222","dob":"1970-02-02","occupation":"Student","bank":"bbbb","currency":"GBP","role":"investor","loggedin":false},
          {"username":"yy@yy.com", "password":"yyy", "fullname":"Lucy Canon","email":"yy@yy.com","phone":"333","dob":"1970-03-03","occupation":"Student","bank":"cccc","currency":"USD","role":"investor","loggedin":false},
          {"username":"aa@aa.com", "password":"aaa", "fullname":"Handy Mann","email":"aa@aa.com","phone":"444","dob":"1960-04-04","occupation":"Teacher","bank":"dddd","currency":"USD","role":"investor","loggedin":false},
          {"username":"bb@bb.com", "password":"bbb", "fullname":"Sue Ben","email":"bb@bb.com","phone":"555","dob":"1960-05-05","occupation":"Programmer","bank":"eeee","currency":"GBP","role":"investor","loggedin":false}
      ]    
,

  "userroles":[
      {"username":"xx@xx.com", "roleID":"R4"}
      ,{"username":"yy@yy.com", "roleID":"R4"}  
      ],

"activeUser": null
};





database=loadFromLocalStorage('DATABASE') ? loadFromLocalStorage('DATABASE'):originaldatabase





function loadFromLocalStorage(key) {
	const jsonString = localStorage.getItem(key.toUpperCase());
	return JSON.parse(jsonString);
}