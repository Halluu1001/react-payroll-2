import axios from 'axios'

const EMPLOYEE_API_BASE_URL="http://localhost:8080/employees";

class EmployeeService{
	getEmployees()
	{
		return axios.get(EMPLOYEE_API_BASE_URL);
	}
	createEmployee(employeeDetail)
	{
		return axios.post(EMPLOYEE_API_BASE_URL, employeeDetail);
	}

	deleteEmployee(employeeId)
	{
		return axios.delete(EMPLOYEE_API_BASE_URL+'/'+ employeeId);
	}

	getEmployeeById(employeeId)
	{
		return axios.get(EMPLOYEE_API_BASE_URL+'/'+ employeeId);
	}
	updateEmployee(employeeId,employee)
	{
		return axios.put(EMPLOYEE_API_BASE_URL+'/'+employeeId,employee);
	}
	
}
export default new EmployeeService();