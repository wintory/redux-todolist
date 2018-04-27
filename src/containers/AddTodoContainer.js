import {connect} from 'react-redux';
import {addTodo} from '../actions/ManageTodos';
import Add from '../components/addTodo';

const mapDispatchToProps = {
    addTodo
};

export default connect(null, mapDispatchToProps)(Add);
