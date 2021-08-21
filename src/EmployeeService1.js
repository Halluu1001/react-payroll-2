import axios from 'axios'

// const EMPLOYEE_API_BASE_URL="http://localhost:8080/leaves";
// const EMPLOYEE_API_BASE_URL1="http://localhost:8080/leave";
const EMPLOYEE_API_BASE_URL="https://rubix-pay-server.herokuapp.com/leaves";
const EMPLOYEE_API_BASE_URL1="https://rubix-pay-server.herokuapp.com/leave";
class EmployeeService1{
	getLeaves()
	{
		return axios.get(EMPLOYEE_API_BASE_URL);
	}
	createLeaves(leaveDetail)
	{
		return axios.post(EMPLOYEE_API_BASE_URL, leaveDetail);
	}

	deleteLeaves(leaveId)
	{
		return axios.delete(EMPLOYEE_API_BASE_URL+'/'+ leaveId);
	}

	getLeaveById(userId,leave)
	{
		return axios.put(EMPLOYEE_API_BASE_URL+'/'+userId,leave);
	}
	updateLeave(leaveId,leave)
	{
		return axios.put(EMPLOYEE_API_BASE_URL1+'/'+leaveId,leave);
	}
	
}
export default new EmployeeService1();