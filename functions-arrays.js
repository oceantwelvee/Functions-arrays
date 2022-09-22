// Functions arrays

const companies = [
    {name: "Company One", category: "Retail", start: "2000", end: "2013"},
    {name: "Company Two", category: "Finance", start: "1980", end: "2005"},
    {name: "Company Three", category: "Auto", start: "2010", end: "2022"},
    {name: "Company Four", category: "Retail", start: "1982", end: "2022"},
    {name: "Company Fifth", category: "Finance", start: "2016", end: "2019"},
    {name: "Company Sixth", category: "Auto", start: "2012", end: "2015"},  
];

const ages = [33,12,43,13,45,21,46,52,78,11,44,23,22,44];

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach - Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
// companies.forEach(function(company) {
//     console.log(company);
// })


// filter - Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции
//  Get 21 and older

// by for method;
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// by filter method;
    // const canDrink = ages.filter(function(age){
    //     if(age >= 21) {
    //         return true;
    //     }
    // })
    
    const canDrink = ages.filter(age => age >= 21);

//  Filter Retail companies;
    // 1st STEP
    // Вывести на консоль компании с Ритейлом;

    // const retailsCompanies = companies.filter(function(company) {
    //     if(company.category === "Retail") {
    //         return true;
    //     }
    // })

    // ------------------------------------------------------------->
    // Один метод без if;

    // const retailsCompanies = companies.filter(company => company.category === "Retail");

    // console.log(retailsCompanies);

    // Вывести на консоль компании только компании 1980х годов

    const eighteesCompanies = companies.filter(company => company.start <= '1980' || company.start < '1986');
    // console.log(eighteesCompanies);

    // Вывести на консоль компании которые существовали не менее 10 лет;

    const lastedTenYears = companies.filter(company => (company.end - company.start < 10));
    // console.log(lastedTenYears);

// map - map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
// Создадим массив имен для компаний;

    const companyNames = companies.map(function(company) {
        return company.name;
    })

    const testMap = companies.map(function(company) {
        return `${company.name} [${company.start} - ${company.end}]`
    })
    // console.log(testMap);

    // const agesSquare = ages.map(age => Math.sqrt(age));
    // console.log(agesSquare);

    const agesMap = ages.map(age => age * 2);
    // console.log(agesMap);

// sort
// Сортирируем компанию по году; 
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

const sortedCompanies = companies.sort((a,b) => (a.start > b.start)? 1 : -1);

// console.log("boom",sortedCompanies);

// Sorted Ages;

const sortedAges = ages.sort((a,b) => (a > b) ? 1 : -1);
// console.log(sortedAges)


// reducer

// let ageSum = 0;

// for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// Второй вариант с reduce;

// const ageSum = ages.reduce(function(total,age) {
//     return total + age;
// }, 0);

// Стрелочная функция;

const ageSum = ages.reduce((total,age) => total + age, 0);
// console.log(ageSum);

// Общая количество лет всех компаний;

// const totalCompany = companies.reduce(function (total, company) {
//     return total + (company.end - company.start);
// }, 0);


// Функция по короче
const totalCompany = companies.reduce((total,company) => total + (company.end - company.start), 0);

// console.log(totalCompany);

// Combine Methods;

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a,b) => a + b, 0)

console.log(combined);

// Concat;

const employees = ['John', "Alex"];
const secondEmployees = ["Mike", "William"];
const today = employees.concat(secondEmployees);
console.log(today);
