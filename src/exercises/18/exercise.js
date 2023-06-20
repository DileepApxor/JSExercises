// Use Javascript modules to create seperate files for each of the Leave type classes.
// - Comment your understanding about import
// - Comment your understanding about export


import {sickLeave} from '..17/exercise.js';
import {maternityLeave} from '../17/exercise.js';
import {vacLeave} from '../17/exercise.js';


const person1 = new sickLeave("Surya","29th july 2023","31st july 2023", "Fever");
const person2 = new vacLeave("Venky","29th May 2023","31st may 2023", "Ooty");
const person3 = new maternityLeave("Anu","29th Aug 2023","31st Aug 2023");

person1.leaveforSick();
person2.leaveforVac();
person2.rejectLeave();
person3.leaveforMaternity();
person3.approveLeave();

// by using import we can extract all the function and modules from the exported modules
// export is used to export all the modules and functions to the other files, we can able to access all the contents by importing the exported function
// we are making available to all the files which imports the exported class/modules/functions