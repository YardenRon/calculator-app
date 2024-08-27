import { PropsWithChildren } from 'react';
import './ButtonBox.scss';

const ButtonBox = ({ children }: PropsWithChildren) => {
    return <div className="button-box"> { children } </div>;
};

export default ButtonBox;