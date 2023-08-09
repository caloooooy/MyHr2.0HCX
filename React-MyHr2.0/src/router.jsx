import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Dashboard from "./views/Dashboard";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import MyProfile from "./views/MyProfile";
import SelfService from "./views/SelfService";
import MyTeam from "./views/MyTeam";
import MyCompany from "./views/MyCompany";
import Maintenance from "./views/Maintenance";
import LeaveConfiguration from "./views/LeaveConfiguration";
import Report from "./views/Report";
import PayrollReport from "./views/PayrollReport";
import ForgotPassword from "./views/ForgotPassword";
const router = createBrowserRouter([
    
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            // {
            //     path: '/',
            //     element: <Navigate to="/dashboard"/>
                
            // },
            
            {
                path: '/dashboard',
                element: <Dashboard />
            },
              
            {
                path: '/myprofile',
                element: <MyProfile />
            },
              
            {
                path: '/selfservice',
                element: <SelfService />
            },
              
            {
                path: '/myteam',
                element: <MyTeam />
            },
              
            {
                path: '/mycompany',
                element: <MyCompany />
            },
              
            {
                path: '/maintenance',
                element: <Maintenance />
            },
              
            {
                path: '/leaveconfiguration',
                element: <LeaveConfiguration />
            },
              
            {
                path: '/report',
                element: <Report />
            },

            {
                path: '/payrollreport',
                element: <PayrollReport />
            }
        ]
    },
   
    {
        path: '/',
       element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/forgotpassword',
                element: <ForgotPassword />
            },
        ]
    },
  
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;