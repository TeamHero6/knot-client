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
import TermsAndConditions from "./Components/AdditionalLinkPages/TermsAndConditions/TermsAndConditions";
import AddTask from "./Components/Features/Admin/AddTask";
import DailyTask from "./Components/Features/Admin/DailyTask/DailyTask";
import TeamManagement from "./Components/Features/Admin/TeamManagement/TeamManagement";
import TeamOrganize from "./Components/Features/Admin/TeamOrganize/TeamOrganize";
import DirectExpense from "./Components/Features/Finance/AllExpense/DirectExpense";
import AllLedger from "./Components/Features/Finance/AllLedger/AllLedger";
import FinanceDashboard from "./Components/Features/Finance/FinanceDashboard/FinanceDashboard";
import FinanceManagement from "./Components/Features/Finance/FinanceManagement";
import Partners from "./Components/Features/Finance/Partners/Partners";
import FinancePayroll from "./Components/Features/Finance/Payroll/FinancePayroll";
// import HRDashboard from "./Components/Features/HRDashboard/Dashboard/HRDashboard";
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
import Inventory from "./Components/Features/SalesManagement/Inventory/Inventory";
import Items from "./Components/Features/SalesManagement/Items/Items";
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
import AllKnotApp from "./Components/Pages/Home/AllKnotApp/AllKnotApp";
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
import UserManagement from "./Components/Pages/Leave/UserManagement";
import CompanySettings from "./Components/Pages/ProfileSettings/CompanySettings/CompanySettings";
import ProfileDashboard from "./Components/Pages/ProfileSettings/ProfileDashboard";
import ProfileSettings from "./Components/Pages/ProfileSettings/ProfileSettings/ProfileSettings";
import UserAttendance from "./Components/Pages/UserDashboard/UserAttendance";
import UserDashboardK from "./Components/Pages/UserDashboard/UserDashboard";
import UserPayrolls from "./Components/Pages/UserDashboard/UserPayrolls";
import UserPromotion from "./Components/Pages/UserDashboard/UserPromotion";
import Calender from "./Components/Shared/Calender/Calender";
import Loader from "./Components/Shared/Loader/Loader";
import FormSample from "./FromSample/FormSample";
import NotFoundPage from "./FromSample/NotFoundPage";
import PricingCard from "./FromSample/PricingCard";
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
                    <Route path="pricePlan" element={<PricingCard/>}></Route>
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
                        {/* <Route index element={<HRDashboard />}></Route> */}
                        <Route index element={<HrLeaveRequest />}></Route>
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
                    {/* ---------- User Dashboard ---------- */}
                    <Route
                        path="/userDashboard"
                        element={<UserDashboardK></UserDashboardK>}
                    >
                        <Route index element={<LeaveRequest />} />
                        <Route path="leaveRequest" element={<LeaveRequest />} />
                        <Route
                            path="userManagement"
                            element={<UserManagement></UserManagement>}
                        />
                        <Route
                            path="attendance"
                            element={<UserAttendance />}
                        ></Route>
                        <Route path="performance" element={<UserPromotion />} />
                        <Route path="payrolls" element={<UserPayrolls />} />
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
                    {/* ---------- Sales Management ---------- */}
                    <Route path="/salesTS" element={<SalesManagement />}>
                        <Route index element={<SalesDashboard />}></Route>
                        <Route path="salesDashboard" element={<SalesDashboard />}></Route>
                        <Route path="items" element={<Items />}></Route>
                        <Route path="inventory" element={<Inventory />} />
                        <Route
                            path="salesTeamMembers"
                            element={<SalesTeamMembers />}
                        ></Route>
                        <Route path="customer" element={<Customer />}></Route>
                        <Route
                            path="salesOrder"
                            element={<SalesOrder />}
                        ></Route>
                        <Route path="return" element={<Return />}></Route>
                        <Route path="vendor" element={<Vendor />}></Route>
                        <Route
                            path="purchaseOrder"
                            element={<PurchaseOrder />}
                        ></Route>
                        <Route path="bill" element={<Bill />}></Route>
                        <Route path="inventory" element={<Inventory />}></Route>
                    </Route>
                    {/* ---------- Marketing Automation ---------- */}
                    <Route path="/marketingTS" element={<MarketingAutomation />}>
                        <Route index element={<EmailMarketing />} />
                        <Route path="emailMarketing" element={<EmailMarketing />} />
                        <Route path="customerListing" element={<CustomerListing />} />
                    </Route>
                    {/* ---------- Team Management ---------- */}
                    <Route path="/teamManagement" element={<AdminDashboardF />}>
                        <Route index element={<DailyTask />}></Route>
                        <Route path="dailyTask" element={<DailyTask />} />
                        <Route
                            path="teamOrganize"
                            element={<TeamOrganize />}
                        ></Route>
                        <Route path="addTask" element={<AddTask />}></Route>
                        <Route path="teamManagement" element={<TeamManagement />}></Route>
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
                    {/* ---------- Finance Management ---------- */}
                    <Route path="/financeTS" element={<FinanceManagement />}>
                        <Route index element={<FinanceDashboard></FinanceDashboard>} />
                        <Route path="financeDashboard" element={<FinanceDashboard></FinanceDashboard>} />
                        <Route path="partners" element={<Partners />}></Route>
                        <Route path="allLedger" element={<AllLedger />}></Route>
                        <Route
                            path="attendance"
                            element={<UserAttendance />}
                        ></Route>
                        <Route
                            path="salary"
                            element={<FinancePayroll />}
                        ></Route>
                        <Route
                            path="allExpense"
                            element={<DirectExpense />}
                        ></Route>
                    </Route>
                    <Route
                        path="/BusinessSignUp"
                        element={<BusinessSignup />}
                    />
                    <Route path="/learnMore" element={<AllKnotApp />} />
                    <Route path="Calender" element={<Calender></Calender>} />
                    <Route path="load" element={<Loader />} />
                    <Route path="*" element={<NotFoundPage/>}></Route>
                    <Route path="/TermsAndConditions" element={<TermsAndConditions/>}></Route>
                </Routes>
            </Suspense>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
