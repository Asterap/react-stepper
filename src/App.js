import React, {Component} from 'react';
import './App.css';

/** Components **/
import Stepper from './component/stepper/stepper.component';
import './component/stepper/stepper.component.css'

import FirstStep from './component/form-1/form.component'
import './component/form-1/form.component.css'

import SecondStep from './component/form-2/form.component'
import './component/form-2/form.component.css'

import ThirdStep from './component/form-3/form.component'
import './component/form-3/form.component.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            formStatus: false,
        };
        this.form = {
            civility: 'Mr',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            favoriteFramework: ''
        };

        this.update = this.update.bind(this);
        this.updateStep = this.updateStep.bind(this);
        this.dataCheck = this.dataCheck.bind(this);
        this.reset = this.reset.bind(this);
        this.save = this.save.bind(this);
    }

    update(form, currentForm) {
        this.setState({
            form: form
        });
        this.setState({
            activeStep: currentForm
        })
    }

    updateStep(index) {
        this.setState({
            activeStep: index
        })
    }

    dataCheck() {
        return (this.state.form && !this.state.formStatus)
    }

    save() {
        this.setState({
            formStatus: true
        });
        const httpRequest = new XMLHttpRequest();
        httpRequest.open("POST", 'http://localhost:4242/form');
        httpRequest.setRequestHeader("Content-Type", "application/json");
        httpRequest.send(JSON.stringify(this.form));
    }

    reset() {
        this.form = {
            civility: 'Mr',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            favoriteFramework: ''
        };
        this.setState({
            activeStep: 0
        })
    }

    render() {
        return (
            <div className="App">
                <Stepper dataCheck={this.dataCheck} updateStep={this.updateStep}
                         title={[{title: 'Complete your profile'}, {title: 'Questions'}, {title: 'Summary'}]}
                         activeStep={this.state.activeStep}/>
                {(this.state.activeStep === 0) &&
                <FirstStep update={this.update} form={this.form}/>
                }
                {this.state.activeStep === 1 &&
                <SecondStep update={this.update} form={this.form}/>
                }
                {this.state.activeStep === 2 &&
                <ThirdStep reset={this.reset} update={this.update} save={this.save} form={this.form}/>
                }
                {this.state.activeStep === 3 &&
                <div className={'thx'}>Thank you for your time ! </div>
                }
            </div>
        );
    }
}

export default App;
