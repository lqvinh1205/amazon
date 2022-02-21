import toastr from "toastr";
import { signin } from "../../api/user";
import "../../css/signin.css";

const Signin = {
    render() {
        return /* html */`
            <div class='signin-container'>
              <div class='box-signin'> 
                    <div class="box-signin-img">
                        <img src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1645155962/Screenshot_2022-02-18_104552_w1jond.png" />
                    </div>
                    <div class='box-signin-content'>
                        <h3>Sign-in</h3>
                        <form id="form-signin">
                            <label for="email">Email or mobile phone number</label>
                            <input id="email" type="email" />
                            <label for="password">Password</label>
                            <input id="password" type="password" />
                            <button id="sign">Continue</button>
                        </form>
                        <p>By continuing, you agree to Amazon's <a href="/">Conditions of Use</a> and <a>Privacy Notice.</a></p>
                        <span>
                            <i class="fas fa-angle-right"></i>
                            <a href="/#/">Return</a>
                        </span>
                    </div>
              </div>
              <hr />
              <div class="text-new">
                <span>New to Amazon?</span>
              </div>
              
              <div class="btn-create">
                <button><a href="/#/signup">Create your Amazon account</a></button>
              </div>

            </div>
            <div class="footer-sign">
                    <ul class="ul-footer1">
                        <li>Conditions of Use</li>
                        <li>Privacy Notice</li>
                        <li>Help</li>
                    </ul>
                    <ul class="ul-footer2">
                        <li>© 1996-2022, Amazon.com, Inc. or its affiliates</li>
                    </ul>
                </div>
        `;
    },
    afterRender() {
        const formSignin = document.getElementById("form-signin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value,
                });
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("Đăng nhập thành công");
                console.log(data.user.id);
                setTimeout(() => {
                    if (data.user.id === 1) {
                        document.location.href = "/#/admin";
                    } else {
                        document.location.href = "/";
                    }
                }, 3000);
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default Signin;