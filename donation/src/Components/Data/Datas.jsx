import React from 'react'
import Card from '../cards/Card'

function Datas({datas}) {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 gap-4'>
        {
          datas.map(data => <Card key={data.id} data={data}/>)
        }
      </div>
    </div>
  );
}


export default Datas
