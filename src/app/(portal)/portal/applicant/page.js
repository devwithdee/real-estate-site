"use client"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../../../styles/applyPortal.module.css';

const ApplicantPortal = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
  
    const formData = new FormData(event.currentTarget);
    const formDataObject = {};
  
    // Convert FormData to an object
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
  
    // Ensure the password field is accessed correctly
    formDataObject.password = formDataObject.confirm_password;
  
    try {
      const response = await fetch('/api/submit/route', {
        method: 'POST',
        body: JSON.stringify(formDataObject),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // ... rest of your code ...
    } catch (error) {
      console.error('Error creating user:', error);
    } finally {
      setIsLoading(false);
    }

  
}
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Please create an account to fill out an application.</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter first name" name="first_name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter last name" name="last_name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted">We never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" name="password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" name="confirm_password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Button className={styles.btn} type="submit" id="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
      </Form>
    </div>
  );
};

export default ApplicantPortal;
