import PropTypes from "prop-types";
import { ButtonLoadMore } from "./Button.styled";

const Button = ({onLoadMoreButton}) => {
    return (
        <ButtonLoadMore type = "button" onClick={onLoadMoreButton}>
            Load more
        </ButtonLoadMore>
    )
}

Button.propTypes = {
    onLoadMoreButton: PropTypes.func.isRequired 
}

export default Button;