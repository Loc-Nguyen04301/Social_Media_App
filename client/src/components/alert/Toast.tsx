import React from "react";
import { Alert, AlertProps, Space } from "antd";

interface ToastProps {
  message?: string;
  description?: string | undefined;
  type?: AlertProps["type"];
}

const Toast: React.FC<ToastProps> = ({ message, description, type }) => {
  return (
    <>
      <Space direction="vertical" className="absolute right-3 top-10 w-[30%]">
        <Alert
          message={message}
          description={description}
          type={type}
          closable
        />
      </Space>
    </>
  );
};

export default Toast;
