import { Link, Outlet } from 'react-router-dom';
import HRNavbar from '../../Shared/HRNavbar/HRNavbar'


const Hrdashboard = () => {
    
    return (
        <div>
            <HRNavbar></HRNavbar>

            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-52 text-base-content gray">
                        
                        <li><Link  to="">Dashboard</Link></li>
                        <li><Link  to="employeeorg">Employees Organize</Link></li>
                        <li><Link  to="performance">Performance</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Hrdashboard;