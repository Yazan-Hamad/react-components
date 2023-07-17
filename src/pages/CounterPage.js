import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_ADDED_VALUE = "change-added-value";
const ADD_VALUE_TO_COUNT = 'add_value_to_count';


const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.addedValue,
        addedValue: 0,
      };
    case SET_ADDED_VALUE:
      return {
        ...state,
        addedValue: action.payload,
      };
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    addedValue: 0,
  });

  const increment = () => {
    dispatch({
      type:"increment"
    });
  };

  const decrement = () => {
    dispatch({
      type:"decrement"
    });
  };

  const onChangeHandler = (event) =>{

    dispatch({
      type: SET_ADDED_VALUE,
      payload: parseInt(event.target.value) || 0
    })
  };

  const onSubmitHandler = (event) =>{
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={onSubmitHandler}>
        <label>Add a lot!</label>
        <input
        value={state.addedValue || ""}
        onChange={onChangeHandler}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
