using System;
using System.ComponentModel;

namespace Masglobal.Employee.Model
{
    public enum ApiServiceType
    {
        [Description("ServiceHttp")]
        ServiceHttp = 1,

        [Description("ServiceMock")]
        ServiceMock = 2
    }
}
