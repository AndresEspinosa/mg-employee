using FluentValidation;
using Microsoft.Extensions.DependencyInjection;

namespace Masglobal.Employee.Model
{
    public static class ValidationsHandler
    {
        public static void AddValidators(this IServiceCollection services)
        {
            services.AddSingleton<IValidator<GetSingleEmployeePayload>, GetSingleEmployeeValidator>();
        }
    }
}
