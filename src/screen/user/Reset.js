import React, { Component } from 'react';
import BackgroundSlider from 'react-background-slider'
import {SignInHeader, ResetPassword,Footer} from '../../components';


import bg1 from '../../asset/img/slide/bg1.jpg';
import bg2 from '../../asset/img/slide/bg2.jpg';
import bg3 from '../../asset/img/slide/bg3.png';
import bg4 from '../../asset/img/slide/bg4.png';
import bg5 from '../../asset/img/slide/bg5.jpg';


export default class Reset extends Component {
    state ={
        redirect :false,
        resetPasswordLink:'',
    }

    componentDidMount(){
        const resetPasswordLink = this.props.match.params.code;
        this.setState({resetPasswordLink})
    }
    render() {
        const {resetPasswordLink} = this.state;
        return (
            <div>
                <SignInHeader />
                <ResetPassword resetPasswordLink={resetPasswordLink} />
                <Footer />
                <BackgroundSlider
                    images={[bg1,bg2,bg3,bg4,bg5]}
                    duration={10} transition={2} 
                />
            </div>
        )
    }
}
