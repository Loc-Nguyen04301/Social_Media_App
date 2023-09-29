import { Modal } from "antd";
import useBoundStore from "../../store";

const AccountTransferModal = () => {
  const isModalAccountTransfer = useBoundStore(
    (state) => state.isModalAccountTransfer
  );
  return (
    <Modal
      title="Chuyển tài khoản"
      open={isModalAccountTransfer}
      //   onOk={handleOk}
      //   onCancel={handleCancel}
      className="account-transfer-modal"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default AccountTransferModal;
