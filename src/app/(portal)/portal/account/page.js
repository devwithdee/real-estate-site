"use client"
import { useAccount } from "../../../../../context/account";
import React, { useState } from "react";
import styles from '../../../styles/account.module.css';

export default function Account() {
    const { userEmail, userFirstName, userLastName } = useAccount();

    const userPhone = null;

    const cards = [
        { location: "loc", availableOn: "date",  description: "This is card 1", bedrooms: 1, applicationStatus: "Pending" },
        { location: "loc", availableOn: "date",  description: "This is card 2",bedrooms: 1,  applicationStatus: "Pending" },
        { location: "loc", availableOn: "date",  description: "This is card 3",bedrooms: 1,  applicationStatus: "Pending" },
    ];

    return (
        <>
            <div className={styles.layout}>
                <form className={styles.form}>
                <h1 className={styles.h1}>Account Details</h1>

                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            value={userFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            value={userLastName}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={userEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone (optional)</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            value={userPhone}
                        />
                    </div>
                    <button type="submit" className={`btn btn-primary ${styles.button}`}>Submit</button>
                </form>

                <div>
                    <h2 className={styles.h1}>View Applications</h2>
                    {cards.map((card, index) => (
                        <div key={index} className={styles.card}>
                            <h2 className={styles.h1}>Location: {card.location}</h2>
                            <p>Available On: {card.availableOn}</p>
                            <p># of Bedrooms: {card.bedrooms}</p>
                            <p>Application Status: {card.applicationStatus}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}