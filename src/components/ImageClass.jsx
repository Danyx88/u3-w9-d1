import React from "react";

class ImageClass extends React.Component{
    render(){
        console.log(this)
        return(
            <img src={this.props.ImageSrc} alt={this.props.ImageAlt} style={this.props.imgStyle} />
        );
    };
};

export default ImageClass;