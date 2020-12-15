import React from 'react';

function Form() {
  // Объявление переменной состояния, которую мы назовём "count"

  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}

export default Form;
