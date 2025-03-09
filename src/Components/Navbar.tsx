import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { getAuth, signOut } from "firebase/auth";

const Navbar: React.FC = () => {

    return (
        <nav>
            <h2>Gsynergy</h2>
            {user ? (
                <div>
                    <img src={user.photoURL || ''} alt="User Avatar" width="40" />
                    <span>{user.displayName}</span>
                
                </div>
            ) : null}
        </nav>
    );
};

export default Navbar;
