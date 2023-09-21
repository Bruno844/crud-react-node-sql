
import ShowUsers from './components/user/ShowUsers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateUser from './components/user/CreateUser'
import EditUser from './components/user/EditUser'


function App() {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">CRUD React + Node </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link text-white" href="#">Usuarios<span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link text-white" href="#">Publicaciones</a>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='' element={<ShowUsers />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/edit/:id' element={<EditUser />} />
        </Routes>
      </BrowserRouter>

      <div className='mt-4'>
        
      </div>
    </>
   
  )
}

export default App