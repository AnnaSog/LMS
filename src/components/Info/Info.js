import './Info.css';

const Info = () => {
    return(
        <div className='info'>
            <h1>Расписание </h1>
            <div className='weekButton'>
                <button className="prev">
                    <i className="arrowPrev"></i>
                </button>
                <div className='week'>04.10 - 10.10</div>
                <button className="next">
                    <i className="arrowNext"></i>
                </button>
            </div>
            <div className='addButton'>
                <button  className='addLesson'>Добавить урок</button>
            </div>
        </div>
    )
}
export default Info;