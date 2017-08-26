namespace WebCoreApp.ApiHelper.Client
{
    using ApiResponse;
    using Newtonsoft.Json;
    using System.Net.Http;
    using System.Threading.Tasks;



    public static class ClientBase
    {

        public static async Task<TResponse> CreateJsonResponse<TResponse>(HttpResponseMessage response) where TResponse : ApiResponse, new()
        {
            var clientResponse = new TResponse
            {
                StatusIsSuccessful = response.IsSuccessStatusCode,
                ErrorState = response.IsSuccessStatusCode ? null : await DecodeContent<ErrorStateResponse>(response),
                ResponseCode = response.StatusCode
            };
            if (response.Content != null)
            {
                clientResponse.ResponseResult = await response.Content.ReadAsStringAsync();
            }

            return clientResponse;
        }

        public static async Task<TContentResponse> DecodeContent<TContentResponse>(HttpResponseMessage response)
        {
            var result = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<TContentResponse>(result);
        }


    }
}