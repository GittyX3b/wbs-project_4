import { useParams } from 'react-router';

const Location = () => {
  const { slug } = useParams();
  return <p>Location</p>;
};

export default Location;
