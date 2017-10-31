<script language="javascript">
            function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching        https://stackoverflow.com/questions/11930253/how-to-create-a-login-page-when-username-and-password-is-equal-in-html     */
                if(form.userid.value == "myuserid" && form.pswrd.value == "mypswrd") {
                    window.open('target.html')/*opens the target page while Id & password matches*/
                }
                else {
                    alert("Error Password or Username")/*displays error message*/
                 /*https://www.formget.com/javascript-login-form/*/
                 /*https://www.daniweb.com/programming/web-development/code/330933/a-simple-html-login-page-using-javascript*/
                }
            }
        </script>