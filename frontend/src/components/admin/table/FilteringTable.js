import React, {useMemo} from 'react'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'

export const FilteringTable = () => {
    const columns=useMemo(()=>COLUMNS,[])
    const data=useMemo(()=>MOCK_DATA,[])

    const tableInstance=useTable({
        columns:columns,
        data: data
    }, useGlobalFilter, useSortBy)

    const {getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        footerGroups, 
        rows, 
        prepareRow,
        state,
        setGlobalFilter,

    }=tableInstance


    const {globalFilter} =state;


  return (
      <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map((headerGroup)=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map( column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                </span>
                            </th>
                        ))
                    }
                    
                </tr>
                ))
            }
            
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map(row =>{
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map( cell =>{
                                  return  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>

                                })
                            }
                            
                        </tr>
                    )
                })
            }
           
        </tbody>
        <tfoot>
            {
                footerGroups.map((footerGroup)=>(
                <tr {...footerGroup.getFooterGroupProps()}>
                    {
                        footerGroup.headers.map( column => (
                            <th {...column.getFooterProps()}>{column.render('Footer')}</th>
                        ))
                    }
                    
                </tr>
                ))
            }
            
        </tfoot>
    </table>
    </>
  )
}
