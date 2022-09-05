import { useDispatch, useSelector } from 'react-redux';
import { addCashAction, getCashAction } from './store/cashReducer'
import {addCustomerAction, removeCustomerAction} from './store/customersReducer'
import './App.css';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);

    const addCash = () => {
        dispatch(addCashAction(5));
    };

    const getCash = () => {
        dispatch(getCashAction(5));
    };

    const addCustomer = (name) => {
        const customer = {
            id: Date.now(),
            name,
        };
        dispatch(addCustomerAction(customer));
    };

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id));
    };

    return (
        <div className="App">
            <h2> cash: {cash}</h2>
            <button onClick={addCash}>ADD 5</button>
            <button onClick={getCash}>GET 5</button>
            <hr />
            <hr />
            <button onClick={() => addCustomer(prompt())}>ADD_CUSTOMER</button>

            <hr />
            {customers.length > 0 ? (
                <div>
                    {customers.map((customer) => {
                        return (
                            <div
                                key={customer.id}
                                className="Customer"
                                onClick={() => removeCustomer(customer)}>
                                {customer.name + ' - ' + customer.id}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <h4>Nobody here</h4>
            )}
        </div>
    );
}

export default App;
