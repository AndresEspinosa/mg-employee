using System;
using FluentValidation;
using Masglobal.Employee.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Masglobal.Employee.Test
{
    public abstract class EmployeeBaseTest
    {
        /// <summary>
        /// Provider to resolve service objects.
        /// </summary>
        protected IServiceProvider _serviceProvider;

        /// <summary>
        /// Initializes a new instance of the class.
        /// </summary>
        protected EmployeeBaseTest()
        {
            var services = new ServiceCollection();
            var config = new DummyIConfiguration();

            services.AddSingleton<IConfiguration>(config);
            InitializeServiceProvier(services);
        }

        /// <summary>
        /// Initializes the service provider.
        /// </summary>
        /// <param name="services">List where we add the services to.</param>
        private void InitializeServiceProvier(ServiceCollection services)
        {
            _serviceProvider = services.BuildServiceProvider();
            AddServices(services);
            _serviceProvider = services.BuildServiceProvider();
        }

        /// <summary>
        /// Adds services to the current service provider.
        /// </summary>
        /// <param name="services">List where we add the services to.</param>
        protected void AddServices(IServiceCollection services)
        {
            var config = GetService<IConfiguration>();
            config["ServiceType"] = "ServiceMock";
            services.AddService(config);
        }

        /// <summary>
        /// Gets a service of type TService from the IServiceProvider.
        /// </summary>
        /// <returns>A service object of type TService.</returns>
        protected TService GetService<TService>() =>
            _serviceProvider.GetRequiredService<TService>();

        /// <summary>
        /// Gets the IValidator that validates the passed-in payload object.
        /// </summary>
        /// <param name="payload">The payload object to get its IValidator.</param>
        /// <returns>IValidator that validates the passed-in payload object.</returns>
        protected IValidator<TPayload> GetValidator<TPayload>(TPayload payload) =>
            _serviceProvider.GetRequiredService<IValidator<TPayload>>();
    }
}
