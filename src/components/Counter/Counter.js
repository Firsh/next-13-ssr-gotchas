'use client';
import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(() => {
    return Number(
      typeof window !== "undefined" && window.localStorage.getItem('saved-count') || 0
    );
  });

  React.useEffect(() => {
    typeof window !== "undefined" && window.localStorage.setItem('saved-count', count);
  }, [count]);

  return (
    <button
      className="count-btn"
      onClick={() => setCount(count + 1)}
    >
      Count: {count}
    </button>
  );
}

export default Counter;
