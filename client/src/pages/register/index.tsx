import React, { useState } from "react";
import { InputChange, FormSubmit, IUserRegister } from "../../utils/TypeScript";
import { AlertContext } from "../../contexts/AlertContext";
import { ERROR, LOADING, SUCCESS } from "../../reducers/type";
import { validRegister } from "../../utils/Valid";
import { postAPI } from "../../utils/FetchData";

const Register = () => {
  const [userRegister, setUserRegister] = useState<IUserRegister>({
    name: "",
    account: "",
    password: "",
    confirmPassword: "",
  });
  const { name, account, password, confirmPassword } = userRegister;
  const [typePass, setTypePass] = useState(false);
  const [typeCfPassword, setTypeCfPassword] = useState(false);

  const { dispatch: dispatchAlert } = React.useContext(AlertContext);

  const handleChangeInput = (e: InputChange) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormSubmit) => {
    e.preventDefault();
    const check = validRegister(userRegister);
    if (check.errors.length > 0) {
      return dispatchAlert({ type: ERROR, payload: { errors: check.errors } });
    }
    try {
      dispatchAlert({ type: LOADING, payload: { loading: true } });
      const res = await postAPI("auth/register", userRegister);
      console.log(res);
      dispatchAlert({ type: SUCCESS, payload: { success: res.data.message } });
      const active_token = res.data.active_token;
      const res2 = await postAPI("auth/active", { active_token });
      console.log(res2);
      setTimeout(
        () =>
          dispatchAlert({
            type: SUCCESS,
            payload: { success: res2.data.message },
          }),
        2000
      );
    } catch (error: any) {
      dispatchAlert({
        type: ERROR,
        payload: { errors: error.response.data.message },
      });
    }
  };

  return (
    <div className="h-screen bg-gray-50">
      <div className="mb-[80px] pt-[40px]">
        <div className="mx-auto w-[370px] rounded-sm border-[1px] border-color-border p-[20px] text-center">
          <div className="my-[30px]">
            <i
              data-visualcompletion="css-img"
              aria-label="Instagram"
              role="img"
              style={{
                backgroundImage:
                  " url(https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png)",
                backgroundPosition: "0px 0px",
                backgroundSize: "176px 186px",
                width: "174px",
                height: "50px",
                backgroundRepeat: " no-repeat",
                display: "inline-block",
              }}
            ></i>
          </div>
          <div className="footer">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  name="name"
                  type="text"
                  className="mb-[6px] w-full rounded border-[1px] border-color-border px-2 py-2 text-xs focus:outline-none"
                  placeholder="Họ và tên"
                  onChange={handleChangeInput}
                  value={name}
                />
              </div>
              <div>
                <input
                  name="account"
                  type="email"
                  className="mb-[6px] w-full rounded border-[1px] border-color-border px-2 py-2 text-xs focus:outline-none"
                  placeholder="Email"
                  onChange={handleChangeInput}
                  value={account}
                />
              </div>
              <div className="relative flex">
                <input
                  name="password"
                  type={typePass ? "text" : "password"}
                  placeholder="Mật khẩu"
                  className="mb-[6px] w-full rounded border-[1px] border-color-border px-2 py-2 text-xs focus:outline-none"
                  onChange={handleChangeInput}
                  value={password}
                />
                <small
                  className="absolute right-2 top-2 hover:cursor-pointer"
                  onClick={() => setTypePass(!typePass)}
                >
                  {typePass ? "Hide" : "Show"}
                </small>
              </div>
              <div className="relative flex">
                <input
                  name="confirmPassword"
                  type={typeCfPassword ? "text" : "password"}
                  placeholder="Nhập lại mật khẩu"
                  className="mb-[12px] w-full rounded border-[1px] border-color-border px-2 py-2 text-xs focus:outline-none"
                  onChange={handleChangeInput}
                  value={confirmPassword}
                />
                <small
                  className="absolute right-2 top-2 hover:cursor-pointer"
                  onClick={() => setTypeCfPassword(!typeCfPassword)}
                >
                  {typeCfPassword ? "Hide" : "Show"}
                </small>
              </div>
              <div className="first-letter: rounded-lg bg-[#4cb5f9]">
                <button
                  type="submit"
                  className="w-full py-2 text-white"
                  disabled={
                    name && account && password && confirmPassword
                      ? false
                      : true
                  }
                >
                  Đăng ký
                </button>
              </div>
              <div className="mt-[10px] flex justify-center">
                <div>--------------</div>
                <div> Hoặc </div>
                <div>--------------</div>
              </div>
              <div className="my-[10px] font-semibold text-[#385185]">
                <i className="fa-brands fa-square-facebook"></i>
                <a href="/"> Đăng nhập bằng Facebook</a>
              </div>
              <a href="/register" className="text-sm no-underline">
                Quên mật khẩu?
              </a>
            </form>
          </div>
        </div>
      </div>

      <div>
        <div className="container m-auto ">
          <div className="my-[10px] flex flex-1 flex-wrap justify-center">
            <div className="mx-[10px]">Meta</div>
            <div className="mx-[10px]">Giới thiệu</div>
            <div className="mx-[10px]">Blog</div>
            <div className="mx-[10px]">Việc làm</div>
            <div className="mx-[10px]">Trợ giúp</div>
            <div className="mx-[10px]">API</div>
            <div className="mx-[10px]">Quyền riêng tư</div>
            <div className="mx-[10px]">Điều khoản</div>
            <div className="mx-[10px]">Tài khoản liên quan nhất</div>
            <div className="mx-[10px]">Vị trí</div>
            <div className="mx-[10px]">Instagram Lite</div>
          </div>
          <div className="flex flex-1 flex-wrap justify-center">
            <div className="mx-[10px]">
              Tải thông tin người liên hệ lên & người không phải người dùng
            </div>
            <div className="mx-[10px]">Meta đã xác minh</div>
          </div>
          <div className="mt-[30px] flex flex-1 flex-wrap justify-center">
            <div className="mx-[10px] my-[10px]">
              Tiếng Việt <i className="fa-solid fa-chevron-down ml-1"></i>
            </div>
            <div className="mx-[10px] my-[10px]">
              © 2023 Instagram from Meta
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
