import React, {useMemo} from 'react'
import { useTable, useRowSelect } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { Checkbox } from './Checkbox'
import './table.css'
export const RowSelection = () => {
    const columns=useMemo(()=>COLUMNS,[])
    const data=useMemo(()=>MOCK_DATA,[])

    const tableInstance=useTable({
        columns:columns,
        data: data
    }, useRowSelect ,  (hooks)=>{
        hooks.visibleColumns.push((columns)=>{
            return [
                {
                    id:'selection',
                    Header:({ getToggleAllRowsSelectedProps })=>(
                        <Checkbox {...getToggleAllRowsSelectedProps()} />
                    ),
                    Cell:({row})=>(
                        <Checkbox {...row.getToggleAllRowsSelectedProps()} />
                    )
                },
                ...columns
            ]
        })

    })

    const firstPageRows=rows.slice(0,10);

    const {getTableProps, getTableBodyProps, headerGroups,
         footerGroups, rows, prepareRow, selectedFlatRows}=tableInstance


  return (
    <>
    <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map((headerGroup)=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map( column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))
                    }
                    
                </tr>
                ))
            }
            
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                firstPageRows.map(row =>{
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
    <pre>
            <code>
                {
                    JSON.stringify({
                        selectedFlatRows:selectedFlatRows.map((row)=>row.original),
                    },
                    null,
                    2)
                }
            </code>
        </pre>
   
    </>
  
  )}
