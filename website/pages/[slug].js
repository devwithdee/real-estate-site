import ApartmentData from '../utils/apartments';
import DetailsPage from '../components/slug';
import Router
 from 'next/router';
const ApartmentPage = () => {
    
    const apartmentData = ApartmentData.filter(data => data.slug === Router.query.slug);
   
    const apartments = apartmentData.map((data) => {
    
        return (
            <DetailsPage key={data}
                image1 = {data.images[0]}
                image2 = {data.images[1]}
                location = {data.location}
                title = {data.title}
                price = {data.price}
                availability = {data.availability}
                about = { data.about }
                features = { data. features}
                beds = { data. bedrooms }
                details1 = { data.details[0] }
                details2 = { data.details[1]}
            />
        )
    })
    return ( 
        <div>
        {apartments}
        </div>
     );
}
 
 
export default ApartmentPage;