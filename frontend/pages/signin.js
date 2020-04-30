import SigninComponent from '../components/auth/SigninComponent';
import Layout from '../components/Layout';

const Signin = () => {
  return (
    <Layout>
      <h3 className='text-center pt-4 pb-3'>Signin</h3>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <SigninComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
