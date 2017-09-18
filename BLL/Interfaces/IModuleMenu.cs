using System.Collections;

namespace BLL.Interfaces
{
    /// <summary>
    /// Contains module menu related specific methods
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IModuleMenu
    {
        /// <summary>
        /// This method provides the module hierarchy as parent and child
        /// </summary>
        /// <returns></returns>
        IEnumerable GetModuleHierarchy();
    }
}
