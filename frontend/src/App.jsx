
import ShowUsers from './components/user/ShowUsers'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';


//componentes
import CreateUser from './components/user/CreateUser'
import EditUser from './components/user/EditUser'
import ShowSignUp from './components/auth/ShowSignUp';
import ShowLogin from './components/auth/ShowLogin'
import ShowPublishes from './components/publish/ShowPublishes';
import ShowPublishByUser from './components/publish/ShowPublishByUser';
import EditProfileUser from './components/user/EditProfileUser';
import CreatePublish from './components/publish/CreatePublish';
import EditPublish from './components/publish/EditPublish';


function App() {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand my-3" href="#">CRUD React + Node </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          {/* rutas de auth */}
          <Route path='/registro' element={<ShowSignUp />} />
          <Route path='/iniciosesion' element={<ShowLogin />} />

          {/* rutas generales */}
          <Route path='/inicio' element={<ShowUsers />} />
          <Route path='/' element={<ShowUsers />} />


          {/* rutas de publicaciones */}
          <Route path='/publishes' element={<ShowPublishes />} />
          <Route path='/publishes/:id' element={<ShowPublishByUser />} />
          <Route path='/create-publish' element={<CreatePublish />} />
          <Route path='/edit-publish/:id' element={<EditPublish />} />


          {/* rutas del perfil */}
          <Route path='/crear-usuario' element={<CreateUser />} />
          <Route path='/edit/:id' element={<EditUser />} />
          <Route path='/profiledit' element={<EditProfileUser />} />

        </Routes>
      </BrowserRouter>

      <div className='mt-4'>
        
      </div>
    </>
   
  )
}

export default App
