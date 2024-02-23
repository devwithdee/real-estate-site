"use client"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../../../styles/login.module.css';
import { useState } from 'react';
import { useAccount } from '../../../../../context/account';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const router = useRouter();

  function showToastErrMessage() {
    toast.error("Incorrect login details, try again.", {
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

  const { setIsLoggedIn, setFirstName, setLastName, setEmail } = useAccount();
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

    try {
      const response = await fetch('/login-api', {
        method: 'POST',
        body: JSON.stringify(formDataObject),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setFirstName(data.user.firstName);
          setLastName(data.user.lastName);
          setEmail(data.user.email);
        }
        setIsLoggedIn(true);
        showToastSuccess();
        setTimeout(() => {
          router.push('/portal/account');
        }, 2000);
      } else if (response.status === 401) {
        showToastErrMessage();
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted">
            We never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" name="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button className={styles.btn} type="submit">
          Login
        </Button>
        <ToastContainer />
      </Form>
    </div>
  );
}

export default Login;