console.log("Question 1");
let employeesText = '{"employees": [' +
'{"firstName":"Sam", "department":"Tech", "designation":"Manager", "salary":40000, "raiseEligible":true},' +
'{"firstName":"Mary", "department":"Finance", "designation":"Trainee", "salary":18500, "raiseEligible":true},' +
'{"firstName":"Bill", "department":"HR", "designation":"Executive", "salary":21200, "raiseEligible":false}'+ 
']}';
// (first name, department, designation, salary, raise eligible)
// Sam, Tech, Manager, 40000, true
// Mary, Finance, Trainee, 18500, true
// Bill, HR, Executive, 21200, false

let obj = JSON.parse(employeesText);
console.log(obj);


console.log("Question 2");
let companyText = '{"companyName":"Tech Stars",' + '"website":"www.techstars.site",'+
'"employees":' + JSON.stringify(obj["employees"]) + '}';

let company = JSON.parse(companyText);
console.log(company);


console.log("Question 3");
let newEmployee = {"firstName":"Anna", "department":"Tech", "designation":"Executive", "salary":25600, "raiseEligible":false};
//Anna, Tech, Executive, 25600, false
obj["employees"].push(newEmployee);

companyText = '{"companyName":"Tech Stars",' + '"website":"www.techstars.site",'+
'"employees":' + JSON.stringify(obj["employees"]) + '}';
company = JSON.parse(companyText);
console.log(company);


console.log("Question 4");
let total = 0;
for (i = 0; i < company["employees"].length; i++){
    total = total + company["employees"][i]["salary"];
}

console.log("Total salary: " + total);


console.log("Question 5");
for (i = 0; i < company["employees"].length; i++){
    if (company["employees"][i]["raiseEligible"] == true){
        company["employees"][i]["salary"] = company["employees"][i]["salary"] * 1.1;
    }
}

console.log(company["employees"]);


console.log("Question 6");
let wfh = ['Anna', 'Sam'];
for (i = 0; i < company["employees"].length; i++){
    if (company["employees"][i]["firstName"] == wfh[0] || company["employees"][i]["firstName"] == wfh[1]){
        company["employees"][i]["wfh"] = true;
    } else {
        company["employees"][i]["wfh"] = false;
    }
}

console.log(company["employees"]);