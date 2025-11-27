import company_logo_xl from '@assets/images/company-logo-xl.png';
import { SearchBar } from '@components/shared';

const Home = () => {
  return (
    <div id='Home'>
      <title>Home</title>
      <div>
        <SearchBar />
        <article className='pb-20'>
          <div className='flex'>
            <figure className='w-1/2 drop-shadow-2xl'>
              <img src={company_logo_xl} alt='' className='rounded-xl' />
            </figure>
            <div className='w-1/2 p-10'>
              <h2>Welcome !</h2>
              <p className='py-6'>
                {' '}
                Ullam laborum amet, inventore reprehenderit pariatur autem aliquam dicta neque
                adipisci maxime voluptas temporibus praesentium cumque quas.
              </p>
              <p className='py-6'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, sed veniam? Sed
                quam cumque repudiandae natus, vel atque velit quae adipisci. Eligendi ratione
                molestias dolor similique atque quo totam perspiciatis id velit amet ipsum, nihil
                laboriosam minus, reprehenderit eum recusandae fuga numquam nemo?
              </p>
            </div>
          </div>
        </article>
        <figure>
          <div className='carousel w-full rounded-2xl shadow-2xl'>
            <div id='item1' className='carousel-item w-full'>
              <img
                src='https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp'
                className='w-full'
              />
            </div>
            <div id='item2' className='carousel-item w-full'>
              <img
                src='https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp'
                className='w-full'
              />
            </div>
            <div id='item3' className='carousel-item w-full'>
              <img
                src='https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp'
                className='w-full'
              />
            </div>
            <div id='item4' className='carousel-item w-full'>
              <img
                src='https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp'
                className='w-full'
              />
            </div>
          </div>
          <div className='flex w-full justify-center gap-2 py-2'>
            <a href='#item1' className='btn btn-xs'>
              1
            </a>
            <a href='#item2' className='btn btn-xs'>
              2
            </a>
            <a href='#item3' className='btn btn-xs'>
              3
            </a>
            <a href='#item4' className='btn btn-xs'>
              4
            </a>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Home;
