import { useContext } from 'react';
import { AuthContext } from '../ConetextProvider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouteForOther = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const {pathname} = useLocation()
  


    

    if(user){
        return children
    }

 if (loading) {
   return (
     <div className="h-screen flex justify-center items-center">
       <progress className="progress w-56"></progress>
     </div>
   );
 }



    return <Navigate state={pathname} to='/login'></Navigate>
};

export default PrivateRouteForOther;