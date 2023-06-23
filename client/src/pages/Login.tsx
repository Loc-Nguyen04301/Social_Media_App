import React from "react";

const Login = () => {
  return (
    <div className="h-fit bg-gray-50">
      <div className="container">
        <div className="mt-[50px] flex justify-center">
          <div className="max-[874px]:hidden">
            <img
              src="https://about.fb.com/wp-content/uploads/2022/12/03_Candid-1.jpg?resize=890%2C775"
              width={"700px"}
            />
          </div>
          <div>
            <div className="mb-[10px] pt-[40px]">
              <div className="mx-auto  w-[370px] rounded-sm border-2 p-[20px] text-center">
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
                <div>
                  <form>
                    <div>
                      <input
                        name="email"
                        className="mb-[6px] w-full rounded border-[1px] px-2 py-2 text-xs focus:outline-none"
                        type="text"
                        placeholder="Số điện thoại, tên người dùng hoặc email"
                      />
                    </div>
                    <div>
                      <input
                        name="password"
                        type="password"
                        placeholder="Mật khẩu"
                        className="mb-[12px] w-full rounded border-[1px] px-2 py-2 text-xs focus:outline-none"
                      />
                    </div>
                    <div className="first-letter: rounded-lg bg-[#4cb5f9]">
                      <button className="py-2 text-neutral-50" type="submit">
                        Đăng nhập
                      </button>
                    </div>
                    <div className="mt-[10px] flex justify-center">
                      <div>--------------</div>
                      <div> Hoặc </div>
                      <div>--------------</div>
                    </div>
                    <div className="my-[10px] font-semibold text-[#385185]">
                      <i className="fa-brands fa-square-facebook"></i>
                      <a href="/login"> Đăng nhập bằng Facebook</a>
                    </div>
                    <a href="/register" className="text-sm no-underline">
                      Quên mật khẩu?
                    </a>
                  </form>
                </div>
              </div>
            </div>
            <div className="mb-[20px] ">
              <div className="mx-auto w-[370px] rounded-sm border-2 p-[20px] text-center">
                <div>
                  Bạn chưa có tài khoản ư?
                  <span className="font-medium text-[#3678a3]">
                    <a href="/register"> Đăng ký</a>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-[80px]">
              <div className="mx-auto w-[370px]">
                <div className="text-center">Tải ứng dụng</div>
                <div className="mt-[10px] flex justify-center">
                  <img
                    alt="Tải xuống từ Google Play"
                    src="https://static.cdninstagram.com/rsrc.php/v3/y2/r/yKDBMIG1og3.png"
                    className="mr-2 h-[40px] object-contain"
                  />
                  <img
                    alt="Tải xuống từ Microsoft"
                    src="https://static.cdninstagram.com/rsrc.php/v3/ys/r/0evRgTlaFrn.png"
                    className="ml-2 h-[40px] object-contain"
                  />
                </div>
              </div>
              <div></div>
            </div>
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

export default Login;
