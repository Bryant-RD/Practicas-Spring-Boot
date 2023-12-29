import React from 'react'
import Menu from '../Components/Menu'
import Table from '../AdminView/Components/Table'

export const AllSales = () => {
  return (
    <div>
        <Menu />
        <div>
            <h1 className='text-4xl'>Lista de todas las compras realizadas</h1>
            <Table columns={} data={} pageSize={} />
        </div>
    </div>
  )
}
