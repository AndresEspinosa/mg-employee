using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Masglobal.Employee.Model;
using EmployeeEntity = Masglobal.Employee.Model.Entities.Employee;

namespace Masglobal.Employee.Services
{
    public abstract class EmployeeServiceBase : IEmployeeService
    {
        private readonly IMapper _mapper;

        public EmployeeServiceBase(IMapper mapper)
        {
            _mapper = mapper;
        }

        protected abstract Task<IList<EmployeeEntity>> GetEmployeesAsync();
        protected abstract Task<EmployeeEntity> GetSingleEmployeesAsync(int id);

        public async Task<ApiResponse<IList<EmployeeDto>, GetEmployeeStatus>> GetEmployeesWithAnnualSalaryAsync()
        {
            ApiResponse<IList<EmployeeDto>, GetEmployeeStatus> response;

            var employees = await GetEmployeesAsync();

            if (employees == null)
                response = new ApiResponse<IList<EmployeeDto>, GetEmployeeStatus>
                {
                    Message = "",
                    MessageType = ApiMessageType.Error,
                    StatusCode = GetEmployeeStatus.BadRequest
                };
            else
                response = new ApiResponse<IList<EmployeeDto>, GetEmployeeStatus>
                {
                    Data = _mapper.Map<List<EmployeeDto>>(employees),
                    Message = "Success",
                    MessageType = ApiMessageType.Success,
                    StatusCode = GetEmployeeStatus.Ok,
                    Success = true
                };

            return response;
        }

        public async Task<ApiResponse<EmployeeDto, GetSingleEmployeeStatus>> GetSingleEmployeeWithAnnualSalaryAsync(GetSingleEmployeePayload payload)
        {
            ApiResponse<EmployeeDto, GetSingleEmployeeStatus> response;
            if (payload == null)
            {
                response = new ApiResponse<EmployeeDto, GetSingleEmployeeStatus>
                {
                    Message = "Payload is null",
                    MessageType = ApiMessageType.Error,
                    StatusCode = GetSingleEmployeeStatus.BadRequest
                };
            }
            else
            {
                var entity = await GetSingleEmployeesAsync(payload.EmployeeId);

                if (entity == null)
                    response = new ApiResponse<EmployeeDto, GetSingleEmployeeStatus>
                    {
                        Message = "Not found item",
                        MessageType = ApiMessageType.Error,
                        StatusCode = GetSingleEmployeeStatus.EmployeeIdNotFound
                    };
                else
                    response = new ApiResponse<EmployeeDto, GetSingleEmployeeStatus>
                    {
                        Data = _mapper.Map<EmployeeDto>(entity),
                        Message = "Success",
                        MessageType = ApiMessageType.Success,
                        StatusCode = GetSingleEmployeeStatus.Ok,
                        Success = true
                    };
            }

            return response;
        }
    }
}
