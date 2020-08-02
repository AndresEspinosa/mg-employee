using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using AutoMapper;
using Newtonsoft.Json;
using EmployeeEntity = Masglobal.Employee.Model.Entities.Employee;

namespace Masglobal.Employee.Services
{
    public class EmployeeServiceHttp : EmployeeServiceBase
    {
        public EmployeeServiceHttp(IMapper mapper)
            : base(mapper) { }

        protected override async Task<IList<EmployeeEntity>> GetEmployeesAsync()
        {
            var url = new Uri("http://masglobaltestapi.azurewebsites.net/api/Employees");
            using var client = new HttpClient();
            var result = await client.GetAsync(url);
            string response = await result.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<IList<EmployeeEntity>>(response);
        }

        protected override async Task<EmployeeEntity> GetSingleEmployeesAsync(int id)
        {
            var employees = await GetEmployeesAsync();
            return employees.FirstOrDefault(p => p.Id == id);
        }
    }
}
