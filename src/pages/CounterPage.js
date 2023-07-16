import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [addedValue, setAddedValue] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const onChangeHandler = (event) =>{
    setAddedValue( parseInt(event.target.value) || 0 );
  }
  const onSubmitHandler = (event) =>{
    event.preventDefault();
    setCount( count + addedValue);
    setAddedValue(0);
  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={onSubmitHandler}>
        <label>Add a lot!</label>
        <input
        value={addedValue || ""}
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
