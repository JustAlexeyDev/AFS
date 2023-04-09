export default function Register() {
    return (
        <div>
            <div>
                <div class='loginbg'>
                    <div>
                        <h1 class='mt-16'>Регистрация </h1>
                        <form class='text-[#000] mt-10'>
                            <input id='email' type='email' placeholder='E-mail' />
                            <input id='pswd' type='password' placeholder='Пароль'/>
                            <input id='pswd' type='password' placeholder='Повторите пароль'/>
                            <span class='subenter'><button type='submit' class='enter mt-16 w-[88px] h-[30px] p-2' type='submit'>Регистрация</button></span>              
                        </form>                     
                    </div>
                </div>
            </div>
        </div>
    );
}