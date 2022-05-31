const company = {
    name: "Decagon",
    employees : [
        {
            id: 1,
            name: "Tony Stark",
            role: "manager"
        },
        {
            id: 2,
            name: "Ant Man",
            role: "staff",
            
        }
    ],
    departments: [
        {
            name: "engineering",
            noOfEmployees: 2,
            employeeID: [1,2],
            manager: 1
        }    
    ]
}

function findEmployee(id: number) {
  return company.employees.find( employee => employee.id === Number(id));
}

export function displayCompay (){
    return company
}

export function getEmployee (id: number, name: string){
    return company.departments.map( department => {
        if (department.name === name){
            const index = department.employeeID.indexOf(Number(id))
            if(index !== -1) return findEmployee(id)
        }
        return {}
    })[0]
}

export function getManager(name: string){  
    return company.departments.map((department) => {
      if (department.name === name && department.manager) {
          return company.employees.find(person => person.role === "manager")
      }
      return {};
    })[0];
}

export function getDepartment(name: string) {
    return company.departments.find( comp => comp.name === name )
}

export function addEmployee(employee_id: number, name: string, role: string, department: string) {

    if (company.employees.length !== Number(employee_id)) return undefined;
    const id = Number(employee_id) + 1;
    const employee = { id, name, role };
    company.employees.push(employee)
    addEmployeeToDepartment(id, department)
    return employee
}

function addEmployeeToDepartment(id: number, department: string) {
    const dept = company.departments.find( dept => dept.name === department )
    if(dept){
        dept.noOfEmployees++
        dept.employeeID.push(Number(id))
        return
    }
}

export function addManager() {}
export function addDepartment() {}
