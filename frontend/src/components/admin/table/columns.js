//import AdminHome from "../AdminHome";

export const selectedArray = new Array();
export const COLUMNS=[
    {
        Header:' ',
        Footer:' ',
        accessor:'',
        Cell: ({ cell }) => {
            return <input name="selector[]" id="ad_Checkbox1" className="ads_Checkbox" type="checkbox" 
            onClick={(e)=>{
                console.log(e.target.checked);
                console.log(cell.row.allCells[1].value)
                selectedArray.push(cell.row.allCells[1].value)
            }} />
        }
    },
    {
        Header:'Email',
        Footer:'Email',
        accessor:'email'
    },
    {
        Header:'Blood Bank Name',
        Footer:'Blood Bank Name',
        accessor:'bankName'
    },
    {
        Header:'Parent Hospital',
        Footer:'Parent Hospital',
        accessor:'parentHospital'
    },
    {
        Header:'Short Name',
        Footer:'Short Name',
        accessor:'shortName'
    },
    {
        Header:'Category',
        Footer:'Category',
        accessor:'category'
    },
    {
        Header:'Licence',
        Footer:'Licence',
        accessor:'licence',
    },
    {
        Header:'Person Name',
        Footer:'Person Name',
        accessor:'personName'
    },
    {
        Header:'Contact',
        Footer:'Contact',
        accessor:'contact'
    },
    {
        Header:'City',
        Footer:'City',
        accessor:'city',
        Cell: ({ cell }) => {
            console.log(cell.value.district.name)
            return cell.value.name
        }   
    },
    {
        Header:'Component Facility',
        Footer:'Component Facility',
        accessor:'facility'
    }
   


]
