import React from "react";
import Loading from "./Loading";
import Toast from "./Toast";
import { AlertContext } from "../../contexts/AlertContext";
import { error } from "console";

const Alert = () => {
  const { loading, success, errors } = React.useContext(AlertContext);

  let errorsDescription;
  if (Array.isArray(errors)) {
    errorsDescription = errors.join(" ");
  } else {
    errorsDescription = errors;
  }

  return (
    <>
      {loading && <Loading />}
      {success && (
        <Toast type="success" message="Success" description={success} />
      )}
      {errors && (
        <Toast type="error" message="Error" description={errorsDescription} />
      )}
    </>
  );
};

export default Alert;
