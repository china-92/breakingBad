import {Fragment, useContext} from 'react'
import Context from '../../store/Context'
import classes from './pagination.module.css'
const Pagination = (props) => {
    const recievedContext = useContext(Context)
    let numberOfPages = []
    for(let i=1; i<=Math.ceil(recievedContext.length/10);i++){
        numberOfPages.push(i)
      }
    const onPageClick=(event)=>{
        event.preventDefault()
        props.pageSelected(event.target.value)
        console.log(event.target.value)
    }
    return (
       <Fragment>
         <nav>
             <ul className={classes.paginationNavigation}>
                 {numberOfPages.map(number => <li 
                 key={number}>
                 <button onClick={onPageClick} 
                 className={`${classes.linkPage} ${number===recievedContext.page?classes.active:''}`}
                  value={number} >
                     {number}
                 </button>
                 </li>)}
             </ul>
         </nav>
       </Fragment>
    )
}


export default Pagination 