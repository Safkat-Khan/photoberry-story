
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../ConetextProvider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {state} = useLocation()
    const {user,loading} = useContext(AuthContext)




 if(!user){
        return children
    }

    
   if (loading) {
     return (
       <div className="h-screen flex justify-center items-center">
         <progress className="progress w-56"></progress>
       </div>
     );
   }


  return <Navigate to={state? state : '/'}></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;