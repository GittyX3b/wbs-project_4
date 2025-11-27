import about_1 from '@assets/images/About_1.jpg';

const About = () => {
  return (
    <div id='About'>
      <title>About Us</title>
      <article>
        <div className='flex flex-col items-center p-5'>
          <div className='flex w-1/2 flex-col items-center gap-10 p-10'>
            <h2>About Us</h2>
            <p className='py-6'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, sed veniam? Sed
              quam cumque repudiandae natus, vel atque velit quae adipisci. Eligendi ratione
              molestias dolor similique atque quo totam perspiciatis id velit amet ipsum, nihil
              laboriosam minus, reprehenderit eum recusandae fuga numquam nemo? Ullam laborum amet,
              inventore reprehenderit pariatur autem aliquam dicta neque adipisci maxime voluptas
              temporibus praesentium cumque quas.
            </p>
          </div>
          <figure className='w-1/2'>
            <img src={about_1} alt='' className='rounded-xl shadow-2xl' />
            <figcaption>untertitel</figcaption>
          </figure>
        </div>
      </article>
    </div>
  );
};

export default About;
