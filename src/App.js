import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blog from "./Components/AdditionalLinkPages/Blog/Blog";
import AccountManagement from "./Components/AdditionalLinkPages/FAQ/AccountManagement/AccountManagement";
import Faq from "./Components/AdditionalLinkPages/FAQ/Faq";
import RulesAndPolitics from "./Components/AdditionalLinkPages/FAQ/RulesAndPolitics/RulesAndPolitics";
import SafetyAndSecurity from "./Components/AdditionalLinkPages/FAQ/SafetyAndSecurity/SafetyAndSecurity";
import DailyTask from "./Components/Features/Admin/DailyTask/DailyTask";
import TeamOrganize from "./Components/Features/Admin/TeamOrganize/TeamOrganize";
import DirectExpense from "./Components/Features/Finance/AllExpense/DirectExpense";
import AllLedger from "./Components/Features/Finance/AllLedger/AllLedger";
import FinanceDashboard from "./Components/Features/Finance/FinanceDashboard/FinanceDashboard";
import FinanceManagement from "./Components/Features/Finance/FinanceManagement";
import Partners from "./Components/Features/Finance/Partners/Partners";
import HRDashboard from "./Components/Features/HRDashboard/Dashboard/HRDashboard";
import EmployeeManagement from "./Components/Features/HRDashboard/EmployeeManagement/EmployeeManagement";
import HRWarning from "./Components/Features/HRDashboard/EmployeeManagement/HRWarning";
import HrEmployeeDetails from "./Components/Features/HRDashboard/HREmployeeDetails/HrEmployeeDetails";
import HrJoining from "./Components/Features/HRDashboard/HRJoining/HrJoining";
import HrLeaveRequest from "./Components/Features/HRDashboard/HRLeaveRequest/HrLeaveRequest";
import HRManagement from "./Components/Features/HRDashboard/HRManagement";
import HrPayroll from "./Components/Features/HRDashboard/HRPayroll/HrPayroll";
import HrPerformance from "./Components/Features/HRDashboard/HRPerformance/HrPerformance";
import HrVacancy from "./Components/Features/HRDashboard/HRVacancy/HrVacancy";
import HR from "./Components/Features/LiveChat/HR";
import LiveChat from "./Components/Features/LiveChat/LiveChat";
import LiveChatDashboard from "./Components/Features/LiveChat/LiveChatDashboard";
import UserLogin from "./Components/Features/LiveChat/UserLogin";
import CustomerListing from "./Components/Features/MarketingAutomation/CustomerListing/CustomerListing";
import EmailMarketing from "./Components/Features/MarketingAutomation/EmailMarketing/EmailMarketing";
import MarketingAutomation from "./Components/Features/MarketingAutomation/MarketingAutomation";
import Bill from "./Components/Features/SalesManagement/Bill/Bill";
import Customer from "./Components/Features/SalesManagement/Customer/Customer";
import SalesDashboard from "./Components/Features/SalesManagement/Dashboard/SalesDashboard";
import Items from "./Components/Features/SalesManagement/Items/Items";
import PaymentReceive from "./Components/Features/SalesManagement/PaymentReceive/PaymentReceive";
import PurchaseOrder from "./Components/Features/SalesManagement/PurchaseOrder/PurchaseOrder";
import Return from "./Components/Features/SalesManagement/Return/Return";
import SalesManagement from "./Components/Features/SalesManagement/SalesManagement";
import SalesOrder from "./Components/Features/SalesManagement/SalesOrder/SalesOrder";
import SalesTeamMembers from "./Components/Features/SalesManagement/SalesTeamMembers/SalesTeamMembers";
import Vendor from "./Components/Features/SalesManagement/Vendor/Vendor";
import UserDashboard from "./Components/Features/UserDashboard/UserDashboard";
import About from "./Components/Pages/About/About";
import AccessYourApps from "./Components/Pages/AccessYourApps/AccessYourApps";
import RequireAuth from "./Components/Pages/Authentications/RequireAuth/RequireAuth";
import BusinessLogin from "./Components/Pages/BusinessAccount/BusinessLogin/BusinessLogin";
import BusinessSignup from "./Components/Pages/BusinessAccount/BusinessSignup/BusinessSignup";
import Attendance from "./Components/Pages/Hrdashboard/Attendance";
import Dashboard from "./Components/Pages/Hrdashboard/Dashboard";
import Hrdashboard from "./Components/Pages/Hrdashboard/Hrdashboard";
import Hrdetails from "./Components/Pages/Hrdashboard/Hrdetails/Hrdetails";
import Interview from "./Components/Pages/Hrdashboard/Interview/Interview";
import Joining from "./Components/Pages/Hrdashboard/Joining/Joining";
import Payrolls from "./Components/Pages/Hrdashboard/Payrolls";
import Performance from "./Components/Pages/Hrdashboard/Performance";
import Recruitment from "./Components/Pages/Hrdashboard/Recruitment/Recruitment";
import EmployeeDetails from "./Components/Pages/Leave/EmployeeDtails/EmployeeDetails";
import Leave from "./Components/Pages/Leave/Leave";
import LeaveRequest from "./Components/Pages/Leave/LeaveRequest/LeaveRequest";
import CompanySettings from "./Components/Pages/ProfileSettings/CompanySettings/CompanySettings";
import ProfileDashboard from "./Components/Pages/ProfileSettings/ProfileDashboard";
import ProfileSettings from "./Components/Pages/ProfileSettings/ProfileSettings/ProfileSettings";
import UserAttaindance from "./Components/Pages/UserDashboard/UserAttaindance";
import UserDashboardK from "./Components/Pages/UserDashboard/UserDashboard";
import UserPayrolls from "./Components/Pages/UserDashboard/UserPayrolls";
import UserPromotion from "./Components/Pages/UserDashboard/UserPromotion";
import Calender from "./Components/Shared/Calender/Calender";
import Loader from "./Components/Shared/Loader/Loader";
import FormSample from "./FromSample/FormSample";
const AdminDashboardF = lazy(() =>
    import("./Components/Features/Admin/Dashboard/AdminDashboardF")
);
const Home = lazy(() => import("./Components/Pages/Home/Home"));

function App() {
    return (
        <div>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/leave" element={<Leave></Leave>}></Route>
                    <Route
                        path="/form"
                        element={<FormSample></FormSample>}
                    ></Route>
                    <Route
                        path="/employeedetails"
                        element={<EmployeeDetails></EmployeeDetails>}
                    ></Route>
                    <Route path="/hrdashboard" element={<Hrdashboard />}>
                        <Route index element={<Dashboard />}></Route>

                        <Route
                            path="performance"
                            element={<Performance />}
                        ></Route>
                        <Route path="payrolls" element={<Payrolls />}></Route>
                        <Route
                            path="attendance"
                            element={<Attendance />}
                        ></Route>
                        <Route path="hrdetails" element={<Hrdetails />}></Route>
                        <Route path="vacancy" element={<Recruitment />}></Route>
                        <Route path="interview" element={<Interview />}></Route>
                        <Route path="joining" element={<Joining />}></Route>
                    </Route>
                    <Route path="/hrManagement" element={<HRManagement />}>
                        <Route index element={<HRDashboard />}></Route>
                        <Route
                            path="hrLeaveRequest"
                            element={<HrLeaveRequest />}
                        ></Route>
                        <Route
                            path="employeeManagement"
                            element={<EmployeeManagement />}
                        ></Route>
                        <Route path="hrWarning" element={<HRWarning />}></Route>
                        <Route
                            path="hrPerformance"
                            element={<HrPerformance />}
                        ></Route>
                        <Route path="hrPayroll" element={<HrPayroll />}></Route>
                        <Route
                            path="hrEmployeeDetails"
                            element={<HrEmployeeDetails />}
                        ></Route>
                        <Route path="hrVacancy" element={<HrVacancy />}></Route>
                        <Route path="hrJoining" element={<HrJoining />}></Route>
                    </Route>

                    <Route
                        path="/BusinessSignUp"
                        element={<BusinessSignup />}
                    />
                    <Route path="/BusinessLogin" element={<BusinessLogin />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/calender" element={<Calender />} />

                    <Route
                        path="/userdashboard"
                        element={<UserDashboardK></UserDashboardK>}
                    >
                        <Route index element={<LeaveRequest />} />
                        <Route
                            path="attendance"
                            element={<UserAttaindance />}
                        />
                        <Route path="performance" element={<UserPromotion />} />
                        <Route path="Payrolls" element={<UserPayrolls />} />
                        <Route
                            path="Calender"
                            element={<Calender></Calender>}
                        />
                    </Route>

                    <Route
                        path="/liveChat"
                        element={<LiveChat></LiveChat>}
                    ></Route>

                    <Route
                        path="/chat"
                        element={<LiveChatDashboard></LiveChatDashboard>}
                    >
                        <Route index element={<UserLogin></UserLogin>}></Route>
                        <Route path="hrchat" element={<HR />} />
                    </Route>

                    <Route
                        path="/userpayrolls"
                        element={<UserPayrolls></UserPayrolls>}
                    />
                    <Route path="/userdashboard" element={<UserDashboard />} />
                    <Route
                        path="/accessApps"
                        element={
                            <RequireAuth>
                                <AccessYourApps />
                            </RequireAuth>
                        }
                    />
                    <Route path="/salesTS" element={<SalesManagement />}>
                        <Route index element={<SalesDashboard />}></Route>
                        <Route path="items" element={<Items />}></Route>
                        <Route
                            path="salesTeamMembers"
                            element={<SalesTeamMembers />}
                        ></Route>
                        <Route path="customer" element={<Customer />}></Route>
                        <Route
                            path="salesOrder"
                            element={<SalesOrder />}
                        ></Route>
                        <Route
                            path="paymentReceive"
                            element={<PaymentReceive />}
                        ></Route>
                        <Route path="return" element={<Return />}></Route>
                        <Route path="vendor" element={<Vendor />}></Route>
                        <Route
                            path="purchaseOrder"
                            element={<PurchaseOrder />}
                        ></Route>
                        <Route path="bill" element={<Bill />}></Route>
                    </Route>
                    <Route
                        path="/marketingTS"
                        element={<MarketingAutomation />}
                    >
                        <Route index element={<EmailMarketing />}></Route>
                        <Route
                            path="customerListing"
                            element={<CustomerListing />}
                        ></Route>
                    </Route>
                    <Route path="/teamManagement" element={<AdminDashboardF />}>
                        <Route index element={<DailyTask />}></Route>
                        <Route path="dailyTask" element={<DailyTask />} />
                        <Route
                            path="teamOrganize"
                            element={<TeamOrganize />}
                        ></Route>
                    </Route>
                    <Route
                        path="/FAQ"
                        element={
                            <RequireAuth>
                                <Faq />
                            </RequireAuth>
                        }
                    >
                        <Route index element={<AccountManagement />} />
                        <Route
                            path="safetyandsecuirity"
                            element={<SafetyAndSecurity />}
                        />
                        <Route
                            path="rules&politics"
                            element={<RulesAndPolitics />}
                        />
                    </Route>
                    <Route
                        path="/settings"
                        element={
                            <RequireAuth>
                                <ProfileDashboard />
                            </RequireAuth>
                        }
                    >
                        <Route index element={<ProfileSettings />} />
                        <Route path="profile" element={<ProfileSettings />} />
                        <Route
                            path="companySettings"
                            element={<CompanySettings />}
                        />
                    </Route>

                    <Route path="/financeTS" element={<FinanceManagement />}>
                        <Route
                            index
                            element={<FinanceDashboard></FinanceDashboard>}
                        ></Route>
                        <Route path="partners" element={<Partners />}></Route>
                        <Route path="allLedger" element={<AllLedger />}></Route>
                        <Route
                            path="directExpense"
                            element={<DirectExpense />}
                        ></Route>
                    </Route>
                    <Route path="load" element={<Loader />} />
                </Routes>
            </Suspense>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
