import {Routes as AppRoutes, Route} from 'react-router-dom';

import {Home, AddInfo, DeleteInfo, Auth} from './pages'

const Routes = () => {
    return (
      <AppRoutes>
        <Route index element={<Home />}/>
        <Route path='/auth' element={<Auth />}/>
        <Route path='/add' element={<AddInfo />}/>
        <Route path='/delete' element={<DeleteInfo />}/>
      </AppRoutes>
    );
  };
  
  export default Routes;