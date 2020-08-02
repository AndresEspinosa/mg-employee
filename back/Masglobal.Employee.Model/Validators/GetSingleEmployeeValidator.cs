using FluentValidation;

namespace Masglobal.Employee.Model
{
    public class GetSingleEmployeeValidator : AbstractValidator<GetSingleEmployeePayload>
    {
        public GetSingleEmployeeValidator()
        {
            RuleFor(payload => payload.EmployeeId)
                .LessThanOrEqualTo(0);
        }
    }
}
