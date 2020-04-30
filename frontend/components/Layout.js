import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className='page'>
      <Header />
      <main className='page-content'>{children}</main>
    </div>
  );
};

export default Layout;
