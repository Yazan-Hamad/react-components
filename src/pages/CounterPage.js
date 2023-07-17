import { useReducer } from 'react';
import { produce } from 'immer';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_ADDED_VALUE = "change-added-value";
const ADD_VALUE_TO_COUNT = 'add_value_to_count';


const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count +=1;
      return;
    case DECREMENT_COUNT:
      state.count-=1;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count+=state.addedValue;
      return;
    case SET_ADDED_VALUE:
      state.addedValue = action.payload;
      return;
    default:
      return;
  }
};

function CounterPage({ initialCount }) {

  const [state, dispatch] = useReducer(produce(reducer), {
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
