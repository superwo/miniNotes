import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';

const Signup = () => {
  return (
    <Layout>
      <h3 className='text-center pt-4 pb-3'>Signup</h3>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <SignupComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
