// Doc 1 (je ractonte un truc sur main)

print("Inserting data into collection1...");

db.employees.insertMany([ {empId: 1, name: 'Clark', dept: 'Sales' },
 {empId: 2, name: 'Dave', dept: 'Accounting' },
 {empId: 3, name: 'Ava', dept: 'Sales' },
 {empId: 4, name: 'Ava', dept: 'Transport' }, 
 {empId: 5, name: 'Mia', dept: 'HR' }, 
 {empId: 6, name: 'Noah', dept: 'IT' }, 
 {empId: 7, name: 'Zoe', dept: 'Marketing' }, 
 {empId: 8, name: 'Liam', dept: 'IT' }, 
 {empId: 9, name: 'Eva', dept: 'Sales' }, 
 {empId: 10, name: 'Lucas', dept: 'Accounting' }, 
 {empId: 11, name: 'Nina', dept: 'HR' }, 
 {empId: 12, name: 'Owen', dept: 'Transport' }, 
 {empId: 13, name: 'Mason', dept: 'Sales' }, 
 {empId: 14, name: 'Ella', dept: 'Marketing' }, 
 {empId: 15, name: 'Kai', dept: 'IT' } ]);

// Doc 2


print("Inserting data into collection2...");

db.vehicule.insertMany([
  { empId: 2, car: 'Toyota' },
  { empId: 3, car: 'Renault' },
  { empId: 4, car: 'Volkswagen' },
  { empId: 5, car: 'Citroën' },
  { empId: 6, car: 'Fiat' }
]);




// Find employees in a department

print("Find employees in a department");
db.employees.find({dept: 'Transport'});




print("Find employees in a range of numbers");
db.employees.find({
  empId: { $gte: 5, $lte: 10 }
})

// Example with $inc - Increment a numeric field
print(" ")
print("Adding a salary field and incrementing it");
// First, let's add a salary field to some employees
db.employees.updateMany(
  {}, 
  {$set: {salary: 1000}}
);

print(" ")
print("Current employees with salary:");
db.employees.find({salary:10});

// Now use $inc to give all marketing employees a 5000 raise
print("Giving marketing employees a 5000 raise using $inc");
db.employees.updateMany(
  {dept: 'Marketing'}, 
  {$inc: {salary: 5000}}
);


print(" ")
print("employees after raise:");
db.employees.find({dept: 'Marketing'});


// add a new field spending with $set
db.employees.updateMany( 
  {dept: {$in: ['Marketing','HR']}},  
 {$set: {spending: 0}}
);

// Now use $inc to give all Commercial employees a 5000 budget
print(" ")
print("Giving Commercial employees a 2000 raise using $inc");
db.employees.updateMany(
  {dept: 'Marketing'}, 
  {$inc: {spending: 2000}}
);

// Now use $inc to give all HR employees a 400 budget
print(" ")
print("Giving Commercial employees a 2000 raise using $inc");
db.employees.updateMany(
  {dept: 'HR'}, 
  {$inc: {spending: 400}}
);


print(" ")
print("remove spending for HR")


print(" ")
print("reduce salary for HR")
// let's remove the spending for HR
db.employees.updateMany(
  {dept: 'HR'}, 
  {$inc: {salary:-82}}
);



print("")
print("show all");
db.employees.find().pretty()


print("")
print("Employees that HAVE spending field:");
db.employees.find({spending: {$exists: true}}).pretty();


// let's remove the spending for HR
db.employees.updateMany(
  {dept: 'HR'}, 
  {$unset: {spending:0}}
);
