import {Routes as AppRoutes, Route} from 'react-router-dom';

import {Home, AddInfo, DeleteInfo, ReadInfo, EditInfo} from './pages'

const Routes = () => {
    return (
      <AppRoutes>
        <Route index element={<Home />}/>
        <Route path='/add' element={<AddInfo />}/>
        <Route path='/delete' element={<DeleteInfo />}/>
        <Route path='/read' element={<ReadInfo />}/>
        <Route path='/edit' element={<EditInfo />}/>
      </AppRoutes>
    );
  };
  
  export default Routes;