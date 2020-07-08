import React from 'react'

function MemoComp(props) {
  console.log('memo rendering')
  const {name} = props
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp);
