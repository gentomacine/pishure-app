import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	firstname: yup.string().required("First name is required"),
	lastname: yup.string().required("Last name is required"),
	email: yup.string().email().required("email is required"),
	password: yup
		.string()
		.min(7, "password should be at least 7 characters")
		.required("pasword is required"),
});

const useFormValidation = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});

	return { register, errors, handleSubmit };
};

export { useFormValidation };
