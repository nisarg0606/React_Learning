import React from 'react'
import { ButtonContained, ButtonContainedError, ButtonContainedLarge, ButtonContainedSecondary, ButtonOutlined, ButtonText, ButtonTextSmall, ColorButton } from './button'

export const ButtonExample = () => {
    return (
        <div>
            <h1>Button Example</h1>
            <ButtonText value="Button" />
            <br />
            <br />
            <ButtonContained value="Button Contained" />
            <br />
            <br />
            <ButtonOutlined value="Button Outlined" />
            <br />
            <br />
            <ButtonContainedLarge value="Button Contained Large" />
            <br />
            <br />
            <ButtonContainedSecondary value="Button Contained Secondary" />
            <br />
            <br />
            <ButtonContainedError value="Button Contained Error" />
            <br />
            <br />
            <ButtonTextSmall value="Button Text Small" />
            <br />
            <br />
            <ButtonContainedLarge value="Button Large Changed" />
            <br />
            <br />
            <ColorButton variant='contained'> Custom Color </ColorButton>
        </div>
    )
}

// export default Button