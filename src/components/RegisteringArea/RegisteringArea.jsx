import React from "react";
import './RegisterArea.css';
import axios from "axios";
function RegisterArea() {

    function showLogin() {
        document.getElementById('loginForm').style.display = "block";
        document.getElementById('registerForm').style.display = "none";
        document.getElementById('showLogin').style.backgroundColor = "rgba(255,255,255,0.3)";
        document.getElementById('showRegister').style.backgroundColor = "transparent";
    }
    function showRegister() {
        document.getElementById('registerForm').style.display = "block";
        document.getElementById('loginForm').style.display = "none";
        document.getElementById('showLogin').style.backgroundColor = "transparent";
        document.getElementById('showRegister').style.backgroundColor = "rgba(255,255,255,0.3)";
    }
    function login(){
        document.getElementById('loader1').style.display="flex";
        document.getElementById('inp1').style.display="none";
        document.getElementById('inp2').style.display="none";
        document.getElementById('inp3').style.display="none";
        const username=document.getElementById('username').value;
        const password=document.getElementById('password').value;
        const url=`https://tiny-cyan-sockeye-shoe.cyclic.app/login?username=${username}&password=${password}`;
        
        axios.get(url)
        .then(
            (res)=>{
                localStorage.token=res.data.token;
                alert("Welcome to Cinefy")
                document.getElementById('loader1').style.display="none";
                document.getElementById('inp1').style.display="flex";
                document.getElementById('inp2').style.display="flex";
                document.getElementById('inp3').style.display="flex";
            }
        )
        .catch(err=>{
            alert("Invalid Credentials");
            document.getElementById('loader1').style.display="none";
            document.getElementById('inp1').style.display="flex";
            document.getElementById('inp2').style.display="flex";
            document.getElementById('inp3').style.display="flex";
        });
        document.getElementById('username').value="";
        document.getElementById('password').value="";
    }
    function register(){
        document.getElementById('loader2').style.display="flex";
        document.getElementById('inp4').style.display="none";
        document.getElementById('inp5').style.display="none";
        document.getElementById('inp6').style.display="none";
        const username=document.getElementById('usernameR').value;
        const password=document.getElementById('passwordR').value;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,}$/;
        if(regex.test(username)&&regex.test(password)){
            const url=`https://tiny-cyan-sockeye-shoe.cyclic.app/register?username=${username}&password=${password}`;
        
            axios.get(url)
            .then(
                (res)=>{
                    localStorage.token=res.data.token;
                    alert("Registration Successful");
                    document.getElementById('loader2').style.display="none";
                    document.getElementById('inp4').style.display="flex";
                    document.getElementById('inp5').style.display="flex";
                    document.getElementById('inp6').style.display="flex";
                }
            )
            .catch(err=>{
                alert("Credentials not Unique");
                document.getElementById('loader2').style.display="none";
                document.getElementById('inp4').style.display="flex";
                document.getElementById('inp5').style.display="flex";
                document.getElementById('inp6').style.display="flex";
            });
            document.getElementById('usernameR').value="";
            document.getElementById('passwordR').value="";
        }
        else{
            alert("Not a Strong Credential.");
            document.getElementById('loader2').style.display="none";
            document.getElementById('inp4').style.display="flex";
            document.getElementById('inp5').style.display="flex";
            document.getElementById('inp6').style.display="flex";
            document.getElementById('usernameR').value="";
            document.getElementById('passwordR').value="";
        }
        
    }
    return (
        <div className="RegisterArea">
            <div className="ButtonArea">
                <button id="showLogin" onClick={showLogin}>Login</button><button id="showRegister" onClick={showRegister}>Register</button>
            </div>
            <div className="Form" id="loginForm">
                <div className="Loader" id="loader1">
                    <div className="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="InputArea" id="inp1">
                    <div className="Label">
                        Username
                    </div>
                    <div className="Input">
                        <input type="text" id="username" />
                    </div>
                </div>
                <div className="InputArea" id="inp2">
                    <div className="Label">
                        Password
                    </div>
                    <div className="Input">
                        <input type="text" id="password" />
                    </div>
                </div>
                <div className="ButtonArea" id="inp3">
                    <button onClick={login} id="login">Login</button>
                </div>
            </div>
            <div className="Form" id="registerForm">
                <div className="Loader" id="loader2">
                    <div className="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="InputArea" id="inp4">
                    <div className="Label">
                        Username
                    </div>
                    <div className="Input">
                        <input type="text" id="usernameR" />
                    </div>
                </div>
                <div className="InputArea" id="inp5">
                    <div className="Label">
                        Password
                    </div>
                    <div className="Input">
                        <input type="text" id="passwordR" />
                    </div>
                </div>
                <div className="ButtonArea" id="inp6">
                    <button onClick={register} id="register">Register</button>
                </div>
            </div>
        </div>
    )
};
export default RegisterArea;