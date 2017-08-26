namespace CoreMVCAngular.Models
{
    /// <summary>
    /// Model class for LogIn
    /// </summary>
    public class LogInModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}
