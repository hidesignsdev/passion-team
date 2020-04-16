import React, { Component } from 'react';

class ImageUpload extends Component {
    constructor(props){
        super(props)
        this.state = {
            file: '',
            imgPreviewUrl: ''
        }
    }
    handleImgChange = (e) => {
        let reader = new FileReader()
        let file = e.target.files[0]
        reader.onloadend = () => {
            this.setState({
              file: file,
              imgPreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }
    render() {
        console.log('state',this.state)
        let imgPreview = null
        if(this.state.imgPreviewUrl){
            imgPreview = <img src={this.state.imgPreviewUrl}/>
        }
        return (
            <div className="img-wrapper">
                {imgPreview}
                <input
                    name="avatarId"
                    type="file" 
                    accept="image/*"
                    onChange={this.handleImgChange}
                />
            </div>
        );
    }
}

export default ImageUpload;