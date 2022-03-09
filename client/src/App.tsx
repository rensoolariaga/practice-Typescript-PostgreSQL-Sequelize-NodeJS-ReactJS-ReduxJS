import { useEffect } from 'react';
import {connect} from 'react-redux';
import { getUsers } from "./redux/actions/index";
import { IUser, IStoreState } from "./interfaces/index";

interface AppProps {
	users: IUser[];
	getUsers(): any;
}

function App(props: AppProps) {
  useEffect(() => {
    props.getUsers();
  }, []);

	return <div>Hello world</div>;
}

const mapStateToProps = (state: IStoreState): {users: IUser[]} => {
	return {
		users: state.users,
	};
};

export default connect(mapStateToProps, {getUsers})(App);