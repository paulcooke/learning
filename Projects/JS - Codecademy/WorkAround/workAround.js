/* As in the other project for some reason i get a local error saying it cant find the path to import from, it works in codecademys environment.*/

import {getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility} from './employee';

import Employee from './employee';

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
