import Nav from './Components/Nav/NavBar.js';
import './App.css';
import Item from './Components/Content/ItemListContainer.js';


function App() {
  return (
    <div className="App">
      <Nav />
      <div className='perfil-card-container'>
      <Item imagen='https://t4.ftcdn.net/jpg/05/85/29/13/360_F_585291303_BHkNvoBmpPb9riRJRhsyYLcYf3azGL0t.webp' 
        nombre='Hamburguesa Completa' 
        descripcion='Medallon de carne de 200g con tomate, lechuga, cebolla, pepino y panceta' 
        precio='3000'/>

      <Item imagen="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_HAMBURGUESA-CLASICA_1200X800_020822.png" 
        nombre='Hamburguesa simple' 
        descripcion='Medallon de carne de 200g' 
        precio='900'/>

      <Item imagen='https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/ExtraBurger-XL.png' 
        nombre='Hamburguesa Completa' 
        descripcion='Medallon de carne de 200g con tomate, lechuga, cebolla, pepino y panceta' 
        precio='3000'/>
      
      <Item imagen='https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/DobleNapolitano-XL-1.png' 
        nombre='Hamburguesa Completa' 
        descripcion='Medallon de carne de 200g con tomate, lechuga, cebolla, pepino y panceta' 
        precio='3000'/>
      </div>
    </div>
  );
}

export default App;
