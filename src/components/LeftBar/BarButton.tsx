import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeActiveButton } from '../../store/reducers/baseReducer'
type BarBattonProps = {
    icon: string,
    children: string
}

export const BarButton: React.FC<BarBattonProps> = ({ icon, children }) => {
    const activeButton = useAppSelector((state) => state.base.activeButton)
    const dispatch = useAppDispatch()
    return (
        <button onClick={() => dispatch(changeActiveButton(children))} className={(activeButton == children) ? 'left-bar__button active' : 'left-bar__button'}><img src={icon} alt="" /> {children}</button>
    )
}