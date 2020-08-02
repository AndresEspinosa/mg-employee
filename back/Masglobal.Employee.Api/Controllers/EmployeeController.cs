using System.Collections.Generic;
using System.Threading.Tasks;
using Masglobal.Employee.Model;
using Masglobal.Employee.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Masglobal.Employee.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly ILogger<EmployeeController> _logger;
        private readonly IEmployeeService _meetingSvc;

        public EmployeeController(ILogger<EmployeeController> logger,
            IEmployeeService meetinSvc)
        {
            _logger = logger;
            _meetingSvc = meetinSvc;
        }

        /// <summary>
        /// Get the Employees' information with Annual Salary
        /// </summary>
        /// <returns>List of employees</returns>
        [HttpGet]
        [Route("GetAll")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<ApiResponse<IList<EmployeeDto>, GetEmployeeStatus>>> GetAll()
            => Ok(await _meetingSvc.GetEmployeesWithAnnualSalaryAsync());

        /// <summary>
        /// Get the Employee's information with Annual Salary by ID
        /// </summary>
        /// <returns>List of employees</returns>
        [HttpGet]
        [Route("GetSingle")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<ApiResponse<EmployeeDto, GetSingleEmployeeStatus>>> GetSingle([FromQuery] GetSingleEmployeePayload payload)
            => Ok(await _meetingSvc.GetSingleEmployeeWithAnnualSalaryAsync(payload));
    }
}
