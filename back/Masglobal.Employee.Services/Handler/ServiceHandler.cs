using Masglobal.Employee.Model;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Masglobal.Employee.Services
{
    public static class ServiceHandler
    {
        public static void AddService(
            this IServiceCollection services,
            IConfiguration config)
        {
            services.AddSingleton(AutomapperHandler.CreateConfiguration().CreateMapper());
            services.AddValidators();
            services.AddEmployee(config);
        }
    }
}
