import title from '../assets/icons/title.svg'

export default function Home() {
    return (
        <div>
            <div>
                <div class='loginbg'>
                    <div class='title'>
                        <img src={title} />
                    </div>
                </div>
            </div>
            <span class=''>
                <button class='mapbutton'>Карта</button>
            </span>
        </div>
    );
}