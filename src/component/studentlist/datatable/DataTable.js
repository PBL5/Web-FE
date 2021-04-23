import React, {useEffect} from 'react'

const DataTable = ({students}) => {
    // heading- tên mỗi cột
    const columns = students[0] && Object.keys(students[0])
    
   

    return (
        <table cellPadding = {0} cellSpacing = {0}> 
        <thread>
            {/* student là 1 mảng, phần tử đầu tiên là header, dùng map để show header thành mỗi label- tên cột trong bảng */}
            <tr>{students[0] && columns.map((label) => <th>{label}</th>)}</tr>
        </thread>
        <tbody>
            {/*- những phần tử tiếp theo là giá trị infor của 1 student, students map đến phần tử đó, 
            - mỗi phần tử lại map đến từng phần tử hàng đó
            - giống như mảng 2 chiều, mà mỗi hàng là 1 mảng con  */}
            {students.map((row) =>(
                <tr>
                    {columns.map((cols) =>(
                        <td>{row[cols]}</td>
            ))}
                </tr>
            ))}
        </tbody>
        </table>
    )
}

export default DataTable
