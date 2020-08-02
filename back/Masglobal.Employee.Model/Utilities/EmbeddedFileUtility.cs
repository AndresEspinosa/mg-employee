using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Masglobal.Employee.Model
{
    public static class EmbeddedFileUtility
    {
        public static string ReadFile(string name, Assembly assembly = null)
        {
            try
            {
                if (assembly == null)
                    assembly = Assembly.GetCallingAssembly();

                var namespce = assembly.FullName.Split(',')[0];
                var fullPath = $"{namespce}.{name}";

                using (var stream = assembly.GetManifestResourceStream(fullPath))
                {
                    using (var reader = new StreamReader(stream))
                    {
                        var content = reader.ReadToEnd();
                        return content;
                    }
                }
            }
            catch
            {
                throw;
            }
        }

        public static Type ReadJson<Type>(string name, bool serializeAll = true)
        {
            var content = ReadFile(name, Assembly.GetCallingAssembly());
            try
            {
                if (serializeAll)
                {
                    var settings = new JsonSerializerSettings
                    {
                        ContractResolver = new SerializeAllContractResolver()
                    };
                    var obj = JsonConvert.DeserializeObject<Type>(content, settings);
                    return obj;
                }
                else
                {
                    var obj = JsonConvert.DeserializeObject<Type>(content);
                    return obj;
                }
            }
            catch
            {
                throw;
            }
        }
    }

    public class SerializeAllContractResolver : DefaultContractResolver
    {
        /// <summary>
        /// Creates properties for the given Newtonsoft.Json.Serialization.JsonContract.
        /// </summary>
        /// <param name="type">The type to create properties for.</param>
        /// <param name="memberSerialization">The member serialization mode for the type.
        /// </param>
        /// <returns>Properties for the given Newtonsoft.Json.Serialization.JsonContract.
        /// </returns>
        protected override IList<JsonProperty> CreateProperties(
            Type type, MemberSerialization memberSerialization)
        {
            var props = base.CreateProperties(type, memberSerialization);

            foreach (var prop in props)
                prop.Ignored = false;

            return props;
        }
    }
}
