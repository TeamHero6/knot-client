import React, { useRef, useState } from "react";
import Employee from "./Employee";

const EmployeeDetails = () => {
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState({});

    const nameRef = useRef("");
    const IDRef = useRef("");
    const departmentRef = useRef("");
    const designationRef = useRef("");
    const addressRef = useRef("");
    const phone1Ref = useRef("");
    const phone2Ref = useRef("");
    const emailRef = useRef("");
    const companyEmailRef = useRef("");
    const reportPersonRef = useRef("");
    const joiningDateRef = useRef("");
    const salaryGreadRef = useRef("");
    const salaryRef = useRef("");
    const bloodGroupRef = useRef("");
    const emergencyNameRef = useRef("");
    const emergencyPhone1Ref = useRef("");
    const emergencyRelationRef = useRef("");
    const emergencyPhone2Ref = useRef("");
    const emergencyAddressRef = useRef("");

    const submitted = (event) => {
        event.preventDefault();
        // console.log('name')
        const name = nameRef.current.value;
        const EmployeeId = IDRef.current.value;
        const Department = departmentRef.current.value;
        const Designation = designationRef.current.value;
        const Address = addressRef.current.value;
        const Phone1 = phone1Ref.current.value;
        const Phone2 = phone2Ref.current.value;
        const Email = emailRef.current.value;
        const CompanyName = companyEmailRef.current.value;
        const ReportPerson = reportPersonRef.current.value;
        const JoiningDate = joiningDateRef.current.value;
        const SalaryGread = salaryGreadRef.current.value;
        const Salary = salaryRef.current.value;
        const BloodGroup = bloodGroupRef.current.value;
        const EmergencyName = emergencyNameRef.current.value;
        const EmergencyPhone1 = phone1Ref.current.value;
        const EmergencyRelation = emergencyRelationRef.current.value;
        const EmergencyPhone2 = emergencyPhone2Ref.current.value;
        const EmergencyAddress = emergencyAddressRef.current.value;

        const inputData = {
            Name: name,
            EmployeeID: EmployeeId,
            Department: Department,
            Designation: Designation,
            Address: Address,
            Phone1: Phone1,
            Phone2: Phone2,
            Email: Email,
            CompanyName: CompanyName,
            ReportPerson: ReportPerson,
            JoiningDate: JoiningDate,
            SalaryGread: SalaryGread,
            Salary: Salary,
            BloodGroup: BloodGroup,
            EmergencyName: EmergencyName,
            EmergencyPhone1: EmergencyPhone1,
            EmergencyRelation: EmergencyRelation,
            EmergencyPhone2: EmergencyPhone2,
            EmergencyAddress: EmergencyAddress,
        };
        // console.log(inputData)

        const url =
            "http://localhost:5000/inputData";
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(inputData),
        })
            .then((res) => res.json())
            .then((data) => setUserData(data));
    };
    return (
        <div>
            {/* <HRNavbar></HRNavbar> */}
            <div>
                <div class="drawer drawer-mobile">
                    <input
                        id="my-drawer-2"
                        type="checkbox"
                        class="drawer-toggle"
                    />
                    <div class="drawer-content">
                        <label
                            onClick={() => setShow(!show)}
                            for="my-drawer"
                            class="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button"
                        >
                            + New
                        </label>
                        <div className="flex flex-col">
                            {show ? (
                                <form
                                    onSubmit={submitted}
                                    className="ml-3 md:ml-5"
                                >
                                    <p className="text-xl text-[#0182BE]">
                                        Employee Details
                                    </p>
                                    <div className="md:flex">
                                        <table>
                                            <tr>
                                                <td>Employee Name : </td>
                                                <td>
                                                    <input
                                                        ref={nameRef}
                                                        className="border-2 pl-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                        type="text"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Department : </td>
                                                <td>
                                                    <input
                                                        ref={departmentRef}
                                                        className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                        type="text"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Address : </td>
                                                <td>
                                                    <textarea
                                                        ref={addressRef}
                                                        className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                        name=""
                                                        id=""
                                                        cols="23"
                                                        rows="2"
                                                    ></textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Email : </td>
                                                <td>
                                                    <input
                                                        ref={emailRef}
                                                        className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                        type="text"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Report Person : </td>
                                                <td>
                                                    <input
                                                        ref={reportPersonRef}
                                                        className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                        type="text"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Salary Gread : </td>
                                                <td>
                                                    <input
                                                        ref={salaryGreadRef}
                                                        className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                        type="text"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Blood Group : </td>
                                                <td>
                                                    <input
                                                        ref={bloodGroupRef}
                                                        className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                        type="text"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Photo : </td>
                                                <td>
                                                    <input
                                                        className="rounded-md border-[#0182BE]"
                                                        type="file"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Documentation : </td>
                                                <td>
                                                    <input
                                                        className="rounded-md border-[#0182BE]"
                                                        type="file"
                                                    />
                                                </td>
                                            </tr>
                                        </table>
                                        <div className="md:ml-32">
                                            <table>
                                                <tr>
                                                    <td>Employee ID : </td>
                                                    <td>
                                                        <input
                                                            ref={IDRef}
                                                            className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                            type="text"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Designation : </td>
                                                    <td>
                                                        <input
                                                            ref={designationRef}
                                                            className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                            type="text"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Phone : </td>
                                                    <td>
                                                        <input
                                                            ref={phone1Ref}
                                                            className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                            type="text"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Phone : </td>
                                                    <td>
                                                        <input
                                                            ref={phone2Ref}
                                                            className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                            type="text"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Company Email : </td>
                                                    <td>
                                                        <input
                                                            ref={
                                                                companyEmailRef
                                                            }
                                                            className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                            type="text"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Joining Date : </td>
                                                    <td>
                                                        <input
                                                            ref={joiningDateRef}
                                                            className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                            type="text"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Salary : </td>
                                                    <td>
                                                        <input
                                                            ref={salaryRef}
                                                            placeholder="BDT"
                                                            className="border-2 pl-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:mr-16"
                                                            type="text"
                                                        />
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <p className="text-xl mt-7 text-[#0182BE]">
                                        Emergency Contact
                                    </p>
                                    <div className="md:flex">
                                        <table>
                                            <tr>
                                                <td>Name : </td>
                                                <td>
                                                    <input
                                                        ref={emergencyNameRef}
                                                        className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:ml-16 md:mr-16"
                                                        type="text"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Relation : </td>
                                                <td>
                                                    <input
                                                        ref={
                                                            emergencyRelationRef
                                                        }
                                                        className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:ml-16 md:mr-16"
                                                        type="text"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Address : </td>
                                                <td>
                                                    <input
                                                        ref={
                                                            emergencyAddressRef
                                                        }
                                                        className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:ml-16 md:mr-16"
                                                        type="text"
                                                    />
                                                </td>
                                            </tr>
                                        </table>
                                        <div className="md:ml-32">
                                            <table>
                                                <tr>
                                                    <td>Phone : </td>
                                                    <td>
                                                        <input
                                                            ref={
                                                                emergencyPhone1Ref
                                                            }
                                                            className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:ml-16 md:mr-16"
                                                            type="text"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Phone : </td>
                                                    <td>
                                                        <input
                                                            ref={
                                                                emergencyPhone2Ref
                                                            }
                                                            className="border-2 rounded-md border-[#0182BE] bg-[#EEEEEE] md:ml-16 md:mr-16"
                                                            type="text"
                                                        />
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <input
                                        className="text-xl block mx-auto bg-[#EEEEEE] border-2 border-[#0182BE] rounded-md px-5"
                                        type="submit"
                                        value="Save"
                                    />
                                </form>
                            ) : (
                                ""
                            )}
                            <Employee></Employee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;
