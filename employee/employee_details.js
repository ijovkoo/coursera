const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
    //... Se pueden agregar más registros de empleados aquí
  ];

function displayEmployees(){
    const total=employees.map(employee=>`<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join("")
    document.getElementById("employeesDetails").innerHTML=total;

}
 

function calculateTotalSalaries(){
    const totalsalary= employees.reduce((actual,nuevo)=>actual+nuevo.salary,0);
    document.getElementById("employeesDetails").innerHTML=totalsalary
}

function displayHREmployees(){
    // Corregido: .filter sin la 'r' extra y usando '===' para buscar coincidencia
    const hrmployees = employees.filter(employee => employee.department === 'HR');
    
    // Corregido: Paréntesis en (ahora, indice) y usamos 'ahora' para acceder a los datos
    const hrmployees2 = hrmployees.map((ahora, indice) => `<p>${indice + 1}. ${ahora.id}: ${ahora.name} - ${ahora.department} - ${ahora.salary}</p>`).join('');
    
    document.getElementById("employeesDetails").innerHTML = hrmployees2;
}



function findEmployeeById(employeeId){
    const found=employees.find(ahora=>ahora.id===employeeId);
    if (found){
        document.getElementById("employeesDetails").innerHTML= `<p>${found.id}: ${found.name}: ${found.name} - ${found.department} - ${found.salary}</p>`;   }
    else{document.getElementById("employeesDetails").innerHTML="no se encontro nda con este id"}
}

function especialidad(employeespes) {
    // .find() busca el PRIMER empleado que cumpla la condición y te da el objeto directo
    const especial = employees.find(ahora => ahora.specialization === employeespes);
    
    // Si encontró al empleado...
    if (especial) {
        document.getElementById("employeesDetails").innerHTML = 
            `<p>${especial.id}: ${especial.name} - ${especial.department} - ${especial.specialization}</p>`;
    } else {
        // Si no lo encuentra, ponemos el texto de error como corresponde
        document.getElementById("employeesDetails").innerHTML = `<p>No se encontró ningún empleado con esa especialidad.</p>`;
    }
}