import {Routes as AppRoutes, Route} from 'react-router-dom';

import {Home, AccessInfo, AddInfo} from './pages'

const Routes = () => {
    return (
      <AppRoutes>
        <Route index element={<AddInfo />}/>
      </AppRoutes>
    );
  };
  
  export default Routes;