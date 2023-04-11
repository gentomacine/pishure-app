import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	username: yup.string().email().required("email is required"),
	password: yup
		.string()
		.min(7, "password should be at least 7 characters")
		.required("pasword is required"),
});

const LoginFormValidation = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});

	return { register, errors, handleSubmit };
};

export { LoginFormValidation };