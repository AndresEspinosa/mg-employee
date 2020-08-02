using System.Collections.Generic;
using System.Threading.Tasks;
using Masglobal.Employee.Model;

namespace Masglobal.Employee.Services
{
    public interface IEmployeeService
    {
        Task<ApiResponse<IList<EmployeeDto>, GetEmployeeStatus>> GetEmployeesWithAnnualSalaryAsync();
        Task<ApiResponse<EmployeeDto, GetSingleEmployeeStatus>> GetSingleEmployeeWithAnnualSalaryAsync(GetSingleEmployeePayload payload);
    }
}
