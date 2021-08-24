import '../App.css';
import ContentRow from './ContentRow';
import Footer from './Footer';
import Header from './Header';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';
import CardHijoCategorias from './CardHijoCategorias';

import Listado from './Listado';
function App() {
  return (
    <>
    <Header/>

    <ContentRow/>

    <LastProductInDb/>
    
    <CategoriesInDb/>

    <Listado/>
    
    <Footer/>
    </>
  );
}

export default App;
