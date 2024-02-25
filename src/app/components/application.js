import { useAccount } from "../../../context/account";
import React, { useState } from "react";
import { useApplication } from "../../../context/appstatus";
import styles from '../styles/application.module.css';

const AptApplication = () => {
    const { userEmail, userFirstName, userLastName } = useAccount();
    const { unit, location, availability, beds  } = useApplication();
    const [selectedDate, setSelectedDate] = useState('');
    const handleDateChange = (e) => {
        const selected = new Date(e.target.value);
        if (selected <= new Date(availability)) {
            setSelectedDate('');
        } else {
            setSelectedDate(selected);
        }
    };

    return (
        <>
            <form className={styles.container}>
                <div className={`form-group ${styles.form}`}>
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" defaultValue={"123 street, city, state, zipcode"} />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" readOnly defaultValue={userFirstName} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" readOnly defaultValue={userLastName} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" readOnly defaultValue={userEmail} />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="apartmentId">Apartment Unit</label>
                        <input type="text" className="form-control" id="apartmentId" readOnly defaultValue={unit} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="location">Location</label>
                        <input type="text" className="form-control" id="location" readOnly defaultValue={location} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="bedrooms">Bedrooms</label>
                    <input type="number" className="form-control" id="bedrooms" readOnly defaultValue={beds} />
                </div>
                <div className="form-group">
                    <label htmlFor="dateApplied">Date Applied</label>
                    <input type="date" className="form-control" id="dateApplied" readOnly defaultValue={"mm/dd/yyyy"} />
                </div>
                <div className="form-group">
                    <label htmlFor="creditScore">Credit Score</label>
                    <input type="number" className="form-control" id="creditScore" readOnly defaultValue={700} />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Select Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={selectedDate instanceof Date ? selectedDate.toISOString().split('T')[0] : selectedDate}
                        onChange={handleDateChange}
                    />
                    {selectedDate instanceof Date && (
                        <p>Selected Date: {selectedDate.toISOString().split('T')[0]}</p>
                    )}
                    {selectedDate === '' && (
                        <p>Date must be after {availability}</p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="comments">Comments</label>
                    <textarea className="form-control" id="comments" rows="3"></textarea>
                </div>
                <button type="submit" className={`btn btn-primary ${styles.btn}`}>Submit</button>
            </form>
        </>

    )
}

export default AptApplication;
