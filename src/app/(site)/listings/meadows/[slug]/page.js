'use client'
import DetailsPage from '../../../../components/details'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';
import { useApplication } from '../../../../../../context/appstatus';

const ApartmentData = () => {
  const router = useRouter();
  const [listings, setListings] = useState([]);
  const { setUnit, setLocation, setAvailability, setBeds } = useApplication();

  const handleApplicationSubmit = (unit, location, beds, formattedDate) => {
      setUnit(unit);
      setLocation(location);
      setBeds(beds);
      setAvailability(formattedDate);
  };
  
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
  const meadowsSlug = listings.filter(listing => listing.slug === slug);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/meadows-data');
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
  

  const meadowsData = meadowsSlug.map((listing) => {
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
        unitnum={listing.unit}
        handleApply={() => handleApplicationSubmit(listing.unit, listing.loc, listing.rooms, formattedDate)}
      />
    );
  });

  return (
    <div>
      {meadowsData}
    </div>
  );
}



export default ApartmentData;