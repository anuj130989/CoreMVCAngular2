using System.Collections;

namespace BLL.Interfaces
{
    /// <summary>
    /// Business layer generic interface.
    /// It contains all generic methods that may require by each module T.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IGenericBLL<T> where T : class
    {
        /// <summary>
        /// Returns the list of all items of T
        /// </summary>
        /// <returns></returns>
        IEnumerable GetAll();
    }
}
