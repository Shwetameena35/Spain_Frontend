import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';

function Sidebar() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex flex-col items-center p-6 md:p-11 w-full md:w-96 h-full md:h-screen'>
      <div className='relative mb-6'>
        {image ? (
          <img src={image} alt='Preview' className='w-48 h-48 md:w-64 md:h-64 object-cover' />
        ) : (
          <div className='w-48 h-48 md:w-56 md:h-56 border-2 border-dashed border-gray-400 flex items-center justify-center text-white text-4xl'>
            +
          </div>
        )}
        <input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          className='absolute inset-0 opacity-0 cursor-pointer'
        />
      </div>
      <Formik
        initialValues={{
          name: '',
          position: '',
          age: '',
          team: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className='w-full max-w-xs'>
            <div className='mb-4 flex items-center'>
              <label className='w-1/3 text-white text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <Field
                type='text'
                id='name'
                name='name'
                className='w-2/3 py-2 px-3 text-black leading-tight focus:outline-none focus:border-white border-b-2 border-black bg-transparent placeholder:text-black'
                placeholder='Enter your name'
              />
            </div>
            <div className='mb-4 flex items-center'>
              <label className='w-1/3 text-white text-sm font-bold mb-2' htmlFor='position'>
                Position
              </label>
              <Field
                type='text'
                id='position'
                name='position'
                className='w-2/3 py-2 px-3 text-black leading-tight focus:outline-none focus:border-white border-b-2 border-black bg-transparent placeholder:text-black'
                placeholder='Enter your position'
              />
            </div>
            <div className='mb-4 flex items-center'>
              <label className='w-1/3 text-white text-sm font-bold mb-2' htmlFor='age'>
                Age
              </label>
              <Field
                type='number'
                id='age'
                name='age'
                className='w-2/3 py-2 px-3 text-black leading-tight focus:outline-none focus:border-white border-b-2 border-black bg-transparent placeholder:text-black'
                placeholder='Enter your age'
              />
            </div>
            <div className='mb-6 flex items-center'>
              <label className='w-1/3 text-white text-sm font-bold mb-2' htmlFor='team'>
                Team Name
              </label>
              <Field
                type='text'
                id='team'
                name='team'
                className='w-2/3 py-2 px-3 text-black leading-tight focus:outline-none focus:border-white border-b-2 border-black bg-transparent placeholder:text-black'
                placeholder='Enter your team name'
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Sidebar;
