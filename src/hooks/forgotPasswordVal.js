import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	email: yup.string().email().required("email is required")
});

const ForgotPasswordValidation = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});

	return { register, errors, handleSubmit };
};

export { ForgotPasswordValidation };