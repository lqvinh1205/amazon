import "../../css/footer.css";

const SigninFooter = {
    render() {
        return /* html */`
            <div class="signin-footer">
                <div class="signin-content">
                    <span class="signin-text1">See personalized recommendations</span>
                    <button class='btn-signin-bottom'><a href="/#/signin">Sign in</a></button>
                    <span class="signin-start-text">New customer? <a href="/">Start here.</a></span>
                </div>
            </div>`;
    },
};
export default SigninFooter;

// import style from "./Footer.module.css";

// const SigninFooter = {
//     render() {
//         return /* html */`
//             <div class="${style["signin-footer"]}">
//                 <div class="signin-content">
//                     <span class="signin-text1">See personalized recommendations</span>
// eslint-disable-next-line max-len
//                     <button class='btn-signin btn-signin-bottom'><a href="/#/signin">Sign in</a></button>
// eslint-disable-next-line max-len
//                     <span class="signin-start-text">New customer? <a href="/">Start here.</a></span>
//                 </div>
//             </div>`;
//     },
// };
// export default SigninFooter;