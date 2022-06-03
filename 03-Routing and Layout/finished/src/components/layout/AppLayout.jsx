import {Outlet} from 'react-router-dom';
function AppLayout(){
    return (
   <>
     <h1>APP BAR</h1>
     <div className="min-vh-100 tw-pt-14">
       <Outlet />
     </div>
   </>
 );
}

export default AppLayout;