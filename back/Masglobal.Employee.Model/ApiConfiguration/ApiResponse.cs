using System;
namespace Masglobal.Employee.Model
{
    public class ApiResponse<TData, TStatusCode> where TData : class where TStatusCode : struct, IConvertible
	{
		public TData Data { get; set; }
		public bool Success { get; set; }
		public string Message { get; set; }
		public ApiMessageType? MessageType { get; set; }
		public TStatusCode StatusCode { get; set; }

		/// <summary>
		/// Returns a JSON string that represents the current object.
		/// </summary>
		/// <returns>JSON string that represents the current object.</returns>
		public override string ToString()
        {
			return "";
        }
	}
}
