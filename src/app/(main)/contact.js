import AgentCard from "../components/agent";

const Contact = () => {
    return ( 
        <div className="main" style={{ textAlign: 'center' }}>
            <h1 style={{ margin: '1em'}}>Contact Us</h1>
            <div>
            <h1>Hours:</h1>
            <ul style={{ listStyle: 'none', padding: '0' }}>
                <li>Sunday: 8am-5pm</li>
                <li>Monday: 8am-5pm</li>
                <li>Tuesday: 12pm-5pm</li>
                <li>Wednesday: 8am-5pm</li>
            </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '2em', flexWrap: 'wrap', paddingBottom: '2em' }}>
            <AgentCard 
                image="jessica.jpg"
                title="Jessica Bell"
                email="jessicabell@email.com"
            />
            <AgentCard 
                image="maria.jpg"
                title="Maria Henderson"
                email="mariahenderson@email.com"
            />
            </div>
        </div>
     );
}
 
export default Contact;