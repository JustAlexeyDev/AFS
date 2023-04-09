
export default function Login() {
    return (
        <div>
            <div>
                <div class='loginbg'>
                    <div>
                        <h1 class='mt-16'>Вход</h1>
                        <form class='text-[#000] mt-10'>
                            <input id='email' type='email' placeholder='E-mail' />
                            <input id='pswd' type='password' placeholder='Пароль'/>
                            <span class='subenter'><button type='submit' class='enter mt-16 w-[88px] h-[30px]'>Войти</button></span>              
                        </form>
                        <div class='grid  subenter mt-10'>
                            <button class='subenter'>Забыли пароль?</button>
                            <button class='subenter'>Регистрация</button>                               
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
}