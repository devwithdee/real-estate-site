"use client"
import { useAccount } from "../../../../../context/account";

export default function Account() {
    const { userEmail, userFirstName, userLastName} = useAccount();
    return (
        <>
        <h1>User Account</h1>
        <p>Email: {userEmail}</p>
        <p>First Name: {userFirstName}</p>
        <p>Last Name: {userLastName}</p>
        </>
    );
}