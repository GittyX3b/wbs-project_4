import { useParams } from 'react-router';

const Location = () => {
  const { slug } = useParams();
  return <p>Location: {slug}</p>;
};

export default Location;
