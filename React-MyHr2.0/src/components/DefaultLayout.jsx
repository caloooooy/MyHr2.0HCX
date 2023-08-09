import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout () {
   const {user, token} = useStateContext() 
//    debugger;
   if (!token) {
    return <Navigate to="/login"/>
   }

   const onLogout = (ev) => {
        ev.preventDefault()
   }
    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/myprofile">My Profile</Link>
                <Link to="/selfservice">Self Service</Link>
                <Link to="/myteam">My Team</Link>
                <Link to="/mycompany">My Company</Link>
                <Link to="/maintenance">Maintenance</Link>
                <Link to="/leaveconfiguration">Leave Configuration</Link>
                <Link to="/report">Report</Link>
                <Link to="/payrollreport">Payroll Report</Link>
            </aside>
           <div className="content">
            <header>
                <div>
                    Header
                </div>
                <div>
                    {user.name}
                    <a href="#" className="btn-logout" onClick={onLogout}>Logout</a>
                </div>
            </header>
           </div>
           <main>
           <Outlet />
           </main>
        </div>
      
    )
}