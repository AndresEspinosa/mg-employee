using System.Threading.Tasks;
using Masglobal.Employee.Model;
using Masglobal.Employee.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Masglobal.Employee.Test
{
    [TestClass]
    public class EmployeeServiceTest : EmployeeBaseTest
    {
        [TestMethod]
        public async Task GetEmployeeWithAnnualSalary_Valid()
        {
            var employeeSvc = GetService<IEmployeeService>();
            var response = await employeeSvc.GetEmployeesWithAnnualSalaryAsync();

            Assert.AreEqual(2, response.Data.Count);
            Assert.AreEqual(true, response.Success);
            Assert.AreNotEqual(null, response.Message);
            Assert.AreEqual(ApiMessageType.Success, response.MessageType);
            Assert.AreEqual(GetEmployeeStatus.Ok, response.StatusCode);
        }

        [TestMethod]
        public async Task GetSingleEmployeeWithAnnualSalary_Invalid_NullPayload()
        {
            var employeeSvc = GetService<IEmployeeService>();
            var payload = (GetSingleEmployeePayload)null;
            var response = await employeeSvc.GetSingleEmployeeWithAnnualSalaryAsync(payload);

            Assert.AreEqual(null, response.Data);
            Assert.AreEqual(false, response.Success);
            Assert.AreNotEqual(null, response.Message);
            Assert.AreEqual(ApiMessageType.Error, response.MessageType);
            Assert.AreEqual(GetSingleEmployeeStatus.BadRequest, response.StatusCode);
        }

        [TestMethod]
        public async Task GetSingleEmployeeWithAnnualSalary_Invalid_EmployeeIdDoesntExists()
        {
            var employeeSvc = GetService<IEmployeeService>();
            var payload = new GetSingleEmployeePayload { EmployeeId = 0 } ;
            var response = await employeeSvc.GetSingleEmployeeWithAnnualSalaryAsync(payload);

            Assert.AreEqual(null, response.Data);
            Assert.AreEqual(false, response.Success);
            Assert.AreNotEqual(null, response.Message);
            Assert.AreEqual(ApiMessageType.Error, response.MessageType);
            Assert.AreEqual(GetSingleEmployeeStatus.EmployeeIdNotFound, response.StatusCode);
        }

        [TestMethod]
        public async Task GetSingleEmployeeWithAnnualSalary_Valid_HourlySalaryEmployee()
        {
            var employeeSvc = GetService<IEmployeeService>();
            var payload = new GetSingleEmployeePayload { EmployeeId = 1 };
            var response = await employeeSvc.GetSingleEmployeeWithAnnualSalaryAsync(payload);
            var expected = new EmployeeDto
            {
                Id = 1,
                Name = "Juan",
                ContractTypeName = "HourlySalaryEmployee",
                RoleId = 1,
                RoleName = "Administrator",
                RoleDescription = null,
                AnnualSalary = 86400000
            };

            Assert.AreEqual(expected.Id, response.Data.Id);
            Assert.AreEqual(expected.Name, response.Data.Name);
            Assert.AreEqual(expected.ContractTypeName, response.Data.ContractTypeName);
            Assert.AreEqual(expected.RoleId, response.Data.RoleId);
            Assert.AreEqual(expected.RoleName, response.Data.RoleName);
            Assert.AreEqual(expected.RoleDescription, response.Data.RoleDescription);
            Assert.AreEqual(expected.AnnualSalary, response.Data.AnnualSalary);
            Assert.AreEqual(true, response.Success);
            Assert.AreNotEqual(null, response.Message);
            Assert.AreEqual(ApiMessageType.Success, response.MessageType);
            Assert.AreEqual(GetSingleEmployeeStatus.Ok, response.StatusCode);
        }

        [TestMethod]
        public async Task GetSingleEmployeeWithAnnualSalary_Valid_MonthlySalaryEmployee()
        {
            var employeeSvc = GetService<IEmployeeService>();
            var payload = new GetSingleEmployeePayload { EmployeeId = 2 };
            var response = await employeeSvc.GetSingleEmployeeWithAnnualSalaryAsync(payload);
            var expected = new EmployeeDto
            {
                Id = 2,
                Name = "Sebastian",
                ContractTypeName = "MonthlySalaryEmployee",
                RoleId = 2,
                RoleName = "Contractor",
                RoleDescription = null,
                AnnualSalary = 960000
            };

            Assert.AreEqual(expected.Id, response.Data.Id);
            Assert.AreEqual(expected.Name, response.Data.Name);
            Assert.AreEqual(expected.ContractTypeName, response.Data.ContractTypeName);
            Assert.AreEqual(expected.RoleId, response.Data.RoleId);
            Assert.AreEqual(expected.RoleName, response.Data.RoleName);
            Assert.AreEqual(expected.RoleDescription, response.Data.RoleDescription);
            Assert.AreEqual(expected.AnnualSalary, response.Data.AnnualSalary);
            Assert.AreEqual(true, response.Success);
            Assert.AreNotEqual(null, response.Message);
            Assert.AreEqual(ApiMessageType.Success, response.MessageType);
            Assert.AreEqual(GetSingleEmployeeStatus.Ok, response.StatusCode);
        }
    }
}
