import CityList from '@data/destination_list.json';

const About = () => {
  return (
    <div id='Destinations' className='bg-red-200'>
      <title>Destinations</title>
      <div className='flex flex-wrap gap-5'>
        {CityList.map((city) => (
          <card className='card bg-base-200 max-w-[500px] min-w-[300px] grow rounded-2xl p-5 shadow-2xl'>
            <h3 className='text-xl'>{city.name}</h3>
            <img src={city.image} alt={city.name} className='' />
            <p className='py-5'>{city.description}</p>
          </card>
        ))}
      </div>
    </div>
  );
};

export default About;
