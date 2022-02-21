import toastr from "toastr";
import { signup } from "../../api/user";
import "../../css/signin.css";

const Signup = {
    render() {
        return /* html */`
            <div class='signin-container'>
              <div class='box-signin'> 
                    <div class="box-signin-img">
                        <img src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1645155962/Screenshot_2022-02-18_104552_w1jond.png" />
                    </div>
                    <div class='box-signin-content'>
                        <h3>Create account</h3>
                        <form id="form-add-user">
                            <label for="name">Your name</label>
                            <input id="name" type="text" />
                            <label for="email">Email or mobile phone number</label>
                            <input id="email" type="email" />
                            <label for="password">Password</label>
                            <input id="password" type="text" placeholder="At least 6 characters"/>
                            <button id="sign">Continue</button>
                        </form>
                        <p>By creating an account, you agree to Amazon's <a href="/">Conditions of Use</a> and <a>Privacy Notice.</a></p>
                        <div class="box-text-signup">
                            <p class="text-signup">
                                Already have an account? 
                                <a href="/#/signin">Signin <i class="fas fa-angle-right"></i></a>
                            </p>
                            <p class="text-signup">
                                Buying for work?
                                <a href="/#/">Return <i class="fas fa-angle-right"></i></a>
                            </p>
                        </div>
                    </div>
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
        const formAddUser = document.getElementById("form-add-user");
        formAddUser.addEventListener("submit", async (e) => {
            e.preventDefault();
            await signup({
                username: document.getElementById("name").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
            }).then(() => {
                toastr.success("Đăng ký thành công");
            }).catch((respron) => {
                toastr.error(respron);
            });
        });
    },
};
export default Signup;