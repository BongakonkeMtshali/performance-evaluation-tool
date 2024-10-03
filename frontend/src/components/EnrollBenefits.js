import React, { useState } from 'react';

const EnrollBenefits = () => {
    const [selectedBenefits, setSelectedBenefits] = useState({
        healthInsurance: false,
        dentalInsurance: false,
        retirementPlan: false,
        wellnessPrograms: false,
        paidTimeOff: false,
        employeeAssistancePrograms: false,
    });

    const handleChange = (e) => {
        const { name, checked } = e.target;
        setSelectedBenefits((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle enrollment logic here (e.g., API call)
        console.log('Selected Benefits:', selectedBenefits);
        alert('Enrollment submitted!');
    };

    return (
        <div>
            <h3>Enroll in Benefits</h3>
            <p>Select your benefits options below:</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="healthInsurance"
                            checked={selectedBenefits.healthInsurance}
                            onChange={handleChange}
                        />
                        Health Insurance
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="dentalInsurance"
                            checked={selectedBenefits.dentalInsurance}
                            onChange={handleChange}
                        />
                        Dental Insurance
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="retirementPlan"
                            checked={selectedBenefits.retirementPlan}
                            onChange={handleChange}
                        />
                        Retirement Plan
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="wellnessPrograms"
                            checked={selectedBenefits.wellnessPrograms}
                            onChange={handleChange}
                        />
                         Wellness Programs
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="paidTimeOff"
                            checked={selectedBenefits.paidTimeOff}
                            onChange={handleChange}
                        />
                         Paid Time Off
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="employeeAssistancePrograms"
                            checked={selectedBenefits.employeeAssistancePrograms}
                            onChange={handleChange}
                        />
                         Employee Assistance Programs
                    </label>
                </div>
                <button type="submit">Enroll</button>
            </form>
        </div>
    );
};

export default EnrollBenefits;
