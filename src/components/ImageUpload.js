import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons';

class ImageUpload extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgPreviewUrl: ''
        }
    }
    handleImgChange = (e) => {
        const { input: { onChange } } = this.props

        let reader = new FileReader()
        let file = e.target.files[0]

        reader.onloadend = () => {
            this.setState({
              imgPreviewUrl: reader.result
            });
        }
        if(file){
            reader.readAsDataURL(file)
            onChange(file)
        }
    }
    render() {
        return (
            <div className="image-wrapper" onClick={()=>{this.input.click()}}>
                <img src={this.state.imgPreviewUrl} className="user-avatar"/>
                <FontAwesomeIcon icon={faCamera} className="input-icon"/>
                <input
                    ref={component => this.input = component}
                    name={this.props.input.name}
                    type="file" 
                    accept="image/*"
                    onChange={this.handleImgChange}
                    className="hidden"
                />
            </div>
        );
    }
}

export default ImageUpload;