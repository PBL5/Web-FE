import React from 'react'

const Pagination = ({pagination, onPageChange}) => {

    const {page, limit, totalRow} = pagination

    const totalPages = Math.ceil(totalRow/limit)

    const handlePageChange = (newPage) =>{
        if(onPageChange){
            onPageChange(newPage)
        }
    }
    return (
        <div>
            <button
            disabled = {page <= 1}
            onClick = {() => handlePageChange(page - 1)}>
                Prev
            </button>
            <button disabled = {page >= totalPages}
            onChange = {() => handlePageChange(page + 1)}>
                Next
            </button>
        </div>
    )
}

export default Pagination
