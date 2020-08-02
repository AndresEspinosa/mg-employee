using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Masglobal.Employee.Model;
using EmployeeEntity = Masglobal.Employee.Model.Entities.Employee;

namespace Masglobal.Employee.Services
{
    public class EmployeeServiceMock : EmployeeServiceBase
    {
        private readonly IList<EmployeeEntity> _entities = null;

        public EmployeeServiceMock(IMapper mapper)
            : base(mapper) =>
            _entities = EmbeddedFileUtility.ReadJson<List<EmployeeEntity>>(
                "Assets.Mock.Employee.json"
            );

        protected override Task<IList<EmployeeEntity>> GetEmployeesAsync() =>
            Task.FromResult(_entities);

        protected override Task<EmployeeEntity> GetSingleEmployeesAsync(int id) =>
            Task.FromResult(_entities.FirstOrDefault(p => p.Id == id));
    }
}
