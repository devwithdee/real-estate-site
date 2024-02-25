'use client'
import DetailsPage from '../../../../components/details'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';

const ApartmentData = () => {
  const router = useRouter();
  const [listings, setListings] = useState([]);

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
  const trailsSlug = listings.filter(listing => listing.slug === slug);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/trails-data');
        const data = await res.json();
        if (res.ok) {
          setListings(data.listings); // Update state with fetched listings
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const trailsData = trailsSlug.map((listing) => {
    const dateObj = new Date(listing.date_available);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });


    return (
      <DetailsPage
        image1={listing.images[0]}
        image2={listing.images[1]}
        width={listing.width}
        location={listing.loc}
        title={listing.title}
        price={listing.price}
        availability={formattedDate}
        about={listing.about}
        features={listing.features}
        beds={listing.rooms}
        details1={listing.details[0]}
        details2={listing.details[1]}
      />
    );
  });

  return (
    <div>
      {trailsData}
    </div>
  );
}



export default ApartmentData;