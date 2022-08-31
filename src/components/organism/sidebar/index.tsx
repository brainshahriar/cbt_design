import SidebarLogo from '../../../assets/images/logos/sidebar.png'
import Overview from '../../../assets/images/logos/overview.png'
import Analytics from '../../../assets/images/logos/analytics.png'
import Messages from '../../../assets/images/logos/messages.png'
import Calender from '../../../assets/images/logos/calender.png'
import Settings from '../../../assets/images/logos/settings.png'
import Logout from '../../../assets/images/logos/logout.png'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__menu'>
            <div className='sidebar__menu__logo'>
                <img src={SidebarLogo} alt="" />
                <img className='sidebar__menu__logo--overview' src={Overview} alt="" />
                <img  src={Analytics} alt="" />
                <img  src={Messages} alt="" />
                <img  src={Calender} alt="" />
                <img  src={Settings} alt="" />
                <img className='sidebar__menu__logo--logout' src={Logout} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Sidebar;