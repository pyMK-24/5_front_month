import { useForm } from "react-hook-form"
import style from "./Register.module.css"

export const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const password = watch("password")

    const onSubmit = (data) => {
        console.log(data)
        alert("Registration was succesful !")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <h1>Registration</h1>
            <input placeholder="name" {...register("name", { required: true })} />
            {errors.name && <span>This field is required</span>}

            <input placeholder="email" {...register("email", { required: true,  pattern: {
                                                                value: /^[^\s@]{2,}@[^\s@]+\.[^\s@]+$/,
                                                                message: "Invalid email address",}, 
                                                            })} />
            {errors.email && <span>{errors.email.message}</span>}
            {errors.email && <span>This field is required</span>}

            <input placeholder="password" {...register("password", {minLength: 6, maxLength: 20, required: true })}/>
            {errors.password?.type === "required" && <span>Password is required</span>}
            {errors.password?.type === "minLength" && <span>Password must be at least 6 characters</span>}
            {errors.password?.type === "maxLength" && <span>Password must be at most 20 characters</span>}


            <input placeholder="confirm password" {...register("password_val", {validate: value => value === password || "Passwords do not match" ,minLength: 6, maxLength: 20, required: true })}/>
            {errors.password_val?.type === "required" && <span>Password is required</span>}
            {errors.password_val?.type === "minLength" && <span>Password must be at least 6 characters</span>}
            {errors.password_val?.type === "maxLength" && <span>Password must be at most 20 characters</span>}

            <input type="submit" className={style.button}/>                                             
        </form>
    )   
}