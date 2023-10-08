
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const Root = () => {
    return (
        <div>

            <div className=' '>
            <Navbar></Navbar>

            </div>

            <div className=''> 
            <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default Root;