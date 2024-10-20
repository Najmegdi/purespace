
import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Loading } from '../components';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <div className=" px-20">
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </div>
  );
};

export default HomeLayout; 