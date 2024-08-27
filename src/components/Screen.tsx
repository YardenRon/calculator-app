import { Textfit } from 'react-textfit';
import './Screen.scss';

interface ScreenProps {
    value: string;
}

const Screen = ({value}: ScreenProps) => {
    return (
        <Textfit className='screen' mode="single" max={70}>
            {value}
        </Textfit>
    );
};

export default Screen;