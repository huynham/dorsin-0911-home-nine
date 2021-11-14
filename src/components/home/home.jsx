import { useState } from 'react'
import './home.css'

function Home(){
   
    const [bao2,setBao2] = useState("")
    
    const SuKien1 = (e)=>{
        if(e.target.value === ''){
            setBao2("This field is invalid");
            document.getElementsByClassName("inp-email")[0].style.border = "1px solid red";
        }else {setBao2("");
        document.getElementsByClassName("inp-email")[0].style.border = "1px solid black";
    }
    }
    

    return (
        <section id="home">
            <div className="home">
                <a href="https://huynham.github.io/dorsin-0911-home/" className="home-a"><i class="fas fa-home-lg"></i></a>
                <h3>DORSIN</h3>
                <p className="p1">Reset Password</p>
                <form>
                    
                    <p className="p2">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                    <label>Email</label><span className="thongbao">{bao2}</span><br />
                    <input type="text" placeholder="Emai" className="inp-email" onChange={SuKien1} onBlur={SuKien1} /><br />
    
                    <button type="button" className="but1">Reset your Password</button>
                   
                </form>

            </div>
        </section>
    )
}

export default Home