using System;
using System.Diagnostics.CodeAnalysis;
using Masglobal.Employee.Model;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Masglobal.Employee.Services
{
    public static class EmployeeServiceInjector
    {
        [ExcludeFromCodeCoverage]
        public static void AddEmployee(
            this IServiceCollection services,
            IConfiguration config)
        {
            var serviceType = config.GetServiceType();

            switch (serviceType)
            {
                case ApiServiceType.ServiceMock:
                    services.AddTransient<IEmployeeService, EmployeeServiceMock>();
                    break;
                case ApiServiceType.ServiceHttp:
                    services.AddTransient<IEmployeeService, EmployeeServiceHttp>();
                    break;
                default:
                    throw new Exception("Service Type not implemented");
            }
        }
    }
}
