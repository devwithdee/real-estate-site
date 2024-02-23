"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../../../styles/applyPortal.module.css';
import { useAccount } from '../../../../../context/account';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplicantPortal = () => {
  const router = useRouter();

  function showToastErrMessage() {
    toast.error("Something went wrong, try again.", {
      data: {
        title: "Error toast.",
        text: "This is an error message",
      }
    });
  };

  function showToastSuccess() {
    toast.success("Success.. redirecting to account.", {
      data: {
        title: "Success toast.",
        text: "This is a success message",
      }
    });
  };

  const { isLoggedIn, setIsLoggedIn } = useAccount();
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
      const response = await fetch('/signup-api', {
        method: 'POST',
        body: JSON.stringify(formDataObject),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        showToastSuccess();
        setTimeout(() => {
          setIsLoggedIn(true);
          router.push('/portal/account');
        }, 2000);
      } 
      else if (response.error) {
        showToastErrMessage();
      }
    } catch (error) {
      console.error('Error creating user:', error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className={styles.container}>
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
          <ToastContainer />
        </div>
    </div>
  );
};

export default ApplicantPortal;
