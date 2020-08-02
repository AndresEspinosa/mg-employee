using System.ComponentModel;

namespace Masglobal.Employee.Model
{
    public enum EmployeeContractType
    {
        [Description("HourlySalaryEmployee")]
        Hourly = 1,

        [Description("MonthlySalaryEmployee")]
        Monthly = 2
    }
}
