import React from 'react';

function MemoComp1({ name }) {
  console.log('Rendering MemoComponent')
  return (
    <div>
      {name}
    </div>
  );
}

export default React.memo(MemoComp1);