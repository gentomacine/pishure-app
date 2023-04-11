import React from "react";

import { ReactComponent as CancelIcon } from "../../assets/cancel.svg";
import { ReactComponent as ChevronIcon } from "../../assets/chevron-down.svg";
import { ReactComponent as CameraIcon } from "../../assets/icon-camera.svg";
import { ReactComponent as FbIcon } from "../../assets/icon-fb.svg";
import { ReactComponent as MailIcon } from "../../assets/icon-mail.svg";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as MoreIcon } from "../../assets/more.svg";
import { ReactComponent as NotifyIcon } from "../../assets/notify.svg";

export default function Icon({ type, ...props }) {
	let Component = null;
	// eslint-disable-next-line default-case
	switch (type) {
		case "cancel":
			Component = CancelIcon;
			break;
		case "chevron":
			Component = ChevronIcon;
			break;
		case "camera":
			Component = CameraIcon;
			break;
		case "fb":
			Component = FbIcon;
			break;
		case "mail":
			Component = MailIcon;
			break;
		case "twitter":
			Component = TwitterIcon;
			break;
		case "logo":
			Component = Logo;
			break;
		case "notify":
			Component = NotifyIcon;
			break;
		case "more":
			Component = MoreIcon;
			break;
		case "search":
			Component = SearchIcon;
			break;
	}

	if (Component) {
		return <Component {...props} />;
	}

	return null;
}
