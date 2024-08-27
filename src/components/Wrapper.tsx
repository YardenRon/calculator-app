import { PropsWithChildren } from 'react';
import './Wrapper.scss';

const Wrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className='wrapper'>
            {children}
        </div>
    );
};

export default Wrapper;