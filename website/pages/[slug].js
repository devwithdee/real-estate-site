import DetailsPage from '../components/slug';
import { useRouter } from 'next/router';
import Data from './apartments';


const ApartmentData = () => {

        const router = useRouter();
        if (router.isFallback) {
          return <div>Loading...</div>;
        } 


    const apartmentData = Data.filter(data => data.slug === router.query.slug);
   
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



export default ApartmentData;