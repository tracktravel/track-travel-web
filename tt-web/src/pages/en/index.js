import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("global");
  return (
    <div>
      <h1>{t("title1")}</h1>
    </div>
  );
};

export default Home;
