import { NavLink } from "react-router-dom"

export const ToggleButtons=()=>{

    return(
        <div className="buttons">
            <NavLink to='/' className='Toggle-btn'>Net Income Chart</NavLink>
            <NavLink to='/TotalRevenueCart' className='Toggle-btn'>Total Revenue Chart</NavLink>
            <NavLink to='/TotalShareholderEquity' className='Toggle-btn'>Total Shareholder Equity Chart</NavLink>
        </div>
    )
}