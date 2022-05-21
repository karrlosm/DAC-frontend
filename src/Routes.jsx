import {Routes as AppRoutes, Route} from 'react-router-dom';

import {Home, AddInfo, DeleteInfo, ReadInfo} from './pages'

const Routes = () => {
    return (
      <AppRoutes>
        <Route index element={<Home />}/>
        <Route path='/add' element={<AddInfo />}/>
        <Route path='/delete' element={<DeleteInfo />}/>
        <Route path='/read' element={<ReadInfo />}/>
      </AppRoutes>
    );
  };
  
  export default Routes;