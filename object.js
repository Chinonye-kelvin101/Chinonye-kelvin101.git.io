const container = document.querySelector('.container')
let employeeDetails = [
    {
     firstName: 'chinonye',
     lastName: 'ogbuchukwu',
     department:'wed development',
     salary: '$50000',
     img: 'faith.jpg',
     status: 'Active'

    },
    {
        firstName: 'emma',
        lastName: 'sengee',
        department:'finanace',
        salary: '$20000',
        img: 'gate.jpg',
        status: 'Active'
     
    },
    {
        firstName: 'tayo',
        lastName: 'calla',
        department:'manager',
        salary: '$3000000',
        img: 'gee.jpg',
        status: 'Active' 
    },
    {
        firstName: 'collins',
        lastName: 'john',
        department:'PERSONAL-ASSISTANCE',
        salary: '$400000',
        img: 'fine.jpg',
        status: 'Unactive' 
    },
    {
        firstName: 'daniel',
        lastName: 'ifeayi',
        department:'security',
        salary: '$70000',
        img: 'gee.jpg',
        status: 'Unactive' 
    },
    {
    firstName: 'james',
    lastName: 'faruk',
    department:'iron bender',
    salary: '$2000',
    img: 'fan.jpg',
    status: 'Unactive'
    },
    {
        firstName: 'samuel',
        lastName: 'amaka',
        department:'fan repairer',
        salary: '$10000',
        img: 'time.jpg',
        status: 'active'
    },
    {
        firstName: 'tope',
        lastName: 'salamu',
        department:'conductor',
        salary: '$8000',
        img: 'san.jpg',
        status: 'Unactive'
    },
    {
        firstName: 'dave',
        lastName: 'scott',
        department:'plumber',
        salary: '$12000',
        img: 'life.jpg',
        status: 'Unactive'
    },
    {
        firstName: 'sam',
        lastName: 'mike',
        department:'gate man',
        salary: '$54000',
        img: 'lov.jpg',
        status: 'active'
    },
];

// <img src='${employeeDetails[0].img}'
// <h1>Last name:${employeeDetails[0].firstName}</h1>
// <h1>Last name:${employeeDetails[0].lastName}</h1>
// <h2>Department:${employeeDetails[0].department}</h2>
// <h2>Salary:${employeeDetails[0].salary}</h2>
// <p>status:${employeeDetails[0].status}</p>


employeeDetails.map((employee, index) => {
   let details = `
   <div class='card'>
    <img src='${employee.img}'>
    <h1>First name: ${employee.firstName}</h1>
    <h1>Last name: ${employee.lastName}</h1>
    <h2>Department: ${employee.department}</h2>
    <h2>Salary: ${employee.salary}</h2>
    <p>Status: ${employee.status}</p>
    </div>
   `
   container.innerHTML += details
});
