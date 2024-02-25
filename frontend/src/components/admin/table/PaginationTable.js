import React, {useMemo} from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'

export const PaginationTable = (props) => {
    console.log(props);
    const columns=useMemo(()=>props.COLUMNS,[])
    const data=useMemo(()=> props.MOCK_DATA)
    const tableInstance=useTable({
        columns:columns,
        data: data,
        initialState:{ pageSize:5}
    },  useGlobalFilter, useSortBy, usePagination)

    const {getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        //footerGroups, 
        page, 
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter,

    }=tableInstance


    const {globalFilter, pageIndex, pageSize} =state;
    

  return (
      <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}  >
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
                page.map(row =>{
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
        
    </table>
        <div>
        <button type="button" className="btn btn-danger" onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button  type="button" className="btn btn-warning" onClick={()=> previousPage()} disabled={!canPreviousPage}>Previous</button>
            <span>
                Page{' '}
                <strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}
            </span>
            <span>
                | Go to page: {' '} 
                <input type="number" 
                onChange={e=>{
                    const pageNumber=e.target.value? Number(e.target.value) -1:0;
                    gotoPage(pageNumber)
                }}
                value={pageIndex+1}
                style={{width:'50px'}}>

                </input>
            </span>
           
            
            <button type="button" className="btn btn-warning" onClick={()=> nextPage()} disabled={!canNextPage}>Next</button>
            <button type="button" className="btn btn-danger" onClick={()=> gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
            <select value={pageSize}  onChange={e=>{setPageSize(Number(e.target.value))}}>
                {
                    
                    [5,10,25,50].map(pageSize=>(
                        <option key={pageSize} value={pageSize}>Show {pageSize}</option>
                    ))
                }
                
            </select>
        </div>
    
    </>
  )
}
