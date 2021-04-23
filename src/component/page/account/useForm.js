import {useState, useEffect} from 'react'

const useForm = ({validate}) =>{
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirm_password: ''
    })

    const [errors, setErrors] = useState({})
    // have not submitted yet
    const [isSubmiting, setIsSubmitting] = useState(false)

    // 
    const handleChange = (e) =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    // do not refresh when click submit, it means input fields doesn't lose vlaue
    const handleSubmit = (e) =>{
        e.preventDefault()
        setErrors(validate(values))
        setIsSubmitting(true)
    }
    return {handleChange, values, handleSubmit, errors}
}
export default useForm