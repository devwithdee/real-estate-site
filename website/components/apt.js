import { Card } from "react-bootstrap";
import React, { Component } from "react";
import Link from 'next/link';


const AptListing = ( props ) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={props.image} />
                <Card.Body>
                    <Card.Title style={{ color: '#000', fontSize: '14px' }}>
                        {props.title}
                    </Card.Title>
                    <Card.Text>
                        <p>{props.details}</p>
                        <p>${props.price}</p>
                        <p>{props.availability}</p>
                        <Link href={`/${encodeURIComponent(props.slug)}`}>
                        <button type="button" style={{ border: 'none', backgroundColor: 'var(--teal)', color: 'white', width: '3em' }}>
                            View</button>
                            </Link>
                            
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AptListing;