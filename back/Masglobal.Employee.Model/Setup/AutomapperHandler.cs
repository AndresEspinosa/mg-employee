using System;
using AutoMapper;
using EmployeeEntity = Masglobal.Employee.Model.Entities.Employee;

namespace Masglobal.Employee.Model
{
    public static class AutomapperHandler
    {
        public static MapperConfiguration CreateConfiguration() =>
            new MapperConfiguration(config =>
            {
                config.MapEntitiesToDtos();
            });

        private static void MapEntitiesToDtos(this IMapperConfigurationExpression config)
        {
            config.CreateMap<EmployeeEntity, EmployeeDto>()
                .ForMember(des => des.AnnualSalary, opt => opt.MapFrom(CalculateSalary));
        }

        private static double CalculateSalary(EmployeeEntity src, EmployeeDto des) =>
            (EnumUtility.GetValue<EmployeeContractType>(src.ContractTypeName)) switch
            {
                EmployeeContractType.Hourly => (120 * src.HourlySalary * 12),
                _ => (src.MonthlySalary * 12),
            };
    }
}
