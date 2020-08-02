using System;
using Microsoft.Extensions.Configuration;

namespace Masglobal.Employee.Model
{
    public static class ApiExtensions
    {
        public static ApiServiceType GetServiceType(this IConfiguration config)
        {
            var key = "ServiceType";
            var value = config[key];
            var type = EnumUtility.GetValue<ApiServiceType>(value);

            if (string.IsNullOrEmpty(value))
                throw new Exception($"Missing '{key}' value");
            if (type == 0)
                throw new Exception($"Invalid '{key}': '{value}'");

            return type;
        }
    }
}
