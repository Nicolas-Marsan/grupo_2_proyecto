import '../App.css';
import ContentRow from './ContentRow';
import Footer from './Footer';
import Header from './Header';
import LastUserInDb from './LastUserInDb';
import CategoriesInDb from './CategoriesInDb';

import Listado from './Listado';
function App() {
  return (
    <>
    <Header/>

    <ContentRow/>

    <LastUserInDb/>
    
    <CategoriesInDb/>

    <Listado/>
    
    <Footer/>
    </>
  );
}

export default App;
