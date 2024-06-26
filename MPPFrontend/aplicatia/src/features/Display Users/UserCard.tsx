import { useNavigate } from 'react-router-dom';
import { UserCardPropsType } from '../../types/UserCardProps.types';

import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import './UserCard.css';

export function UserCard({ givenUser }: UserCardPropsType) {
    let path: string = 'assets/' + givenUser.getPictureUrl();

    const navigate = useNavigate();

    const handleCardOnClick = () => {
        navigate('/editUser/' + givenUser.getId());
    };

    const modalContext = useContext(ModalContext)!;
    const setUserId = modalContext.setUserId;
    const setModalStatus = modalContext.setModalStatus;

    return (
        <div className='card' data-testid='user-card' onClick={handleCardOnClick}>
            <button
                className='remove-button'
                data-testid='remove-button'
                onClick={(e) => {
                    e.stopPropagation();
                    setModalStatus(true);
                    setUserId(givenUser.getId());
                    // removeMethod(givenUser.getId());
                }}
            >
                X
            </button>

            <div className='card-info' data-testid='card-info'>
                <div className='picture'>
                    <img src={path} alt='user profile' />
                </div>

                <div className='user-info'>
                    <div className='name'>Name: {givenUser.getName()}</div>
                    <div className='team'>Team: {givenUser.getTeam()}</div>
                    <div className='age'>Age: {givenUser.getAge()}</div>
                </div>
            </div>
        </div>
    );
}
