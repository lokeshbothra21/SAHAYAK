import React,{useState} from 'react'
import { useAsyncDebounce } from 'react-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Search.css'
export const GlobalFilter = ({filter, setFilter}) => {
    const[value, setValue]=useState(filter)
    const onChange= useAsyncDebounce(value=>{
        setFilter(value || undefined)
    },1000)

  return (
      <>
       <form className="example m-3" action="/action_page.php" style={{margin:"auto",maxWidth:"300px"}}>
            <input type="text" placeholder="Search.." name="search2"
            value={value || ''}
            onChange={(e)=>{
                setValue(e.target.value)
                onChange(e.target.value)
            }}
            />
        </form> 
    </>
  )
}
