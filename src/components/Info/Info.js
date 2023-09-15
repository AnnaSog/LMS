import './Info.css';

const Info = () => {
    return(
        <div className='info'>
            <h1>Расписание </h1>
            <div className='weekButton'>
                <button className="prev"> &#8592;</button>
                <div className='week'>11.10.2023 - 17.10.2023</div>
                <button className="next">&#8594;</button>
            </div>
        </div>
    )
}

export default Info;