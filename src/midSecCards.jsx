function MidCards(props) {

    const imageStyles = {
        borderRadius: "1rem",
        width: props.w,
        height: props.h
    };

    const pStyle = {
        fontSize: "1rem",
        fontWeight: "bold"
    };

    return (
        <div className="cardMain">
            <img style={imageStyles} src={props.image} alt="" />
            <p style={pStyle}>{props.content}</p>
        </div>
    );
}

export default MidCards;
