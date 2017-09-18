using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace DAL.interfaces
{
    /// <summary>
    /// Module Menu Interface
    /// </summary>
    public interface IModuleMenu
    {
        /// <summary>
        /// This method provides the module hierarchy as parent and child
        /// </summary>
        /// <returns></returns>
        IEnumerable GetModuleHierarchy();
        
    }
}
