(function() {
    function HomeCtrl() {

      // Array of patient objects
      this.patients = [
      	{
      		"name": "John Doe",
      		"prov": "A",
      		"idnum": "123",
      		"mr": "xyz",
      		"insurance": "BCBS",
      		"address": "10300 Metric Blvd Ste 300",
      		"city": "Austin",
      		"st": "TX",
      		"phone": "(123)456-7890",
      		"dob": "1991-09-14",
      		"admit": "1992-09-14",
      		"dc": "1993-09-14"
      	},
      	{
      		"name": "Jane Doe",
      		"prov": "A",
      		"idnum": "456",
      		"mr": "xyz",
      		"insurance": "ABC",
      		"address": "123 Some Fake St",
      		"city": "Happy",
      		"st": "TX",
      		"phone": "(234)567-8901",
      		"dob": "1991-09-16",
      		"admit": "1992-09-16",
      		"dc": "1993-09-16"
      	},
      	{
      		"name": "All Might",
      		"prov": "B",
      		"idnum": "789",
      		"mr": "xyz",
      		"insurance": "ABC",
      		"address": "6325 Happy Go Lucky Blvd",
      		"city": "Kilgore",
      		"st": "TN",
      		"phone": "(345)678-9012",
      		"dob": "1991-09-18",
      		"admit": "1992-09-18",
      		"dc": "1993-09-18"
      	},
      	{
      		"name": "Oscar Dog",
      		"prov": "C",
      		"idnum": "012",
      		"mr": "xyz",
      		"insurance": "MDCP",
      		"address": "1 Blah Blah Blah Rd",
      		"city": "Happy",
      		"st": "TX",
      		"phone": "(456)789-0123",
      		"dob": "1991-09-20",
      		"admit": "1992-09-20",
      		"dc": "1993-09-20"
      	},
      	{
      		"name": "Happy Gilmore",
      		"prov": "D",
      		"idnum": "345",
      		"mr": "xyz",
      		"insurance": "MED",
      		"address": "1 Infinite Loop",
      		"city": "Cupertino",
      		"st": "CA",
      		"phone": "(567)890-1234",
      		"dob": "1991-09-22",
      		"admit": "1992-09-22",
      		"dc": "1993-09-22"
      	}
      ];

    }

    angular
      .module('goodLooking')
      .controller('HomeCtrl', [HomeCtrl]);
})();
