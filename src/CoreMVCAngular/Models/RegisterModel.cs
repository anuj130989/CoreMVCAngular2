    using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreMVCAngular.Models
{
    /// <summary>
    /// This model is used for new user registration
    /// </summary>
    public class RegisterModel
    {
        /// <summary>
        /// UserName field to create new User
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// Password of user
        /// </summary>
        public string Password { get; set; }
        
        /// <summary>
        /// Associated Email address 
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// User Phone number
        /// </summary>
        public string PhoneNumber { get; set; }
    }
}
