import { useDispatch } from 'react-redux';
import ActionCreators from '../store/action-creators/'
import { bindActionCreators, Dispatch } from 'redux';


export const useActions = () => {
    const dispatch: Dispatch<any>= useDispatch();
return bindActionCreators(ActionCreators, dispatch);
};