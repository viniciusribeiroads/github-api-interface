import Layout from './Components/Layout';
import Profile from './Components/profile';
import Repositories from './Components/repositories';
import ResetCSS from './global/resetCSS';


const App = () => {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <Repositories/>
      </Layout >
    </main> 
  );
}

export default App;
