"use client"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../../../styles/login.module.css';
import { useState } from 'react';
import { useAccount } from '../../../../../context/account';
import { useRouter } from 'next/navigation';

const Login = () => {

  const router = useRouter();

  const { isLoggedIn, setIsLoggedIn } = useAccount();
  const [ isLoading, setIsLoading ] = useState(false);

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
        setIsLoggedIn(true);
        router.push('/portal/account');
      }
    } catch (error) {
      //console.error('Error getting user:', error);
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <div className={styles.container}>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" name="email"/>
          <Form.Text className="text-muted">
            We never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" name="password"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button className={styles.btn} type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;