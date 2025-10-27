import { useForm, type SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  email: string
}

 function InputForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("name")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}

export default InputForm;
