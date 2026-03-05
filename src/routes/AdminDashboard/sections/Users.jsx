import { useTranslation } from "react-i18next";

function Users() {
	const { t } = useTranslation();

	return <div>{t("admin.users.title")}</div>;
}

export default Users;

