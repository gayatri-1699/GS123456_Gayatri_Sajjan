import React from 'react' ;
import { useSelector,useDispatch, } from 'react-redux';
import { RootState } from '../redux/store';
import { removeStore } from '../redux/storeSlice';
import StoreForm from '../Components/StoreForm';

const Stores: React.FC = ()=> {
    const stores = useSelector((state: RootState) => state.store.stores);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Stores</h2>
            <StoreForm />
            <ul>
                {stores.map(store => (
                    <li key={store.id}>
                        {store.name}
                        <button onClick={() => dispatch (removeStore(store.id))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Stores ;