using System;
using System.ComponentModel;

namespace Masglobal.Employee.Model
{
    public static class EnumUtility
    {
        public static TEnum GetValue<TEnum>(string description, TEnum defaultVal = default)
            where TEnum : struct, IConvertible
        {
            var type = typeof(TEnum);

            if (!type.IsEnum)
                throw new InvalidOperationException($"'{type}' is not an enum");

            foreach (var field in type.GetFields())
            {
                if (Attribute.GetCustomAttribute(
                    field, typeof(DescriptionAttribute)
                ) is DescriptionAttribute attribute)
                {
                    if (attribute.Description == description)
                        return (TEnum)field.GetValue(null);
                }

                if (field.Name == description)
                    return (TEnum)field.GetValue(null);
            }

            return defaultVal;
        }
    }
}
