
import React, {useState, useEffect} from 'react'
import DataTable from './datatable/DataTable'

function FetchStudents (){
    const [students, setStudents] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [searchCols, setSearchCols] = useState([])
    

    // fetch data from BE
    useEffect(() => {
        fetch('http://time.jsontest.com')
            .then(res => res.json())
            .then(result => setStudents(result))
    }, [])

    /* - return all the row matching with the input value
       - giá trị cái cột có khi là kiểu số nên phải cast về String, vì giá trị của searchField là text 
       - cast toLowercase 2 vế so sánh, không thì tìm không ra
    */
    function searchStudents(rows){
        // const cols = rows[0] && Object.keys(rows[0])
        return rows.filter(
                        row => searchCols.some(col =>
                                row[col].toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
            )
    }

    /*
    - tìm kiếm sinh viên theo các label, check vào label muốn tìm
    - check and uncheck
    - searchCols là mảng chứa những label tìm kiếm, ví dụ tìm theo firstName, lastName, ..
    - ...prevState chứa tất cả những giá trị đó, kiểm tra xem checkbox có đc check hay không để remove nó ra khỏi mảng
    - 
    */
    const columns = students[0] && Object.keys(students[0])
    return (
        <div>
            <div>
                <input type = 'text' 
                value = {searchValue} 
                onChange = {e => setSearchValue(e.target.value)}/>
                {
                    columns && columns.map((col) =>
                    <label>
                        <input type = 'checkbox '
                         checked = {searchCols.includes(col)} 
                         onChange = {e => {
                            const checked = searchCols.includes(col)
                            setSearchCols(prev => checked ? prev.filter(searchC => searchC !== col): [...prev, col])
                        }}/>
                        {col}
                    </label>
                    )}
            </div>
            <div>
            <DataTable students = {searchStudents(students)}/>
            </div>
        </div>
    )
}

export default FetchStudents
