import React from 'react';

const Blog = () => {
    return (
        <div className='p-5'>
          <div className='my-4 border-2 bg-slate-500 rounded-xl'>
            <h2 className='my-3 bg-red-300'> Differences between uncontrolled and controlled components.</h2>
            <p className='p-3 bg-amber-500 rounded-md'> In controlled components, the parent component is responsible for managing the state and passing it down as props to the controlled component. This makes it easy to track the state of the component and predict how it will behave. However, in larger projects with many levels of nested components, this can make the code more complex and harder to manage.

On the other hand, uncontrolled components manage their own state using a ref to access the DOM element's current value and update the state accordingly. This makes them simpler to implement, but they can be more difficult to track and manage in larger projects.</p>
          </div>
          <div className='my-4 border-2 bg-amber-300 rounded-xl'>
            <h2 className='my-3 border-b-indigo-700 '> How to validate React props using PropTypes</h2>
            <p className='my-4 border-2 bg-slate-500 rounded-md'>PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.

</p>
          </div>
          <div className='my-4 border-2 bg-emerald-300 rounded-xl'>
            <h2 className=' bg-violet-700 rounded-sm'> difference between nodejs and express js.</h2>
            <p>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
          </div>
          <div className='my-4 border-2 bg-fuchsia-600 rounded-xl'>
            <h2 className=' bg-orange-300 rounded-sm'>What is a custom hook, and why will you create a custom hook?</h2>
            <p>Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</p>
          </div>
        </div>
    );
};

export default Blog;