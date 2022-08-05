import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import HRNavbar from "../../Shared/HRNavbar/HRNavbar";

const Hrdashboard = () => {
    const [request, setRequest] = useState("");

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/user")
            .then((res) => res.json())
            .then((data) => setRequest(data));
    }, []);

    return (
        <div>
            <HRNavbar></HRNavbar>

            <div class="drawer drawer-mobile">
                <input
                    id="dashboard-sidebar"
                    type="checkbox"
                    class="drawer-toggle"
                />
                <div class="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label
                        for="dashboard-sidebar"
                        class="drawer-overlay"
                    ></label>
                    <ul class="menu p-4 overflow-y-auto w-52 text-base-content gray">
                        <li>
                            <Link to="">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="employeeorg">Employees Organize</Link>
                        </li>
                        <li>
                            <Link to="performance">Performance</Link>
                        </li>
                        <li>
                            <Link to="payrolls">Payrolls</Link>
                        </li>
                        <li>
                            <Link to="attendance">Attendance</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Hrdashboard;
