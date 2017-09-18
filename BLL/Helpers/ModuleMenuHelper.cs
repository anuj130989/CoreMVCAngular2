using DAL.DbModels;
using DAL.interfaces;
using DAL.Repository;
using System.Collections;

namespace BLL.Helpers
{
    /// <summary>
    /// Module Menu Helper class
    /// </summary>
    public class ModuleMenuHelper : GenericBLL<ModuleMenu>, Interfaces.IModuleMenu
    {
        private IModuleMenu _moduleMenu;

        /// <summary>
        /// Module Menu helper constructor
        /// </summary>
        /// <param name="uow"></param>
        public ModuleMenuHelper(IUnitOfWork uow) : base(uow)
        {
            _moduleMenu = new ModuleMenuRepository(uow.Db);
        }

        /// <summary>
        /// This method provides the module hierarchy as parent and child
        /// </summary>
        /// <returns></returns>
        public IEnumerable GetModuleHierarchy()
        {
            return _moduleMenu.GetModuleHierarchy();
        }
    }
}
