# The is a service used for: Manage Employee

## Quick Startup

### Building the solution
```shell
cd source
dotnet build Masglobal.Employee.Api.sln
```

### Running unit tests
```shell
cd source
dotnet test Masglobal.Employee.Api.sln
```

### Running the API
```shell
cd source
cd Masglobal.Employee.Api
dotnet run --launch-profile Masglobal.Employee.Api
```

### Environment variables
 - **ServiceType**: Allowed values:
    - `ServiceMock`: Runs the service in mock mode
    - `ServiceHttp`: Runs the service in real mode (With API)