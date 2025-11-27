import { useState } from 'react';

const Contact = () => {
  const [formData, setformData] = useState({
    username: null,
    usermail: null,
    usermessage: null,
  });

  const handleChange = (e) => {
    setformData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted', formData);
  };

  return (
    <div id='Contact'>
      <title>Contact</title>
      <div className='hero'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='p-10 text-center lg:text-left'>
            <h2 className='text-5xl font-bold'>Contact Us!</h2>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <form
            className='card bg-base-300 w-full max-w-lg shrink-0 shadow-2xl'
            onSubmit={handleSubmit}
          >
            <div className='card-body'>
              <fieldset className='fieldset'>
                <label className='label' htmlFor='username'>
                  Name
                </label>
                <input
                  type='text'
                  className='input w-full'
                  name='username'
                  id='username'
                  placeholder='Your name here...'
                  onChange={handleChange}
                />
                <label className='label' htmlFor='usermail'>
                  Email
                </label>
                <input
                  type='email'
                  className='input w-full'
                  name='usermail'
                  id='usermail'
                  placeholder='Your email here...'
                  onChange={handleChange}
                />
                <label className='label' htmlFor='usermessage'>
                  Message
                </label>
                <textarea
                  type='text'
                  name='usermessage'
                  id='usermessage'
                  className='input h-40 w-full'
                  placeholder='Your Message here...'
                  onChange={handleChange}
                ></textarea>
                <button className='btn btn-neutral mt-4'>Submit</button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
