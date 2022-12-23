
import DetailsPage from '../components/slug';
import ApartmentData from '../utils/apartments';
import {useRouter} from 'next/router';


const ApartmentPage = ( data ) => {

    const router = useRouter();
    const { slug } = router.query;

    if (router.isFallback) {
        <h1>Data is loading</h1>;
    }

    const newArr = ApartmentData.find(data => data.slug === slug);

    let results =[newArr];


    const page = results.map((data) => {
        return (
            <DetailsPage key={data.key}
                image1={data.image[0]}
                image2={data.image[1]}
                location={data.location}
                title={data.title}
                price={data.price}
                availability={data.availability}
                about={data.about}
                features={data.features}
                beds={data.bedrooms}
                details={data.details}

            />
        )
    })

    return (
        <div>
            {page}
        </div>
 );
}
 
export default ApartmentPage;