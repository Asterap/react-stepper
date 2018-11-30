import React, {Component} from 'react';

class Stepper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            activeStep: props.activeStep,
        };
        this.changeStep = this.changeStep.bind(this);
    }

    changeStep(index) {
        if (this.props.dataCheck()) {
            this.props.updateStep(index);
        }
    }

    render() {
        return (
            <div className={'stepper-bubble'}>
                {this.state.title.map((data, index) =>
                    (
                        <div className={'bubble-wrapper ' + (this.props.activeStep >= index ? 'active' : 'passive')}
                             key={index}>
                            <div className={'bubble-data'}>
                                <div className={'bubble'} onClick={() => {
                                    this.changeStep(index)
                                }}>{index + 1}</div>
                                <span>{data.title}</span>
                            </div>
                            <div className={'line ' + (this.props.activeStep > index ? 'active' : 'passive')}>
                            </div>
                        </div>
                    )
                )}
            </div>
        );
    }
}

export default Stepper;