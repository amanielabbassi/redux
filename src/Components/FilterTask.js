import React from 'react'
import {useDispatch}  from 'react-redux';
import { filter_task } from '../JS/Actions/actions';

const FilterTask = () => {
    const dispatch = useDispatch()
    return (
        <div className="btn-filter">
          <button className="all" onClick={() => dispatch(filter_task("all"))

          }>All</button>
          <button className="all" onClick={() => dispatch(filter_task("done"))

          }>Done</button>
          <button className="all" onClick={() => dispatch(filter_task("notDone"))

          }>NotDone</button>  
        </div>
    )
}

export default FilterTask