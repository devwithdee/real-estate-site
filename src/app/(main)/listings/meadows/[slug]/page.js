'use client'
import DetailsPage from '../../../../components/details'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'

import Data from '../../../../lib/apartments'


const ApartmentData = () => {
    const router = useRouter();
  
    if (router.isFallback) {
      return <div>Loading...</div>;
    }

  // Get the current pathname using usePathname
  const pathname = usePathname();

  // Split the pathname into an array using '/'
  const pathSegments = pathname.split('/');

  // Get the last segment as the slug
  const slug = pathSegments[pathSegments.length - 1];

  // Use routerSlug in the filter function
  const apartmentData = Data.filter(data => data.slug === slug);

  
   
    const apartments = apartmentData.map((data) => {
    
        return (
            <DetailsPage key={data}
                image1 = {data.images[0]}
                image2 = {data.images[1]}
                width = {data.width}
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