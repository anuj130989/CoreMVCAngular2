using System;
using Microsoft.AspNetCore.Mvc.Filters;


namespace CoreMVCAngular.Filters
{
    public class AuthenticationFilter : IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {
            throw new NotImplementedException();
        }

        public void OnActionExecuting(ActionExecutingContext actionContext) {

        }
    }
}
